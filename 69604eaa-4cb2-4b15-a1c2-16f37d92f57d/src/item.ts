export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('69604eaa-4cb2-4b15-a1c2-16f37d92f57d/models/Game_Cube_C.glb'))
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
        position: new Vector3(-0.62, 0.97, -0.25),
        rotation: Quaternion.Euler(180, 75, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(new PlaneShape())
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(-0.04, 0.97, -0.4),
        rotation: Quaternion.Euler(180, 75 + 180, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane3 = new Entity()
    QRPlane3.setParent(host)
    QRPlane3.addComponent(new PlaneShape())
    QRPlane3.addComponent(QRMaterial)
    QRPlane3.addComponent(
      new Transform({
        position: new Vector3(-0.39, 2.265, -0.03),
        rotation: Quaternion.Euler(180, 12.4, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane4 = new Entity()
    QRPlane4.setParent(host)
    QRPlane4.addComponent(new PlaneShape())
    QRPlane4.addComponent(QRMaterial)
    QRPlane4.addComponent(
      new Transform({
        position: new Vector3(-0.23, 2.265, -0.602),
        rotation: Quaternion.Euler(180, 193, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
  }
}
