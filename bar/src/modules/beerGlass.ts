import * as utils from "@dcl/ecs-scene-utils"
import { Sound } from "./sound"
import { Player } from "../player"
import { sceneMessageBus } from "../item"

// Track player's state
export enum BeerBaseState {
  NONE = "Blank",
  RED_BEER = "PourRed",
  YELLOW_BEER = "PourYellow",
  GREEN_BEER = "PourGreen",
}

// Multiplayer
type BeerGlassState = {
  id: number,
  position: Vector3,
  beerState: BeerBaseState
}

// Sound
const pickUpSound = new Sound(new AudioClip("bar/sounds/pickUp.mp3"))
const putDownSound = new Sound(new AudioClip("bar/sounds/putDown.mp3"))
const swallowSound = new Sound(new AudioClip("bar/sounds/swallow.mp3"))

export class BeerGlass extends Entity {
  public isFull: boolean = false
  public beerBaseState: BeerBaseState = BeerBaseState.NONE

  constructor(public id: number, model: GLTFShape, position: Vector3, public holdPosition: Vector3, public rotatePosition: number) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(new Transform({ position: position }))

    this.addComponent(new Animator())
    this.getComponent(Animator).addClip(new AnimationState("Blank", { looping: false }))
    this.getComponent(Animator).addClip(new AnimationState("PourRed", { looping: false }))
    this.getComponent(Animator).addClip(new AnimationState("PourYellow", { looping: false }))
    this.getComponent(Animator).addClip(new AnimationState("PourGreen", { looping: false }))
    this.getComponent(Animator).getClip("Blank").play()

    this.addComponent(
      new OnPointerDown(
        () => {
          if (!Player.holdingBeerGlass) {
            this.pickup(this.id)
          }
        },
        {
          button: ActionButton.PRIMARY,
          showFeedback: true,
          hoverText: "pick up",
        }
      )
    )
  }

  playPourAnim() {
    sceneMessageBus.emit("BeerGlassPourAnim", { id: this.id, position: this.holdPosition })
  }

  stopAnimations() {
    this.getComponent(Animator).getClip("Blank").stop()
    this.getComponent(Animator).getClip("PourRed").stop()
    this.getComponent(Animator).getClip("PourYellow").stop()
    this.getComponent(Animator).getClip("PourGreen").stop()
  }

  private pickup(id: number): void {
    this.setParent(null)
    pickUpSound.getComponent(AudioSource).playOnce()
    this.setParent(Attachable.FIRST_PERSON_CAMERA)
    this.addComponentOrReplace(
      new utils.Delay(100, () => {
        Player.holdingBeerGlass = true
      })
    )
    this.getComponent(Transform).rotate(Vector3.Right(), this.rotatePosition)
    sceneMessageBus.emit("BeerGlassPickedUp", { id: id, position: this.holdPosition })
  }

  putDown(id: number, placePosition: Vector3, beerBaseState: BeerBaseState): void {
    this.setParent(null)
    putDownSound.getComponent(AudioSource).playOnce()
    Player.holdingBeerGlass = false
    sceneMessageBus.emit("BeerGlassPutDown", { id: id, position: placePosition, beerState: beerBaseState })
  }

  drink(id: number): void {
    swallowSound.getComponent(AudioSource).playOnce()
    sceneMessageBus.emit("BeerGlassDrink", { id: id })
  }

  addPointerDown() {
    this.addComponent(
      new OnPointerDown(
        () => {
          if (!Player.holdingBeerGlass) {
            this.pickup(this.id)
          }
        },
        {
          button: ActionButton.PRIMARY,
          showFeedback: true,
          hoverText: "pick up",
        }
      )
    )
  }
}

sceneMessageBus.on("BeerGlassPickedUp", (beerGlassState: BeerGlassState) => {
  beerGlasses[beerGlassState.id].getComponent(Transform).position.set(beerGlassState.position.x, beerGlassState.position.y, beerGlassState.position.z)
  beerGlasses[beerGlassState.id].beerBaseState = BeerBaseState.NONE
})

