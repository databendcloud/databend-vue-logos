import { App } from 'vue'
import LightDatabendCloudHorizontalSvg from './light-databend-cloudHorizontal-svg'
const components = [ LightDatabendCloudHorizontalSvg ]
const install = (app: App): void => {
  components.map((component) => app.component(component.name, component))
}

export {
  LightDatabendCloudHorizontalSvg
}

export default {
    install
}
