export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('83087d33-84d2-4135-af09-ab0fa357b59d/models/Game_Cube_D.glb'))
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
        position: new Vector3(-0.61, 0.34, -0.3),
        rotation: Quaternion.Euler(180, -270, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(new PlaneShape())
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
