import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

import { Footer } from './footer'

export const setUpUI = () => {
  ReactEcsRenderer.setUiRenderer(() => (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%'
      }}
    >
      <Footer />
    </UiEntity>
  ))
}
