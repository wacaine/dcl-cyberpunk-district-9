import * as utils from "@dcl/ecs-scene-utils"
import { BeerBaseState, BeerGlass, beerGlasses} from "beerGlass"
import { Sound } from "./sound"
//import { sceneMessageBus } from "../item"

// Dispenser
//export const beerDispenser = new Entity()
//beerDispenser.addComponent(new GLTFShape("bar/models/beerDispenser.glb"))
//beerDispenser.addComponent(new Transform({ position: new Vector3(8, 1.25, 7.5) }))
//beerDispenser.addComponent(new Transform({ position: new Vector3(0, 1.25, 0) }))
//beerDispenser.getComponent(Transform).rotate(Vector3.Up(), 180)
//engine.addEntity(beerDispenser)

// Multiplayer
export type TapID = {
  id: string
}

// Sound
const beerPumpSound = new Sound(new AudioClip("bar/sounds/beerPump.mp3"))

export class Tap extends Entity {
  channel: MessageBus

  constructor(public id: string, model: GLTFShape, public beerGlasses: BeerGlass[], public beerBaseState: BeerBaseState, public inchannel: MessageBus) {
    super()
    //engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(new Transform())
    this.beerGlasses = beerGlasses
    this.channel = inchannel;

    this.addComponent(new Animator())
    this.getComponent(Animator).addClip(new AnimationState("Blank", { looping: false }))
    this.getComponent(Animator).addClip(new AnimationState("Pour", { looping: false }))
    this.getComponent(Animator).getClip("Blank").play()

    this.addPointerDown()
  }

  playPourAnim() {
    beerPumpSound.getComponent(AudioSource).playOnce()

    for (let i = 0; i < this.beerGlasses.length; i++) {
      if(this.beerGlasses[i].beerBaseState == this.beerBaseState) {
        this.beerGlasses[i].playPourAnim()
      }
    }
    this.channel.emit("TapPourAnim", { id: this.id })
  }

  stopAnimations() {
    this.getComponent(Animator).getClip("Blank").stop()
    this.getComponent(Animator).getClip("Pour").stop()
  }

  addPointerDown() {
    this.addComponent(new OnPointerDown(() => {
      this.playPourAnim()
    }, {
      button: ActionButton.PRIMARY,
      hoverText: "Pour",
      showFeedback: true
    }))
  }
}
/*
sceneMessageBus.on("TapPourAnim", (tapID: TapID) => {
  taps[tapID.id].stopAnimations()
  taps[tapID.id].getComponent(Animator).getClip("Pour").play()
  taps[tapID.id].removeComponent(OnPointerDown)
  taps[tapID.id].addComponent(new utils.Delay(2500, () => {
    taps[tapID.id].addPointerDown()
  }))
})

// Taps
const redTap = new Tap(0, new GLTFShape("bar/models/redTap.glb"), beerGlasses, BeerBaseState.RED_BEER)
redTap.setParent(beerDispenser)

const yellowTap = new Tap(1, new GLTFShape("bar/models/yellowTap.glb"), beerGlasses, BeerBaseState.YELLOW_BEER)
yellowTap.setParent(beerDispenser)

const greenTap = new Tap(2, new GLTFShape("bar/models/greenTap.glb"), beerGlasses, BeerBaseState.GREEN_BEER)
greenTap.setParent(beerDispenser)

const taps: Tap[] = [redTap, yellowTap, greenTap]
*/