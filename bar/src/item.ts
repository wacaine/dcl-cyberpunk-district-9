import * as utils from "@dcl/ecs-scene-utils"
import { BeerBaseState,beerGlasses } from "./modules/beerGlass"
import { Sound } from "./modules/sound"
import { Player } from "./player"
import * as ui from "@dcl/ui-scene-utils"
import { Tap, TapID } from "./modules/tap"


export const sceneMessageBus = new MessageBus()

const BEER_DISPENER_NAME = "beerDispenser"

export type Props = {
  target?: string
  onEquip?: Actions
  onUse?: Actions
  respawns?: boolean
}

export default class Button implements IScript<Props> {
  inventory: IInventory
  //targets: Record<Entity, [Entity, IChannel,Tap[]]> = {}

  // Sound
  errorSound = new Sound(new AudioClip("bar/sounds/error.mp3"))
  
  noSign = new ui.CenterImage("bar/images/no-sign.png", 1, true, 0, 20, 128, 128, {
    sourceHeight: 512,
    sourceWidth: 512,
    sourceLeft: 0,
    sourceTop: 0,
  })

  init({ inventory }) {
    this.inventory = inventory
    

    
      // Instance the input object
      const input = Input.instance

      input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, (event) => {
        //log("event.hit.hitpoint " + event.hit.hitPoint  + " " + "event.hit.normal " + event.hit.normal )
       
        if (Player.holdingBeerGlass && event.hit) {
          if (event.hit.normal.y > 0.99) {
            for (let i = 0; i < beerGlasses.length; i++) {
              // Check if item has a parent
              if (beerGlasses[i].getParent()?.alive) {
                let beerPosition: Vector3
                
                let beerDispenser: Entity

                //log("hit " + event.hit.entityId)
                if (event.hit && event.hit.length < 5) {
                  let entity = engine.entities[event.hit.entityId] as Entity
                  while (entity) {
                    //log("parent "  + entity.name)
                    if (entity.name.indexOf(BEER_DISPENER_NAME)>=0) {
                      beerDispenser = entity
                      break;
                    }
                    entity = entity.getParent() as Entity
                  }
                }
                let parentTransform:Transform
                if(beerDispenser){
                  let hitentity = engine.entities[event.hit.entityId] as Entity
                  parentTransform = beerDispenser.getParent().getComponent(Transform);
                  //log("beerDispenser " + beerDispenser.name  + " " + beerDispenser.uuid+ " " + beerDispenser.getParent())
                  //log("beerDispenser.rotation.eulerAngles " + parentTransform.rotation.eulerAngles + " " + parentTransform.rotation.eulerAngles.y  )
                }
                
                beerPosition = new Vector3(event.hit.hitPoint.x,event.hit.hitPoint.y,event.hit.hitPoint.z)

                switch (event.hit.meshName) {
                  //FIXEME. calculate scale and rotation so its dynamic adjustment of positioning
                  case "redBase_collider":
                    if(parentTransform.rotation.eulerAngles.y <= 10){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(-0.368, -0.02, -0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 170 && parentTransform.rotation.eulerAngles.y < 190){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0.368, -0.02, 0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 260 && parentTransform.rotation.eulerAngles.y < 280){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0.31, -0.02, -0.368))
                    }else if(parentTransform.rotation.eulerAngles.y >= 70 && parentTransform.rotation.eulerAngles.y < 100){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(-0.31, -0.02, 0.368))
                    }
                    beerGlasses[i].putDown(i, beerPosition, (beerGlasses[i].beerBaseState = BeerBaseState.RED_BEER))
                    break
                  case "yellowBase_collider":
                    if(parentTransform.rotation.eulerAngles.y <= 10){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0, -0.02, -0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 170 && parentTransform.rotation.eulerAngles.y < 190){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0, -0.02, 0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 260 && parentTransform.rotation.eulerAngles.y < 280){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0.31, -0.02, 0))
                    }else if(parentTransform.rotation.eulerAngles.y >= 70 && parentTransform.rotation.eulerAngles.y < 100){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(-0.31, -0.02, 0))
                    }
                    beerGlasses[i].putDown(i, beerPosition, (beerGlasses[i].beerBaseState = BeerBaseState.YELLOW_BEER))
                    break
                  case "greenBase_collider":
                    if(parentTransform.rotation.eulerAngles.y <= 10){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0.368, -0.02, -0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 170 && parentTransform.rotation.eulerAngles.y < 190){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(-0.368, -0.02, 0.31))
                    }else if(parentTransform.rotation.eulerAngles.y >= 260 && parentTransform.rotation.eulerAngles.y < 280){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(0.31, -0.02, 0.368))
                    }else if(parentTransform.rotation.eulerAngles.y >= 70 && parentTransform.rotation.eulerAngles.y < 100){
                      beerPosition = parentTransform.position.clone().subtract(new Vector3(-0.31, -0.02, -0.368))
                    }
                    beerGlasses[i].putDown(i, beerPosition, (beerGlasses[i].beerBaseState = BeerBaseState.GREEN_BEER))
                    break
                  default:
                    //log("DEFAULT")
                    beerGlasses[i].putDown(i, event.hit.hitPoint, BeerBaseState.NONE)
                    break
                }
              }
            }
          } else {
            this.noSign.show(1)
            this.errorSound.getComponent(AudioSource).playOnce()
          }
        }
      })

      input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, () => {
        if (Player.holdingBeerGlass) {
          for (let i = 0; i < beerGlasses.length; i++) {
            // Check if item has a parent
            if (beerGlasses[i].getParent()?.alive && beerGlasses[i].isFull) {
              beerGlasses[i].drink(i)
            }
          }
        }
      })
  }


  spawn(host: Entity, props: Props, channel: IChannel) {
    /*
    const key = new Entity(host.name + '-key')
    key.setParent(host)

    key.addComponent(new GLTFShape('2b9d39a4-980f-489b-8e0b-46f72552ea47/models/Red_Access_Card.glb'))
    key.addComponent(
           new OnPointerDown(() => {
        const equipAction = channel.createAction('equip', {})
        channel.sendActions([equipAction])
      }, {
		button: ActionButton.POINTER,
		 hoverText: "Pick up", distance: 6,
		})
    )*/

    // Dispenser
    const beerDispenser = new Entity(BEER_DISPENER_NAME + "."+host.name);
    beerDispenser.addComponent(new GLTFShape("bar/models/beerDispenser.glb"))
    //beerDispenser.addComponent(new Transform({ position: new Vector3(8, 1.25, 7.5) }))
    beerDispenser.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
    //beerDispenser.getComponent(Transform).rotate(Vector3.Up(), 180)
    //engine.addEntity(beerDispenser)

    beerDispenser.setParent(host);


    const baseName = host.name + ".";
    // Taps
    const redTap = new Tap(baseName+"0", new GLTFShape("bar/models/redTap.glb"), beerGlasses, BeerBaseState.RED_BEER, sceneMessageBus)
    redTap.setParent(beerDispenser)
    
    const yellowTap = new Tap(baseName+"1", new GLTFShape("bar/models/yellowTap.glb"), beerGlasses, BeerBaseState.YELLOW_BEER, sceneMessageBus)
    yellowTap.setParent(beerDispenser)
    
    const greenTap = new Tap(baseName+"2", new GLTFShape("bar/models/greenTap.glb"), beerGlasses, BeerBaseState.GREEN_BEER, sceneMessageBus)
    greenTap.setParent(beerDispenser)
    
    const taps: Tap[] = [redTap, yellowTap, greenTap]
    //log("init " + host.name + " " + taps)
    //this.targets[beerDispenser] = [beerDispenser, channel,taps]

    sceneMessageBus.on("TapPourAnim", (tapID: TapID) => {
    //channel.on("TapPourAnim", (tapID: TapID) => {  
      //let taps: Tap[] = this.targets[beerDispenser][2];
      
      //TODO figure out how to avoid string compares
      if(tapID.id.indexOf(baseName) > -1){
        const tapIDNum: number = parseInt( tapID.id.replace(baseName,"") )
        //log("found " + tapID.id + " " + tapIDNum + " " + host.name + " " + baseName + " " + taps) 
        
        taps[tapIDNum].stopAnimations()
        taps[tapIDNum].getComponent(Animator).getClip("Pour").play()
        taps[tapIDNum].removeComponent(OnPointerDown)
        taps[tapIDNum].addComponent(new utils.Delay(2500, () => {
          taps[tapIDNum].addPointerDown()
        }))
      }
    })

  }
}
