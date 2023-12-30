import {
  AudioSource,
  Entity,
  InputAction,
  PointerEvents,
  pointerEventsSystem,
  Transform,
  VideoPlayer
} from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

export const showEntity = (entity: Entity) => {
  Transform.getMutable(entity).scale = Vector3.create(1, 1, 1)
}

export const hideEntity = (entity: Entity) => {
  Transform.getMutable(entity).scale = Vector3.create(0, 0, 0)
}

export const playSound = (entity: Entity) => {
  const audioSource = AudioSource.getMutable(entity)
  audioSource.playing = true
}

export const stopSound = (entity: Entity) => {
  const audioSource = AudioSource.getMutable(entity)
  audioSource.playing = false
}

export const isSoundPlaying = (entity: Entity): boolean => {
  const audioSource = AudioSource.get(entity)
  return !!audioSource.playing
}

export const toggleVideo = (entity: Entity): boolean => {
  const videoPlayer = VideoPlayer.getMutable(entity)
  videoPlayer.playing = !videoPlayer.playing
  return videoPlayer.playing
}

export const addInteraction = (entity: Entity, hoverText: string, onClick: () => void) => {
  pointerEventsSystem.onPointerDown({ entity, opts: { button: InputAction.IA_POINTER, hoverText } }, onClick)
}

export const updateButtonFeedback = (entity: Entity, text: string) => {
  const hoverFeedback = PointerEvents.getMutable(entity)
  if (hoverFeedback?.pointerEvents?.[0]?.eventInfo) hoverFeedback.pointerEvents[0].eventInfo.hoverText = text
}