sceneMessageBus.on("BeerGlassPutDown", (beerGlassState: BeerGlassState) => {
  beerGlasses[beerGlassState.id].beerBaseState = beerGlassState.beerState
  beerGlasses[beerGlassState.id].getComponent(Transform).rotation.set(0, 0, 0, 1)
  beerGlasses[beerGlassState.id].getComponent(Transform).position.set(beerGlassState.position.x, beerGlassState.position.y, beerGlassState.position.z)
})

sceneMessageBus.on("BeerGlassDrink", (beerGlassState: BeerGlassState) => {
  beerGlasses[beerGlassState.id].isFull = false
  beerGlasses[beerGlassState.id].stopAnimations()
  beerGlasses[beerGlassState.id].getComponent(Animator).getClip("Blank").play()
})

sceneMessageBus.on("BeerGlassPourAnim", (beerGlassState: BeerGlassState) => {
  beerGlasses[beerGlassState.id].isFull = true
  beerGlasses[beerGlassState.id].stopAnimations()
  beerGlasses[beerGlassState.id].getComponent(Animator).getClip(beerGlasses[beerGlassState.id].beerBaseState).play()
  beerGlasses[beerGlassState.id].removeComponent(OnPointerDown)
  beerGlasses[beerGlassState.id].addComponent(
    new utils.Delay(2500, () => {
      beerGlasses[beerGlassState.id].addPointerDown()
    })
  )
})


// Beer glasses
const beerGlassShape = new GLTFShape("bar/models/beerGlass.glb")

// NOTE: We're matching the beer object's position in the array with the id - this is not good
const beerGlass1 = new BeerGlass(0, beerGlassShape, new Vector3(8.466775894165039, 0.8591527938842773, 26.54496955871582), new Vector3(0, -0.4, 0.5), -10)
const beerGlass2 = new BeerGlass(1, beerGlassShape, new Vector3(11.046536445617676, 1.255756139755249, 27.08349609375), new Vector3(0, -0.4, 0.5), -10)
const beerGlass3 = new BeerGlass(2, beerGlassShape, new Vector3(7.995834827423096, 0.8591527938842773, 26.670207977294922), new Vector3(0, -0.4, 0.5), -10)
const beerGlass4 = new BeerGlass(3, beerGlassShape, new Vector3(7.750215530395508, 1.255756139755249, 27.141868591308594), new Vector3(0, -0.4, 0.5), -10)
const beerGlass5 = new BeerGlass(4, beerGlassShape, new Vector3(61.18278121948242, 25.255756378173828, 39.07037353515625), new Vector3(0, -0.4, 0.5), -10)
const beerGlass6 = new BeerGlass(5, beerGlassShape, new Vector3(61.328887939453125, 25.255756378173828, 40.988643646240234), new Vector3(0, -0.4, 0.5), -10)
const beerGlass7 = new BeerGlass(6, beerGlassShape, new Vector3(61.197837829589844, 25.255756378173828, 42.10081481933594), new Vector3(0, -0.4, 0.5), -10)
const beerGlass8 = new BeerGlass(7, beerGlassShape, new Vector3(19.307598114013672, 1.0561615228652954, 28.828855514526367), new Vector3(0, -0.4, 0.5), -10)
const beerGlass9 = new BeerGlass(8, beerGlassShape, new Vector3(19.858339309692383, 1.0561615228652954, 28.934812545776367), new Vector3(0, -0.4, 0.5), -10)
const beerGlass10 = new BeerGlass(9, beerGlassShape, new Vector3(4.662519454956055, 1.3717738389968872, 23.932348251342773), new Vector3(0, -0.4, 0.5), -10)

export const beerGlasses: BeerGlass[] = [beerGlass1, beerGlass2, beerGlass3, beerGlass4, beerGlass5, beerGlass6, beerGlass7, beerGlass8, beerGlass9, beerGlass10]
