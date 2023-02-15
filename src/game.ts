import * as utils from '@dcl/ecs-scene-utils';

// set up static scene
const scene = new Entity();
scene.addComponentOrReplace(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
const shape = new GLTFShape('models/valentinesDayScene.glb');
shape.withCollisions = true;
shape.isPointerBlocker = true;
shape.visible = true;
scene.addComponentOrReplace(shape);

engine.addEntity(scene);

const grass = new Entity();
grass.addComponentOrReplace(
  new Transform({
    position: new Vector3(64, 0, 64),
  })
);
const grassShape = new GLTFShape('models/grass.glb');
grassShape.withCollisions = true;
grassShape.isPointerBlocker = true;
grassShape.visible = true;
grass.addComponentOrReplace(grassShape);

engine.addEntity(grass);

// set up Github link
const githubLink = new Entity();
githubLink.addComponentOrReplace(
  new Transform({
    position: new Vector3(63.5, 1.3, 46.5),
  })
);
const githubLinkShape = new GLTFShape('models/githubLink.glb');
githubLinkShape.withCollisions = true;
githubLinkShape.isPointerBlocker = true;
githubLinkShape.visible = true;
githubLink.addComponentOrReplace(githubLinkShape);

githubLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://github.com/ShinyDCL/sandstorm-contests/tree/main/models/contest12'
      ),
    { hoverText: 'Github' }
  )
);

engine.addEntity(githubLink);

// set up Twitter link
const twitterLink = new Entity();
twitterLink.addComponentOrReplace(
  new Transform({
    position: new Vector3(64.5, 1.3, 46.5),
  })
);
const twitterLinkShape = new GLTFShape('models/twitterLink.glb');
twitterLinkShape.withCollisions = true;
twitterLinkShape.isPointerBlocker = true;
twitterLinkShape.visible = true;
twitterLink.addComponentOrReplace(twitterLinkShape);

twitterLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://twitter.com/ShinyDCL/status/1625121692837109760'
      ),
    { hoverText: 'Twitter' }
  )
);

engine.addEntity(twitterLink);

// set up video
const videoClip = new VideoClip('videos/filmClub.mp4');
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
    position: new Vector3(64, 2.54, 72.9),
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
box.addComponent(new Transform({ position: new Vector3(64, 2, 71) }));

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
