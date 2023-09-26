import { Entity, engine, Transform, MeshRenderer, Material } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { SCENE_MIDDLE, SCENE_SIZE } from './config'

export const setUpSkyBox = (parent: Entity, folderPath: string): Entity => {
  const defaultScale = Vector3.create(SCENE_SIZE, SCENE_MIDDLE, SCENE_SIZE)

  const skyBoxRoot = engine.addEntity()
  Transform.create(skyBoxRoot, { position: Vector3.create(0, SCENE_MIDDLE / 2, 0), parent })

  // Front
  const skyBoxPZ = engine.addEntity()
  Transform.create(skyBoxPZ, {
    position: Vector3.create(0, 0, SCENE_MIDDLE),
    scale: defaultScale,
    parent: skyBoxRoot
  })
  MeshRenderer.setPlane(skyBoxPZ)
  Material.setBasicMaterial(skyBoxPZ, { texture: Material.Texture.Common({ src: `${folderPath}/pz.jpg` }) })

  // Back
  const skyBoxNZ = engine.addEntity()
  Transform.create(skyBoxNZ, {
    position: Vector3.create(0, 0, -SCENE_MIDDLE),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  })
  MeshRenderer.setPlane(skyBoxNZ)
  Material.setBasicMaterial(skyBoxNZ, { texture: Material.Texture.Common({ src: `${folderPath}/nz.jpg` }) })

  // Right
  const skyBoxPX = engine.addEntity()
  Transform.create(skyBoxPX, {
    position: Vector3.create(SCENE_MIDDLE, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0, 90, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  })
  MeshRenderer.setPlane(skyBoxPX)
  Material.setBasicMaterial(skyBoxPX, { texture: Material.Texture.Common({ src: `${folderPath}/px.jpg` }) })

  // Left
  const skyBoxNX = engine.addEntity()
  Transform.create(skyBoxNX, {
    position: Vector3.create(-SCENE_MIDDLE, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0, -90, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  })
  MeshRenderer.setPlane(skyBoxNX)
  Material.setBasicMaterial(skyBoxNX, { texture: Material.Texture.Common({ src: `${folderPath}/nx.jpg` }) })

  // Top
  const skyBoxPY = engine.addEntity()
  Transform.create(skyBoxPY, {
    position: Vector3.create(0, SCENE_MIDDLE / 2, 0),
    rotation: Quaternion.fromEulerDegrees(-90, 0, 0),
    scale: Vector3.create(SCENE_SIZE, SCENE_SIZE, SCENE_SIZE),
    parent: skyBoxRoot
  })
  MeshRenderer.setPlane(skyBoxPY)
  Material.setBasicMaterial(skyBoxPY, { texture: Material.Texture.Common({ src: `${folderPath}/py.jpg` }) })

  return skyBoxRoot
}
