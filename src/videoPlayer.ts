import {
  Entity,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  PointerEvents,
  Transform,
  VideoPlayer,
  engine,
  pointerEventsSystem
} from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

export const setUpVideoPlayer = (parent: Entity) => {
  const screen = engine.addEntity()
  MeshRenderer.setPlane(screen)
  MeshCollider.setPlane(screen)
  Transform.create(screen, {
    position: Vector3.create(0, 2.54, -8.91),
    scale: Vector3.create(2.2, 1.2, 1),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    parent
  })

  VideoPlayer.create(screen, {
    src: 'videos/filmClub.mp4',
    playing: false,
    loop: true,
    volume: 0.5
  })

  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0
  })

  pointerEventsSystem.onPointerDown(
    {
      entity: screen,
      opts: { button: InputAction.IA_POINTER, hoverText: 'Play!' }
    },
    function () {
      const videoPlayer = VideoPlayer.getMutable(screen)
      videoPlayer.playing = !videoPlayer.playing

      const hoverFeedback = PointerEvents.getMutable(screen)
      if (hoverFeedback?.pointerEvents?.[0]?.eventInfo) {
        hoverFeedback.pointerEvents[0].eventInfo.hoverText = videoPlayer.playing ? 'Stop!' : 'Play!'
      }
    }
  )
}
