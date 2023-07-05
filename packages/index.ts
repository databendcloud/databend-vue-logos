import { App } from 'vue'
import NdButton from './button'
import LightDatabendCloudHorizontalSvg from './light-databend-cloudHorizontal-svg'
const components = [ NdButton, LightDatabendCloudHorizontalSvg ]
const install = (app: App): void => {
  components.map((component) => app.component(component.name, component))
}

export {
  NdButton,
  LightDatabendCloudHorizontalSvg
}

export default {
    install
}
