import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { setupLinks } from './links'
import { SCENE_MIDDLE } from './config'
import { setUpVideoPlayer } from './videoPlayer'

export function main() {
  const scene = engine.addEntity()
  Transform.create(scene, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })
  GltfContainer.create(scene, { src: 'models/templeLight.glb' })

  setupLinks(scene)
  setUpVideoPlayer(scene)
}
