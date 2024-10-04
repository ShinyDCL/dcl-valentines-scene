import { engine, Entity, Material, MeshCollider, MeshRenderer, Transform, VideoPlayer } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

import { addInteraction, toggleVideo, updateButtonFeedback } from './utils'

/*
 * Sets up a video player with a plane screen.
 */
export const setUpVideoPlayer = (parent: Entity): Entity => {
  const screen = engine.addEntity()
  MeshRenderer.setPlane(screen)
  MeshCollider.setPlane(screen)

  Transform.create(screen, {
    position: Vector3.create(0, 2.54, -8.91),
    scale: Vector3.create(2.2, 1.2, 1),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    parent
  })

  VideoPlayer.create(screen, {
    src: 'videos/filmClub.mp4',
    playing: false,
    loop: true,
    volume: 0.5
  })

  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0
  })

  addInteraction(screen, 'Play!', () => {
    const isPlaying = toggleVideo(screen)
    updateButtonFeedback(screen, isPlaying ? 'Stop!' : 'Play!')
  })

  return screen
}
