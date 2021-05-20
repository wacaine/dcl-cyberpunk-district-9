export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  shape: GLTFShape

  init() {
    this.shape = new GLTFShape('06c23898-6653-4343-b4d1-94bd343c8740/models/Display_Monitor.glb');
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)
    sign.addComponent(this.shape)
    sign.addComponent(new Transform({}))

    let url = props.image

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
        position: new Vector3(0, 0.515, -0.01),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(.465, .465, .465),
      })
    )
  }
}