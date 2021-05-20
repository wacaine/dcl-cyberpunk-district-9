import { getOrLoadMaterial,getOrLoadPrimitiveShapeByName } from "../../entity-cache/src/item" //importing this since I can control when using sdk

export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  shape: PlaneShape

  init() {
    if(getOrLoadPrimitiveShapeByName){
      this.shape = getOrLoadPrimitiveShapeByName("PlaneShape") as PlaneShape
    }else{
      this.shape = new PlaneShape()
    }
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

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
    QRPlane.addComponent(this.shape)
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
