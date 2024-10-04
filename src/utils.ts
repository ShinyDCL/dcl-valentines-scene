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

/*
 * Shows an entity by adjusting its scale.
 */
export const showEntity = (entity: Entity) => {
  Transform.getMutable(entity).scale = Vector3.create(1, 1, 1)
}

/*
 * Hides an entity by adjusting its scale.
 */
export const hideEntity = (entity: Entity) => {
  Transform.getMutable(entity).scale = Vector3.create(0, 0, 0)
}

/*
 * Plays a sound on an entity.
 */
export const playSound = (entity: Entity) => {
  const audioSource = AudioSource.getMutable(entity)
  audioSource.playing = true
}

/*
 * Stops a sound on an entity.
 */
export const stopSound = (entity: Entity) => {
  const audioSource = AudioSource.getMutable(entity)
  audioSource.playing = false
}

/*
 * Checks if sound is currently playing on an entity.
 */
export const isSoundPlaying = (entity: Entity): boolean => {
  const audioSource = AudioSource.get(entity)
  return !!audioSource.playing
}

/*
 * Toggles the video playback on an entity.
 */
export const toggleVideo = (entity: Entity): boolean => {
  const videoPlayer = VideoPlayer.getMutable(entity)
  videoPlayer.playing = !videoPlayer.playing
  return videoPlayer.playing
}

/*
 * Adds an interaction to an entity.
 */
export const addInteraction = (entity: Entity, hoverText: string, onClick: () => void) => {
  pointerEventsSystem.onPointerDown({ entity, opts: { button: InputAction.IA_POINTER, hoverText } }, onClick)
}

/*
 * Updates the hover text of an entity's pointer event feedback.
 */
export const updateButtonFeedback = (entity: Entity, text: string) => {
  const hoverFeedback = PointerEvents.getMutable(entity)
  if (hoverFeedback?.pointerEvents?.[0]?.eventInfo) hoverFeedback.pointerEvents[0].eventInfo.hoverText = text
}
