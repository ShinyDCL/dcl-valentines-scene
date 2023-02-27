export const setUpNpcs = (): void => {
  const femaleAvatar = 'urn:decentraland:off-chain:base-avatars:BaseFemale';
  const maleAvatar = 'urn:decentraland:off-chain:base-avatars:BaseMale';
  const femaleHeadWearables = [
    'urn:decentraland:matic:collections-v2:0x189e481389dec43d33c735712b5f1fa4b2c9dd63:0', // Doki Doll Face Pink
    'urn:decentraland:matic:collections-v2:0xf370aea38d9f4462236807b68d20c57fc814e1e9:0', // Doki Chunky Pigtails
  ];
  const maleHeadWearables = [
    'urn:decentraland:matic:collections-v2:0x1091adb899c73075af0e5742d2aa24fd35a7cefd:0', // Doki Doll Face V1
    'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:17', // MVMF22 Ritual Spiky Hair
  ];
  const lightWearables = [
    'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:0', // NonFungible.com White Tunic
    'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:1', // NonFungible.com White Joggers
    'urn:decentraland:matic:collections-v2:0x956b8d57066fc3d2562de22efd63624a1ba56e35:12', // MVMF22 White Rabbit Shoes
  ];
  const darkWearables = [
    'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:2', // NonFungible.com Black Tunic
    'urn:decentraland:matic:collections-v2:0x487f7cc519dcffe91311b77d15ca7bc4a8f24991:3', // NonFungible.com Black Joggers
    'urn:decentraland:off-chain:base-avatars:sport_black_shoes', // Default black sport shoes
  ];
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

  createNpc(
    {
      position: new Vector3(91, 0.8, 64),
      rotation: Quaternion.Euler(0, 150, 0),
    },
    skinColor,
    whiteHairColor,
    femaleAvatar,
    [...femaleHeadWearables, ...lightWearables]
  );

  createNpc(
    {
      position: new Vector3(93, 0.8, 64),
      rotation: Quaternion.Euler(0, 210, 0),
    },
    skinColor,
    whiteHairColor,
    maleAvatar,
    [...maleHeadWearables, ...lightWearables]
  );

  createNpc(
    {
      position: new Vector3(51, 0.8, 64),
      rotation: Quaternion.Euler(0, 150, 0),
    },
    skinColor,
    blackHairColor,
    femaleAvatar,
    [...femaleHeadWearables, ...darkWearables]
  );

  createNpc(
    {
      position: new Vector3(53, 0.8, 64),
      rotation: Quaternion.Euler(0, 210, 0),
    },
    skinColor,
    blackHairColor,
    maleAvatar,
    [...maleHeadWearables, ...darkWearables]
  );
};

const createNpc = (
  transform: TransformConstructorArgs,
  skinColor: Color4,
  hairColor: Color4,
  bodyShape: string,
  wearables: string[]
): void => {
  const npc = new Entity();
  const npcShape = new AvatarShape();

  npc.addComponent(npcShape);
  npc.addComponent(new Transform(transform));
  npcShape.skinColor = skinColor;
  npcShape.hairColor = hairColor;
  npcShape.bodyShape = bodyShape;
  npcShape.wearables = wearables;
  npcShape.name = 'NPC';
  npcShape.expressionTriggerId = 'robot';

  engine.addEntity(npc);
};
