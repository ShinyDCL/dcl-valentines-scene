import { openExternalUrl } from '~system/RestrictedActions'

import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'

import { getImageAtlasMapping } from './imageAtlasMapper'

interface LinkConfig {
  title: string
  url: string
  uvs: number[]
}

const linkConfig: LinkConfig[] = [
  {
    title: 'X',
    url: 'https://x.com/ShinyDCL/status/1625121692837109760',
    uvs: getImageAtlasMapping(128, 128)
  },
  {
    title: 'Github',
    url: 'https://github.com/ShinyDCL/dcl-valentines-scene',
    uvs: getImageAtlasMapping(0, 128)
  },
  {
    title: 'Music',
    url: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/25486900035804141438897435195658448120910728073030870014422397462695863387612',
    uvs: getImageAtlasMapping(128, 0)
  }
]

export const Footer = () => (
  <UiEntity
    uiTransform={{
      flexGrow: 1,
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      margin: 8
    }}
  >
    <UiEntity
      uiTransform={{
        padding: { left: 6, right: 6 }
      }}
      uiBackground={{
        textureMode: 'nine-slices',
        texture: {
          src: 'images/background.png'
        },
        textureSlices: {
          top: 0.2,
          bottom: 0.2,
          left: 0.2,
          right: 0.2
        }
      }}
      uiText={{ value: `Best viewed in daylight.\nPress 'P' to adjust settings.`, fontSize: 14 }}
    ></UiEntity>

    {linkConfig.map((link) => (
      <UiEntity
        key={link.title}
        uiTransform={{
          margin: { left: 12 },
          padding: 2
        }}
        uiBackground={{
          textureMode: 'nine-slices',
          texture: {
            src: 'images/background.png'
          },
          textureSlices: {
            top: 0.2,
            bottom: 0.2,
            left: 0.2,
            right: 0.2
          }
        }}
        onMouseDown={() => {
          openExternalUrl({ url: link.url })
        }}
      >
        <UiEntity
          key={link.title}
          uiTransform={{
            width: 48,
            height: 48
          }}
          uiBackground={{
            texture: { src: 'images/icons.png' },
            textureMode: 'stretch',
            uvs: link.uvs
          }}
          onMouseDown={() => {
            openExternalUrl({ url: link.url })
          }}
        />
      </UiEntity>
    ))}
  </UiEntity>
)
