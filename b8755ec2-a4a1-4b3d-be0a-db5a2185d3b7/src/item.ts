export type Props = {
  onClick?: Actions
}
// how to loop sound??
export default class Button implements IScript<Props> {
  clip = new AudioClip('b8755ec2-a4a1-4b3d-be0a-db5a2185d3b7/sounds/Keyboard.mp3')

  init() {}

  play(entity: Entity) {
    const source = new AudioSource(this.clip)
    entity.addComponentOrReplace(source)
    source.playing = true
    
    

    const animator = entity.getComponent(Animator)
    const clip = animator.getClip('Keyboard')
    clip.stop()
    clip.play()
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity()
    button.setParent(host)

    button.addComponent(new GLTFShape('b8755ec2-a4a1-4b3d-be0a-db5a2185d3b7/models/Keyboard_Anim.glb'))

    const animator = new Animator()
    const clip = new AnimationState('Keyboard', { looping: false })
    animator.addClip(clip)
    button.addComponent(animator)

    button.addComponent(
      new OnPointerDown(
        () => {
          this.play(button)
          channel.sendActions(props.onClick)
        },
        {
          button: ActionButton.POINTER,
          hoverText: 'Type',
          distance: 6
        }
      )
    )
  }
}
