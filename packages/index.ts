import { App } from 'vue'
import NdButton from './button'
const components = [ NdButton ]
const install = (app: App): void => {
    components.map((component) => app.component(component.name, component))
}

export {
    NdButton
}

export default {
    install
}
