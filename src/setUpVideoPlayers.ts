import * as utils from '@dcl/ecs-scene-utils';
import { createTriggerBox } from './utils';

export const setUpVideoPlayers = (): void => {
  const videoClip = new VideoClip('videos/filmClub.mp4');

  // Video player X positions (first one for Light Temple, second one for Dark Temple)
  const videoPlayerPositionsX = [92, 52];

  videoPlayerPositionsX.forEach((posX: number) => {
    const screen = createVideoPlayer(
      {
        position: new Vector3(posX, 2.54, 72.9),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(2.2, 1.2, 1),
      },
      videoClip
    );

    const box = createTriggerBox(
      new Vector3(posX, 2, 71),
      new Vector3(7, 3, 7),
      () => {
        const videoTexture = screen.getComponent(Material)
          ?.albedoTexture as VideoTexture;

        if (!videoTexture) return;
        if (!videoTexture.playing) toggleVideoPlaying(screen, videoTexture);
        box.getComponent(utils.TriggerComponent).enabled = false;
      }
    );
  });
};

const createVideoPlayer = (
  transform: TransformConstructorArgs,
  videoClip: VideoClip
): Entity => {
  const videoTexture = new VideoTexture(videoClip);
  videoTexture.loop = true;

  const videoMaterial = new Material();
  videoMaterial.albedoTexture = videoTexture;
  videoMaterial.roughness = 1;
  videoMaterial.specularIntensity = 0;
  videoMaterial.metallic = 0;

  const screen = new Entity();
  screen.addComponent(new PlaneShape());
  screen.addComponent(new Transform(transform));
  screen.addComponent(videoMaterial);
  screen.addComponent(
    new OnPointerDown(() => toggleVideoPlaying(screen, videoTexture), {
      hoverText: getVideoText(videoTexture),
    })
  );
  engine.addEntity(screen);
  return screen;
};

const toggleVideoPlaying = (
  screen: Entity,
  videoTexture: VideoTexture
): void => {
  videoTexture.playing = !videoTexture.playing;
  screen.getComponent(OnPointerDown).hoverText = getVideoText(videoTexture);
};

const getVideoText = (videoTexture: VideoTexture): string => {
  return videoTexture.playing ? 'Stop' : 'Play';
};
