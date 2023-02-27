import { createEntity } from './utils';

export const setUpScene = (): void => {
  // Grass
  createEntity(
    { position: new Vector3(72, 0, 64) },
    'models/default/grass.glb'
  );

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

  // Github link
  const githubLink = createEntity(
    { position: new Vector3(71.5, 1.3, 48) },
    'models/default/githubLink.glb'
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
    'models/default/twitterLink.glb'
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
};
