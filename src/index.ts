import { engine, Transform, videoEventsSystem, VideoState } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

import { SCENE_MIDDLE } from './config'
import { setUpLinks } from './links'
import { setUpMusic } from './music'
import { setUpScene } from './scene'
import { isSoundPlaying, playSound, stopSound } from './utils'
import { setUpVideoPlayer } from './videoPlayer'

export function main() {
  const root = engine.addEntity()
  Transform.create(root, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })

  setUpScene(root)
  setUpLinks(root)

  const videoPlayer = setUpVideoPlayer(root)
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
