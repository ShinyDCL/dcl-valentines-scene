const ATLAS_IMAGE_WIDTH = 256
const ATLAS_IMAGE_HEIGHT = 256
const ICON_WIDTH = 128
const ICON_HEIGHT = 128

/*
 * Calculates the UV mapping for an image within an atlas.
 */
export const getImageAtlasMapping = (
  sourceLeft: number,
  sourceTop: number,
  sourceWidth: number = ICON_WIDTH,
  sourceHeight: number = ICON_HEIGHT,
  atlasWidth: number = ATLAS_IMAGE_WIDTH,
  atlasHeight: number = ATLAS_IMAGE_HEIGHT
): number[] => {
  // UV Coordinates
  const leftX = sourceLeft / atlasWidth
  const rightX = (sourceLeft + sourceWidth) / atlasWidth
  const topY = (atlasHeight - sourceTop - sourceHeight) / atlasHeight
  const bottomY = (atlasHeight - sourceTop) / atlasHeight

  // Top-left, bottom-left, bottom-right, top-right
  return [leftX, topY, leftX, bottomY, rightX, bottomY, rightX, topY]
}
