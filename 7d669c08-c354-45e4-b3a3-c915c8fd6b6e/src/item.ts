import { getOrLoadMaterial } from "../../entity-cache/src/item" //importing this since I can control when using sdk

export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    //sign.addComponent(new GLTFShape('models/QR_SimpleFrame.glb'))
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
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(0, 0.5, 0),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(1, 1, 1),
      })
    )
  }
}
