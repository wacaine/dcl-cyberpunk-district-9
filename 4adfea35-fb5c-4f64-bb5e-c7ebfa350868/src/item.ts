export type Props = {
  onActivate?: Actions
  onDeactivate?: Actions
}

export default class Button implements IScript<Props> {
  clip = new AudioClip('4adfea35-fb5c-4f64-bb5e-c7ebfa350868/sounds/EDMLoop.mp3')

  active: Record<string, boolean> = {}

  init() {}

  toggle(entity: Entity, value: boolean) {
    if (this.active[entity.name] === value) return

    if (value) {
      const source = new AudioSource(this.clip)
      entity.addComponentOrReplace(source)
      source.loop = true
      source.playing = true
    } else {
      const source = entity.getComponent(AudioSource)
      if (source) {
        source.playing = false
      }
    }

    const animator = entity.getComponent(Animator)
    const activateClip = animator.getClip('Mix')
    const deactivateClip = animator.getClip('Pause')
    activateClip.stop()
    deactivateClip.stop()
    const clip = value ? activateClip : deactivateClip
    clip.play()

    this.active[entity.name] = value
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const transmitter = new Entity(host.name + '-button')
    transmitter.setParent(host)

    const animator = new Animator()
    const deactivateClip = new AnimationState('Pause', { looping: true })
    const activateClip = new AnimationState('Mix', { looping: true })
    animator.addClip(deactivateClip)
    animator.addClip(activateClip)
    transmitter.addComponent(animator)
    deactivateClip.play()

    transmitter.addComponent(new GLTFShape('4adfea35-fb5c-4f64-bb5e-c7ebfa350868/models/Mixtable_Anim.glb'))

    transmitter.addComponent(
      new OnPointerDown(
        () => {
          const value = !this.active[transmitter.name]
          const action = channel.createAction(
            value ? 'activate' : 'deactivate',
            {}
          )
          channel.sendActions([action])
        },
        {
          button: ActionButton.POINTER,
          hoverText: 'On/Off',
          distance: 6
        }
      )
    )

    this.active[transmitter.name] = false

    // handle actions
    channel.handleAction('activate', ({ sender }) => {
      this.toggle(transmitter, true)
      if (sender === channel.id) {
        channel.sendActions(props.onActivate)
      }
    })
    channel.handleAction('deactivate', ({ sender }) => {
      this.toggle(transmitter, false)
      if (sender === channel.id) {
        channel.sendActions(props.onDeactivate)
      }
    })

    // sync initial values
    channel.request<boolean>('isActive', isActive =>
      this.toggle(transmitter, isActive)
    )
    channel.reply<boolean>('isActive', () => this.active[transmitter.name])
  }
}
