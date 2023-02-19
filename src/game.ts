import { createEntity, createVideoPlayer } from './utils';

// Grass
createEntity({ position: new Vector3(72, 0, 64) }, 'models/grass.glb');

// Light temple
createEntity(
  { position: new Vector3(92, 0, 64), rotation: Quaternion.Euler(0, 180, 0) },
  'models/templeLight.glb'
);

// Dark temple
createEntity(
  { position: new Vector3(52, 0, 64), rotation: Quaternion.Euler(0, 180, 0) },
  'models/templeDark.glb'
);

// Video
const videoClip = new VideoClip('videos/filmClub.mp4');
createVideoPlayer(92, videoClip);
createVideoPlayer(52, videoClip);

// Github link
const githubLink = createEntity(
  { position: new Vector3(71.5, 1.3, 48) },
  'models/githubLink.glb'
);
githubLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://github.com/ShinyDCL/sandstorm-contests/tree/main/models/contest12'
      ),
    { hoverText: 'Github' }
  )
);

// Twitter link
const twitterLink = createEntity(
  { position: new Vector3(72.5, 1.3, 48) },
  'models/twitterLink.glb'
);
twitterLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://twitter.com/ShinyDCL/status/1625121692837109760'
      ),
    { hoverText: 'Twitter' }
  )
);

// NPCs
const skinColor = new Color4(
  0.9490196108818054,
  0.7607843279838562,
  0.6470588445663452,
  1
);
const whiteHairColor = new Color4(
  0.8313725590705872,
  0.8235576748847961,
  0.8230588436126709,
  1
);
const blackHairColor = new Color4(
  0.10980392247438431,
  0.10877176374197006,
  0.10870588570833206,
  1
);

const npc1 = new Entity();
const npcShape1 = new AvatarShape();
npc1.addComponent(npcShape1);
npc1.addComponent(
  new Transform({
    position: new Vector3(91, 0.8, 64),
    rotation: Quaternion.Euler(0, 150, 0),
  })
);
npcShape1.bodyShape = 'urn:decentraland:off-chain:base-avatars:BaseFemale';
npcShape1.skinColor = skinColor;
npcShape1.hairColor = whiteHairColor;
npcShape1.wearables = [
  'urn:decentraland:matic:collections-v2:0x189e481389dec43d33c735712b5f1fa4b2c9dd63:0',
  'urn:decentraland:matic:collections-v2:0xf370aea38d9f4462236807b68d20c57fc814e1e9:0',
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:0',
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:1',
  'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:12',
];
npcShape1.name = 'NPC';
npcShape1.expressionTriggerId = 'robot';
engine.addEntity(npc1);

const npc2 = new Entity();
const npcShape2 = new AvatarShape();
npc2.addComponent(npcShape2);
npc2.addComponent(
  new Transform({
    position: new Vector3(93, 0.8, 64),
    rotation: Quaternion.Euler(0, 210, 0),
  })
);
npcShape2.bodyShape = 'urn:decentraland:off-chain:base-avatars:BaseMale';
npcShape2.skinColor = skinColor;
npcShape2.hairColor = whiteHairColor;
npcShape2.wearables = [
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:0',
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:1',
  'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:12',
  'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:17',
  'urn:decentraland:matic:collections-v2:0x1091adb899c73075af0e5742d2aa24fd35a7cefd:0',
];
npcShape2.name = 'NPC';
npcShape2.expressionTriggerId = 'robot';
engine.addEntity(npc2);

const npc3 = new Entity();
const npcShape3 = new AvatarShape();
npc3.addComponent(npcShape3);
npc3.addComponent(
  new Transform({
    position: new Vector3(51, 0.8, 64),
    rotation: Quaternion.Euler(0, 150, 0),
  })
);
npcShape3.bodyShape = 'urn:decentraland:off-chain:base-avatars:BaseFemale';
npcShape3.skinColor = skinColor;
npcShape3.hairColor = blackHairColor;
npcShape3.wearables = [
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:3',
  'urn:decentraland:matic:collections-v2:0x189e481389dec43d33c735712b5f1fa4b2c9dd63:0',
  'urn:decentraland:matic:collections-v2:0xf370aea38d9f4462236807b68d20c57fc814e1e9:0',
  'urn:decentraland:matic:collections-v2:0x1091adb899c73075af0e5742d2aa24fd35a7cefd:0',
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:2',
  'urn:decentraland:off-chain:base-avatars:sport_black_shoes',
];
npcShape3.name = 'NPC';
npcShape3.expressionTriggerId = 'robot';
engine.addEntity(npc3);

const npc4 = new Entity();
const npcShape4 = new AvatarShape();
npc4.addComponent(npcShape4);
npc4.addComponent(
  new Transform({
    position: new Vector3(53, 0.8, 64),
    rotation: Quaternion.Euler(0, 210, 0),
  })
);
npcShape4.bodyShape = 'urn:decentraland:off-chain:base-avatars:BaseMale';
npcShape4.skinColor = skinColor;
npcShape4.hairColor = blackHairColor;
npcShape4.wearables = [
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:3',
  'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:17',
  'urn:decentraland:matic:collections-v2:0x1091adb899c73075af0e5742d2aa24fd35a7cefd:0',
  'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:2',
  'urn:decentraland:off-chain:base-avatars:sport_black_shoes',
];
npcShape4.name = 'NPC';
npcShape4.expressionTriggerId = 'robot';
engine.addEntity(npc4);
