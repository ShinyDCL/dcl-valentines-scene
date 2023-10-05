import { AudioSource, Entity, Transform } from '@dcl/sdk/ecs'
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
