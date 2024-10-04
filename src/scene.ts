import { AudioSource, engine, Entity, GltfContainer, Transform, videoEventsSystem, VideoState } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

import { SCENE_MIDDLE } from './config'
import { setUpMusic } from './music'
import { setUpSkyBox } from './skyBox'
import { addInteraction, hideEntity, isSoundPlaying, playSound, showEntity, stopSound } from './utils'
import { setUpVideoPlayer } from './videoPlayer'

interface ThemeConfig {
  templeModel: string
  borderModel: string
  buttonModel: string
  skyboxFolder: string
}

const themeConfig: [ThemeConfig, ThemeConfig] = [
  {
    // Light theme
    templeModel: 'models/templeLight.glb',
    borderModel: 'models/borderLight.glb',
    buttonModel: 'models/ballLight.glb',
    skyboxFolder: 'images/skybox-light'
  },
  {
    // Dark theme
    templeModel: 'models/templeDark.glb',
    borderModel: 'models/borderDark.glb',
    buttonModel: 'models/ballDark.glb',
    skyboxFolder: 'images/skybox-dark'
  }
]

/*
 * Sets up the main scene, switching between light and dark themes with interactions.
 */
export const setUpScene = () => {
  const root = engine.addEntity()
  Transform.create(root, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })

  // Create light and dark scenes
  const { scene: sceneLight, button: buttonLight } = createScene(root, themeConfig[0], true)
  const { scene: sceneDark, button: buttonDark } = createScene(root, themeConfig[1], false)

  // Handle theme change interactions
  setupThemeChangeInteraction(buttonLight, sceneLight, sceneDark)
  setupThemeChangeInteraction(buttonDark, sceneDark, sceneLight)

  setUpMedia(root)
}

/*
 * Creates a themed scene (Light or Dark) with a temple, border, button, and skybox.
 */
const createScene = (parent: Entity, config: ThemeConfig, visible: boolean): { scene: Entity; button: Entity } => {
  const { borderModel, buttonModel, skyboxFolder, templeModel } = config

  const scene = engine.addEntity()
  Transform.create(scene, { parent })
  if (!visible) hideEntity(scene)

  // Create entities for temple, border, and button
  createModelEntity(scene, templeModel)
  createModelEntity(scene, borderModel)
  const button = createButtonEntity(scene, buttonModel)

  // Set up the skybox for the scene
  setUpSkyBox(scene, skyboxFolder)

  return { scene, button }
}

/*
 * Creates an entity with a GLTF model and attaches it to the parent entity.
 */
const createModelEntity = (parent: Entity, modelPath: string, position?: Vector3): Entity => {
  const entity = engine.addEntity()
  Transform.create(entity, { parent, ...(position && { position }) }) ///...(position ? { position } : undefined) })
  GltfContainer.create(entity, { src: modelPath })
  return entity
}

/*
 * Creates a button entity with an interaction sound.
 */
const createButtonEntity = (parent: Entity, modelPath: string): Entity => {
  const button = createModelEntity(parent, modelPath, Vector3.create(0, 3.4, 0))

  AudioSource.create(button, {
    audioClipUrl: 'sounds/click.mp3',
    playing: false,
    loop: false
  })

  return button
}

/*
 * Handles theme change interactions by switching visibility between two scenes and playing sounds.
 */
const setupThemeChangeInteraction = (button: Entity, sceneToHide: Entity, sceneToShow: Entity): void => {
  addInteraction(button, 'Change!', () => {
    playSound(button)
    hideEntity(sceneToHide)
    showEntity(sceneToShow)
  })
}

/*
 * Sets up media elements like video and background music, handling interactions between them.
 */
const setUpMedia = (parent: Entity) => {
  const videoPlayer = setUpVideoPlayer(parent)
  const musicPlayer = setUpMusic()

  // Register system to stop playing background music when video starts playing
  // and to start playing it when video stops playing
  videoEventsSystem.registerVideoEventsEntity(videoPlayer, (videoEvent) => {
    if (videoEvent.state === VideoState.VS_PLAYING && isSoundPlaying(musicPlayer)) {
      stopSound(musicPlayer)
    } else if (videoEvent.state === VideoState.VS_PAUSED && !isSoundPlaying(musicPlayer)) {
      playSound(musicPlayer)
    }
  })
}
