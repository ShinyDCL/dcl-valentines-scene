import { AudioSource, AvatarAnchorPointType, AvatarAttach, engine, Entity } from '@dcl/sdk/ecs'

export const setUpMusic = (): Entity => {
  // Attach entity with audio to player
  const audioEntity = engine.addEntity()
  AudioSource.create(audioEntity, {
    audioClipUrl: 'sounds/backgroundMusic.mp3',
    loop: true,
    playing: true
  })

  AvatarAttach.create(audioEntity, {
    anchorPointId: AvatarAnchorPointType.AAPT_NAME_TAG
  })

  return audioEntity
}
