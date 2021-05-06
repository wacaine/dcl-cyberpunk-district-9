import * as utils from "@dcl/ecs-scene-utils"
import { Arcade } from "./gameObjects/arcade"
import { loadPlayer, unloadPlayer } from "./player"
import { CollisionDetection } from "./gameLogic/collision"
import { BallTranslatorSystem } from "./gameLogic/ballTranslator"
import { loadAtariLevel, loadAtariBricks, unloadAtariBricks } from "./gameLogic/atariLevel"
import { loadBitcoinLevel, loadBitcoinBricks, unloadBitcoinBricks } from "./gameLogic/bitcoinLevel"
import { loadEthereumLevel, loadEthereumBricks, unloadEthereumBricks } from "./gameLogic/ethereumLevel"
import { loadDecentralandLevel, loadDecentralandBricks, unloadDecentralandBricks } from "./gameLogic/decentralandLevel"
import { GameManager } from "./gameManager"


export type Props = {
  target?: string
  onEquip?: Actions
  onUse?: Actions
  respawns?: boolean
}

const getEntityByName = (name: string) =>
  Object.keys(engine.entities)
    .map((key) => engine.entities[key])
    .filter((entity) => (entity as Entity).name === name)[0]


export default class Button implements IScript<Props> {
  inventory: IInventory
  //targets: Record<Entity, [Entity, IChannel,Tap[]]> = {}


  init({ inventory }) {
    this.inventory = inventory

    engine.addSystem(new BallTranslatorSystem(), 1)
    engine.addSystem(new CollisionDetection())
    
  }


  spawn(host: Entity, props: Props, channel: IChannel) {
    // TODO try to lookup GLTFShape to share common object
    //const arcadeCabinetAtari = new Arcade(new GLTFShape("arcade-games/models/Arcade_Machine_Black.glb"), new Transform({ position: new Vector3(16, 0.01, 16) }))
    const arcadeCabinetAtari = new Arcade(new GLTFShape("arcade-games/models/Arcade_Machine_Black.glb"), new Transform({ position: new Vector3(0, 0.01, 0) }))
    //arcadeCabinetAtari.getComponent(Transform).rotate(Vector3.Down(), 180)
    
    arcadeCabinetAtari.setParent(host);

    const sign = new Entity()
    sign.setParent(host)

    //sign.addComponent(new GLTFShape('models/QR_SimpleFrame.glb'))
    //sign.addComponent(new Transform({ position: new Vector3(3,3,1) }))
    sign.addComponent(new Transform({  }))

    let url = "arcade-games/models/controls-solid.png"

    let QRTexture = new Texture(url)
    let QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = QRTexture

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(0, 1.16, .06),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(.3, .2, .3),
      })
    )
    QRPlane.getComponent(Transform).rotate(Vector3.Left(), 60)
  

    // Breakout atari
    const atariGameTransform = new Entity()
    atariGameTransform.addComponent(new Transform({ position: new Vector3(.45, 1.2, -0.1379) }))
    atariGameTransform.getComponent(Transform).scale.setAll(0.0285)
    atariGameTransform.getComponent(Transform).rotate(Vector3.Left(), 110)
    atariGameTransform.getComponent(Transform).rotate(Vector3.Forward(), 180)
    atariGameTransform.setParent(arcadeCabinetAtari)
    let arcadeCabinetAtariTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(0, 2, -2))
    loadDecentralandLevel(atariGameTransform)

    arcadeCabinetAtari.addComponent(
      new utils.TriggerComponent(arcadeCabinetAtariTrigger, {
        onCameraEnter: () => {
          if (!GameManager.hasGameLoaded) {
            loadDecentralandBricks(atariGameTransform)
            loadPlayer(atariGameTransform, arcadeCabinetAtari)
          }
        },
        onCameraExit: () => {
          if (GameManager.hasGameLoaded) {
            unloadDecentralandBricks()
            unloadPlayer()
          }
        },
        enableDebug: false,
      })
    )


  }
}
