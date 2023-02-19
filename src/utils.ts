import * as utils from '@dcl/ecs-scene-utils';

export const createEntity = (
  transform: TransformConstructorArgs,
  modelPath: string
): Entity => {
  const entity = new Entity();
  entity.addComponentOrReplace(new Transform(transform));
  const shape = new GLTFShape(modelPath);
  shape.withCollisions = true;
  shape.isPointerBlocker = true;
  shape.visible = true;
  entity.addComponentOrReplace(shape);

  engine.addEntity(entity);
  return entity;
};

export const createVideoPlayer = (
  positionX: number,
  videoClip: VideoClip
): void => {
  const videoTexture = new VideoTexture(videoClip);
  videoTexture.loop = true;

  const videoMaterial = new Material();
  videoMaterial.albedoTexture = videoTexture;
  videoMaterial.roughness = 1;
  videoMaterial.specularIntensity = 0;
  videoMaterial.metallic = 0;

  const screen = new Entity();
  screen.addComponent(new PlaneShape());
  screen.addComponent(
    new Transform({
      position: new Vector3(positionX, 2.54, 72.9),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(2.2, 1.2, 1),
    })
  );
  screen.addComponent(videoMaterial);
  screen.addComponent(
    new OnPointerDown(
      () => {
        videoTexture.playing = !videoTexture.playing;
        screen.getComponent(OnPointerDown).hoverText = videoTexture.playing
          ? 'Stop'
          : 'Play';
      },
      { hoverText: videoTexture.playing ? 'Stop' : 'Play' }
    )
  );
  engine.addEntity(screen);

  // create trigger box
  const box = new Entity();
  const boxShape = new BoxShape();
  boxShape.withCollisions = false;
  boxShape.visible = false;
  boxShape.isPointerBlocker = false;

  box.addComponent(boxShape);
  box.addComponent(new Transform({ position: new Vector3(positionX, 2, 71) }));

  const triggerBox = new utils.TriggerBoxShape(new Vector3(7, 3, 7));

  box.addComponent(
    new utils.TriggerComponent(triggerBox, {
      onCameraEnter: () => {
        if (!videoTexture.playing) {
          videoTexture.playing = true;
          screen.getComponent(OnPointerDown).hoverText = videoTexture.playing
            ? 'Stop'
            : 'Play';
        }
        box.getComponent(utils.TriggerComponent).enabled = false;
      },
    })
  );

  engine.addEntity(box);
};
