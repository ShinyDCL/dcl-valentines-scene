import { engine, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

import { SCENE_MIDDLE } from './config'
import { setupLinks } from './links'
import { setUpScene } from './scene'
import { setUpVideoPlayer } from './videoPlayer'

export function main() {
  const root = engine.addEntity()
  Transform.create(root, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })

  setUpScene(root)
  setupLinks(root)
  setUpVideoPlayer(root)
}
