import { AudioSource, engine, Entity, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

import { setUpSkyBox } from './skyBox'
import { addInteraction, hideEntity, playSound, showEntity } from './utils'

enum Theme {
  Light = 'Light',
  Dark = 'Dark'
}

const templeModels: Record<Theme, string> = {
  [Theme.Light]: 'models/templeLight.glb',
  [Theme.Dark]: 'models/templeDark.glb'
} as const

const borderModels: Record<Theme, string> = {
  [Theme.Light]: 'models/borderLight.glb',
  [Theme.Dark]: 'models/borderDark.glb'
} as const

const buttonModels: Record<Theme, string> = {
  [Theme.Light]: 'models/ballLight.glb',
  [Theme.Dark]: 'models/ballDark.glb'
} as const

const skyBoxFolders: Record<Theme, string> = {
  [Theme.Light]: 'images/skybox-light',
  [Theme.Dark]: 'images/skybox-dark'
} as const

export const setUpScene = (parent: Entity) => {
  const { scene: sceneLight, button: buttonLight } = createScene(parent, Theme.Light, true)
  const { scene: sceneDark, button: buttonDark } = createScene(parent, Theme.Dark, false)

  addInteraction(buttonLight, 'Change!', () => {
    playSound(buttonLight)
    hideEntity(sceneLight)
    showEntity(sceneDark)
  })

  addInteraction(buttonDark, 'Change!', () => {
    playSound(buttonDark)
    hideEntity(sceneDark)
    showEntity(sceneLight)
  })
}

const createScene = (parent: Entity, theme: Theme, visible: boolean): { scene: Entity; button: Entity } => {
  const scene = engine.addEntity()
  Transform.create(scene, { parent })
  if (!visible) hideEntity(scene)

  const temple = engine.addEntity()
  Transform.create(temple, { parent: scene })
  GltfContainer.create(temple, { src: templeModels[theme] })

  const border = engine.addEntity()
  Transform.create(border, { parent: scene })
  GltfContainer.create(border, { src: borderModels[theme] })

  const button = engine.addEntity()
  Transform.create(button, { parent: scene, position: Vector3.create(0, 2, 0) })
  GltfContainer.create(button, { src: buttonModels[theme] })

  AudioSource.create(button, {
    audioClipUrl: 'sounds/click.mp3',
    playing: false,
    loop: false
  })

  setUpSkyBox(scene, skyBoxFolders[theme])

  return { scene, button }
}
