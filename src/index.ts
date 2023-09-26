import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { setupLinks } from './links'
import { SCENE_MIDDLE } from './config'
import { setUpVideoPlayer } from './videoPlayer'
import { setUpSkyBox } from './skyBox'

export function main() {
  const scene = engine.addEntity()
  Transform.create(scene, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })
  GltfContainer.create(scene, { src: 'models/templeDark.glb' })

  const border = engine.addEntity()
  Transform.create(border, { parent: scene })
  GltfContainer.create(border, { src: 'models/borderDark.glb' })

  setupLinks(scene)
  setUpVideoPlayer(scene)
  setUpSkyBox(scene, 'images/skybox-dark')
}
