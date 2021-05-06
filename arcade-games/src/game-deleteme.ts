import * as utils from "@dcl/ecs-scene-utils"
import { Arcade } from "./gameObjects/arcade"
import { loadPlayer, unloadPlayer } from "./player"
import { loadAtariLevel, loadAtariBricks, unloadAtariBricks } from "./gameLogic/atariLevel"
import { loadBitcoinLevel, loadBitcoinBricks, unloadBitcoinBricks } from "./gameLogic/bitcoinLevel"
import { loadEthereumLevel, loadEthereumBricks, unloadEthereumBricks } from "./gameLogic/ethereumLevel"
import { loadDecentralandLevel, loadDecentralandBricks, unloadDecentralandBricks } from "./gameLogic/decentralandLevel"
import { GameManager } from "./gameManager"

// Base
const base = new Entity()
base.addComponent(new GLTFShape("models/baseLight.glb"))
base.addComponent(new Transform({ scale: new Vector3(2, 1, 2) }))
engine.addEntity(base)

// Atari arcade cabinet
//const arcadeCabinetAtari = new Arcade(new GLTFShape("models/arcadeCabinetAtari.glb"), new Transform({ position: new Vector3(16, 0.01, 16) }))
const arcadeCabinetAtari = new Arcade(new GLTFShape("arcade-games/models/Arcade_Machine_Black.glb"), new Transform({ position: new Vector3(16, 0.01, 16) }))
arcadeCabinetAtari.getComponent(Transform).rotate(Vector3.Down(), 180)

// Breakout atari
const atariGameTransform = new Entity()
atariGameTransform.addComponent(new Transform({ position: new Vector3(.45, 1.2, -0.1379) }))
atariGameTransform.getComponent(Transform).scale.setAll(0.0285)
atariGameTransform.getComponent(Transform).rotate(Vector3.Left(), 110)
atariGameTransform.getComponent(Transform).rotate(Vector3.Forward(), 180)
atariGameTransform.setParent(arcadeCabinetAtari)
let arcadeCabinetAtariTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(0, 2, -2))
loadAtariLevel(atariGameTransform)

arcadeCabinetAtari.addComponent(
  new utils.TriggerComponent(arcadeCabinetAtariTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadAtariBricks(atariGameTransform)
        loadPlayer(atariGameTransform, arcadeCabinetAtari)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadAtariBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)



// Bitcoin arcade cabinet
const arcadeCabinetBitcoin = new Arcade(new GLTFShape("arcade-games/models/arcadeCabinetBitcoin.glb"), new Transform({ position: new Vector3(18, 0.01, 18) }))
arcadeCabinetBitcoin.getComponent(Transform).rotate(Vector3.Up(), -90)

// Breakout bitcoin
const bitcoinGameTransform = new Entity()
bitcoinGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
bitcoinGameTransform.getComponent(Transform).scale.setAll(0.03)
bitcoinGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
bitcoinGameTransform.setParent(arcadeCabinetBitcoin)
let arcadeCabinetBitcoinTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(2, 2, 0))
loadBitcoinLevel(bitcoinGameTransform)

arcadeCabinetBitcoin.addComponent(
  new utils.TriggerComponent(arcadeCabinetBitcoinTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadBitcoinBricks(bitcoinGameTransform)
        loadPlayer(bitcoinGameTransform, arcadeCabinetBitcoin)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadBitcoinBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)

// Ethereum arcade cabinet
const arcadeCabinetEthereum = new Arcade(new GLTFShape("arcade-games/models/arcadeCabinetEthereum.glb"), new Transform({ position: new Vector3(16, 0.01, 20) }))
arcadeCabinetEthereum.getComponent(Transform).rotate(Vector3.Up(), 180)

// Breakout ethereum
const ethereumGameTransform = new Entity()
ethereumGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
ethereumGameTransform.getComponent(Transform).scale.setAll(0.03)
ethereumGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
ethereumGameTransform.setParent(arcadeCabinetEthereum)
let arcadeCabinetEthereumTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(0, 2, 2))
loadEthereumLevel(ethereumGameTransform)

arcadeCabinetEthereum.addComponent(
  new utils.TriggerComponent(arcadeCabinetEthereumTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadEthereumBricks(ethereumGameTransform)
        loadPlayer(ethereumGameTransform, arcadeCabinetEthereum)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadEthereumBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)

// Decentraland arcade cabinet
const arcadeCabinetDecentraland = new Arcade(new GLTFShape("arcade-games/models/arcadeCabinetDecentraland.glb"), new Transform({ position: new Vector3(14, 0.01, 18) }))
arcadeCabinetDecentraland.getComponent(Transform).rotate(Vector3.Up(), 90)

// Breakout decentraland
const decentralandGameTransform = new Entity()
decentralandGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
decentralandGameTransform.getComponent(Transform).scale.setAll(0.03)
decentralandGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
decentralandGameTransform.setParent(arcadeCabinetDecentraland)
let arcadeCabinetDecentralandTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(-2, 2, 0))
loadDecentralandLevel(decentralandGameTransform)

arcadeCabinetDecentraland.addComponent(
  new utils.TriggerComponent(arcadeCabinetDecentralandTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadDecentralandBricks(decentralandGameTransform)
        loadPlayer(decentralandGameTransform, arcadeCabinetDecentraland)
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
