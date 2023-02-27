import * as utils from '@dcl/ecs-scene-utils';

export const createEntity = (
  transform: TransformConstructorArgs,
  modelPath: string
): Entity => {
  const entity = new Entity();
  const shape = new GLTFShape(modelPath);

  shape.withCollisions = true;
  shape.isPointerBlocker = true;
  shape.visible = true;

  entity.addComponentOrReplace(new Transform(transform));
  entity.addComponentOrReplace(shape);

  engine.addEntity(entity);
  return entity;
};

export const createTriggerBox = (
  position: Vector3,
  size: Vector3,
  onCameraEnter: () => void
): Entity => {
  const box = new Entity();
  const boxShape = new BoxShape();
  const triggerBox = new utils.TriggerBoxShape(size);

  boxShape.withCollisions = false;
  boxShape.visible = false;
  boxShape.isPointerBlocker = false;

  box.addComponent(boxShape);
  box.addComponent(new Transform({ position }));
  box.addComponent(new utils.TriggerComponent(triggerBox, { onCameraEnter }));

  engine.addEntity(box);
  return box;
};
