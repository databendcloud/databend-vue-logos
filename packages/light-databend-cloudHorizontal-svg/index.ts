import { App } from 'vue'
import LightDatabendCloudHorizontalSvg from './src/light-databend-cloudHorizontal-svg.vue'

LightDatabendCloudHorizontalSvg.install = (app: App): void => {
  app.component(LightDatabendCloudHorizontalSvg.name, LightDatabendCloudHorizontalSvg)
}

export default LightDatabendCloudHorizontalSvg
