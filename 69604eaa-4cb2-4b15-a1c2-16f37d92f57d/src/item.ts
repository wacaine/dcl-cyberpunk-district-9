import { getOrLoadMaterial } from "../../image-cache/src/item" //importing this since I can control when using sdk

export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

const getEntityByName = (name: string) =>
  Object.keys(engine.entities)
    .map((key) => engine.entities[key])
    .filter((entity) => (entity as Entity).name === name)[0]

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('69604eaa-4cb2-4b15-a1c2-16f37d92f57d/models/Game_Cube_C.glb'))
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
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(-0.62, 0.97, -0.25),
        //rotation: Quaternion.Euler(180, 105, 0),//was 75
        rotation: Quaternion.Euler(180, 0, 0),//was 75
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    QRPlane.getComponent(Transform).rotate(Vector3.Up(), 75)

    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(new PlaneShape())
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(-0.04, 0.97, -0.4),
        //rotation: Quaternion.Euler(180, 105 + 180, 0),//was 75+180
        rotation: Quaternion.Euler(180, 0, 0),//was 75+180
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    QRPlane2.getComponent(Transform).rotate(Vector3.Up(), 75+180)

    let QRPlane3 = new Entity()
    QRPlane3.setParent(host)
    QRPlane3.addComponent(new PlaneShape())
    QRPlane3.addComponent(QRMaterial)
    QRPlane3.addComponent(
      new Transform({
        position: new Vector3(-0.39, 2.265, -0.03),
        //rotation: Quaternion.Euler(180, -12.4, 0),//was 12.4
        rotation: Quaternion.Euler(180, 0, 0),//was 12.4
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    QRPlane3.getComponent(Transform).rotate(Vector3.Up(), 12.4)

    let QRPlane4 = new Entity()
    QRPlane4.setParent(host)
    QRPlane4.addComponent(new PlaneShape())
    QRPlane4.addComponent(QRMaterial)
    QRPlane4.addComponent(
      new Transform({
        position: new Vector3(-0.23, 2.265, -0.602),
        //rotation: Quaternion.Euler(180, -193, 0),//was 193
        rotation: Quaternion.Euler(180, 0, 0),//was 193
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    QRPlane4.getComponent(Transform).rotate(Vector3.Up(), 193)
  }
}
