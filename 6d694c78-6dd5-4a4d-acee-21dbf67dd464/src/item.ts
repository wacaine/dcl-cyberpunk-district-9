export type Props = {
  onClick?: Actions
  onOpen?: Actions
  onClose?: Actions
  onClickText?: string
}

export default class Button implements IScript<Props> {
  openClip = new AudioClip('6d694c78-6dd5-4a4d-acee-21dbf67dd464/sounds/open.mp3')
  closeClip = new AudioClip('6d694c78-6dd5-4a4d-acee-21dbf67dd464/sounds/close.mp3')

  active: Record<string, boolean> = {}

  shape: GLTFShape

  init() {
    this.shape = new GLTFShape('6d694c78-6dd5-4a4d-acee-21dbf67dd464/models/Chest_SciFi.glb');
  }

  toggle(entity: Entity, value: boolean, playSound = true) {
    if (this.active[entity.name] === value) return

    if (playSound) {
      const source = new AudioSource(value ? this.openClip : this.closeClip)
      entity.addComponentOrReplace(source)
      source.playing = true
    }

    const animator = entity.getComponent(Animator)
    const openClip = animator.getClip('open')
    const closeClip = animator.getClip('close')
    openClip.stop()
    closeClip.stop()
    const clip = value ? openClip : closeClip
    clip.play()

    this.active[entity.name] = value
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const door = new Entity(host.name + '-button')
    door.setParent(host)

    const animator = new Animator()
    const closeClip = new AnimationState('close', { looping: false })
    const openClip = new AnimationState('open', { looping: false })
    animator.addClip(closeClip)
    animator.addClip(openClip)
    door.addComponent(animator)
    openClip.stop()
    door.addComponent(this.shape)

    door.addComponent(
      new OnPointerDown(
        () => {
          channel.sendActions(props.onClick)
        },
        {
          button: ActionButton.POINTER,
          hoverText: props.onClickText,
          distance: 6
        }
      )
    )

    this.active[door.name] = false

    // handle actions
    channel.handleAction('open', ({ sender }) => {
      if (this.active[door.name] == false) {
        this.toggle(door, true)
      }
      if (sender === channel.id) {
        channel.sendActions(props.onOpen)
      }
    })
    channel.handleAction('close', ({ sender }) => {
      if (this.active[door.name] == true) {
        this.toggle(door, false)
      }
      if (sender === channel.id) {
        channel.sendActions(props.onClose)
      }
    })
    channel.handleAction('toggle', ({ sender }) => {
      const newValue = !this.active[door.name]
      this.toggle(door, newValue)
      if (sender === channel.id) {
        channel.sendActions(newValue ? props.onOpen : props.onClose)
      }
    })

    // sync initial values
    channel.request<boolean>('isOpen', isOpen =>
      this.toggle(door, isOpen, false)
    )
    channel.reply<boolean>('isOpen', () => this.active[door.name])
  }
}
