import { engine, Entity, Material, MeshRenderer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

import { SCENE_MIDDLE, SCENE_SIZE } from './config'

const defaultScale = Vector3.create(SCENE_SIZE, SCENE_MIDDLE, SCENE_SIZE)
const defaultRotation = Quaternion.Identity()

/*
 * Creates a skybox around the scene.
 */
export const setUpSkyBox = (parent: Entity, folderPath: string): Entity => {
  const skyBoxRoot = engine.addEntity()
  Transform.create(skyBoxRoot, { position: Vector3.create(0, SCENE_MIDDLE / 2, 0), parent })

  // Front (PZ) face
  createFace(skyBoxRoot, `${folderPath}/pz.jpg`, Vector3.create(0, 0, SCENE_MIDDLE))

  // Back (NZ) face
  createFace(
    skyBoxRoot,
    `${folderPath}/nz.jpg`,
    Vector3.create(0, 0, -SCENE_MIDDLE),
    Quaternion.fromEulerDegrees(0, 180, 0)
  )

  // Right (PX) face
  createFace(
    skyBoxRoot,
    `${folderPath}/px.jpg`,
    Vector3.create(SCENE_MIDDLE, 0, 0),
    Quaternion.fromEulerDegrees(0, 90, 0)
  )

  // Left (NX) face
  createFace(
    skyBoxRoot,
    `${folderPath}/nx.jpg`,
    Vector3.create(-SCENE_MIDDLE, 0, 0),
    Quaternion.fromEulerDegrees(0, -90, 0)
  )

  // Top (PY) face
  createFace(
    skyBoxRoot,
    `${folderPath}/py.jpg`,
    Vector3.create(0, SCENE_MIDDLE / 2, 0),
    Quaternion.fromEulerDegrees(-90, 0, 0),
    Vector3.create(SCENE_SIZE, SCENE_SIZE, SCENE_SIZE)
  )

  return skyBoxRoot
}

/*
 * Creates a skybox face.
 */
const createFace = (
  parent: Entity,
  textureSrc: string,
  position: Vector3,
  rotation: Quaternion = defaultRotation,
  scale: Vector3 = defaultScale
): Entity => {
  const face = engine.addEntity()
  Transform.create(face, { position, rotation, scale, parent })
  MeshRenderer.setPlane(face)
  Material.setBasicMaterial(face, { texture: Material.Texture.Common({ src: textureSrc }) })

  return face
}
