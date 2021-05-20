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
    this.shape = new GLTFShape('83087d33-84d2-4135-af09-ab0fa357b59d/models/Game_Cube_D.glb')
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

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(this.planeShape)
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(-0.61, 0.34, -0.3),
        rotation: Quaternion.Euler(180, -270, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(this.planeShape)
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(-0.02, 0.34, -0.3),
        rotation: Quaternion.Euler(180, 270, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
  }
}
