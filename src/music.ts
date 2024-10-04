import { AudioSource, engine, Entity, Transform } from '@dcl/sdk/ecs'

const backgroundMusic = 'sounds/backgroundMusic.mp3'

/*
 * Creates an audio entity and attaches it to camera entity.
 */
export const setUpMusic = (): Entity => {
  const audioEntity = engine.addEntity()

  AudioSource.create(audioEntity, {
    audioClipUrl: backgroundMusic,
    loop: true,
    playing: true,
    volume: 0.8
  })

  Transform.create(audioEntity, {
    parent: engine.CameraEntity
  })

  return audioEntity
}
