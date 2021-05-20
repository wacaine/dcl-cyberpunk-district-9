import { getOrLoadMaterial } from "../../entity-cache/src/item" //importing this since I can control when using sdk

export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

const getEntityByName = (name: string) =>
  Object.keys(engine.entities)
    .map((key) => engine.entities[key])
    .filter((entity) => (entity as Entity).name === name)[0]

export default class SignPost implements IScript<Props> {
  shape: GLTFShape
  planeShape: PlaneShape

  init() {
    this.shape = new GLTFShape('5af1151e-9def-47ed-88f9-1f4e52caee28/models/Game_Cube_A.glb')
    this.planeShape = new PlaneShape()
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(this.shape)
    sign.addComponent(new Transform({}))

    let url = props.image

    let QRMaterial : Material = null;
    /* //use this lookup if doing in builder exclusivly
    const imageCache = getEntityByName('imageCache')
    
    if (imageCache) {
    */
    if (getOrLoadMaterial) {//using exported method since using sdk
      QRMaterial = getOrLoadMaterial(url)
    }else{
      let QRTexture = new Texture(url)
      QRMaterial = new Material()
      QRMaterial.metallic = 0
      QRMaterial.roughness = 1
      QRMaterial.specularIntensity = 0
      QRMaterial.albedoTexture = QRTexture
    }

    //modifying rotations. do not understand why it is required. when deployed from builder works great !?!?
    //if they ever fix we can revert this file

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(this.planeShape)
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(-0.25, 0.97, -0.03),
        //rotation: Quaternion.Euler(180, 15, 0),//was -15
        rotation: Quaternion.Euler(180, 0, 0),//was -15
        scale: new Vector3(.55, .55, .55),
      })
    )
    QRPlane.getComponent(Transform).rotate(Vector3.Down(), 15)

    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(this.planeShape)
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(-0.4, 0.97, -0.61),
        //rotation: Quaternion.Euler(180, -165, 0),//was 165
        rotation: Quaternion.Euler(180, 0, 0),//was 165
        scale: new Vector3(.55,.55,.55),
      })
    )
    QRPlane2.getComponent(Transform).rotate(Vector3.Up(), 165)

    let QRPlane3 = new Entity()
    QRPlane3.setParent(host)
    QRPlane3.addComponent(this.planeShape)
    QRPlane3.addComponent(QRMaterial)
    QRPlane3.addComponent(
      new Transform({
        position: new Vector3(-0.39, 2.265, -0.04),
        //rotation: Quaternion.Euler(180, -14.5, 0),//was 14.5
        rotation: Quaternion.Euler(180, 0, 0),//was 14.5
        scale: new Vector3(.55, .55, .55),
      })
    )
    QRPlane3.getComponent(Transform).rotate(Vector3.Up(), 14.5)

    let QRPlane4 = new Entity()
    QRPlane4.setParent(host)
    QRPlane4.addComponent(this.planeShape)
    QRPlane4.addComponent(QRMaterial)
    QRPlane4.addComponent(
      new Transform({
        position: new Vector3(-0.23, 2.265, -0.602),
        //rotation: Quaternion.Euler(180, -193, 0),//wac 193
        rotation: Quaternion.Euler(180, 0, 0),//was 193
        scale: new Vector3(.58, .58, .58),
      })
    )
    QRPlane4.getComponent(Transform).rotate(Vector3.Up(), 193)
  }
}