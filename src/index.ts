import { setupLinks } from './links'
import { setUpVideoPlayer } from './videoPlayer'
import { setUpScene } from './scene'
import { Vector3 } from '@dcl/sdk/math'
import { SCENE_MIDDLE } from './config'
import { Transform, engine } from '@dcl/sdk/ecs'

export function main() {
  const root = engine.addEntity()
  Transform.create(root, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })

  setUpScene(root)
  setupLinks(root)
  setUpVideoPlayer(root)
}
