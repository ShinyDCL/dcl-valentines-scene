# Decentraland scene

This project contains Valentines Day scene created for Sandstorm's Decentraland contest #12 - Temple of Love.
Later refined to include dark version of temple.

![Light temple from outside](screenshots/temple-light-outside.png)
![Light temple from inside](screenshots/temple-light-inside.png)
![Dark temple from outside](screenshots/temple-dark-outside.png)
![Dark temple from inside](screenshots/temple-dark-inside.png)

## 3D models

All of the 3D models have been created by me, with the exception of default grass, Github and Twitter links, which are from Decentraland Builder.

Textures used in 3D models and their sources:

- Color palette from Decentraland builder
- Light marble for building: <a href="https://ambientcg.com/view?id=Marble019">ambientCG</a>
- Light pavement for ground: <a href="https://ambientcg.com/view?id=PavingStones125A">ambientCG</a>
- Light fabric (carpet) for platforms: <a href="https://ambientcg.com/view?id=Fabric062">ambientCG</a>
- Light chip texture for glass: <a href="https://ambientcg.com/view?id=Chip006">ambientCG</a>
- Dark marble for building: <a href="https://ambientcg.com/view?id=Marble016">ambientCG</a>
- Dark pavement for ground: <a href="https://ambientcg.com/view?id=Tiles045">ambientCG</a>
- Dark fabric (carpet) for platforms: <a href="https://ambientcg.com/view?id=Fabric042">ambientCG</a>
- Dark chip texture for glass: <a href="https://ambientcg.com/view?id=Chip001">ambientCG</a>
- Images used as textures for plant leaves, keyboard, cookies and flowers generated using Midjourney AI

## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Open this folder on the command line, then run:

```
dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

## Deploy to Decentraland

If you own any parcels of land in Decentraland, or have permissions to deploy to someone else's, you can publish this project.

1. Make sure the scene parcels in `scene.json` match those you own or have permissions on.
2. Run `dcl deploy` on the project folder
3. This will open a browser tab to confirm. Metamask will prompt you to sign.
   > Note: Make sure you are using the wallet that owns the parcels or has permissions.

### Deploy to a free server

If you don't own parcels in Decentraland or are not ready to publish your scene to the world, you can share your creations by uploading your scenes to a free hosting service.

See [Upload a preview](https://docs.decentraland.org/development-guide/deploy-to-now/) for instructions on how to do this.

## Resources

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

Find more example scenes, tutorials and helper libraries in the [Awesome Repository](https://github.com/decentraland-scenes/Awesome-Repository).

If you need any help, join [Decentraland's Discord](https://dcl.gg/discord), where you'll find a vibrant community of other creators who are eager to help. You're sure to find help in the #SDK support channel.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
