import { App } from 'vue'
import OpenDalPng from './png.vue';
import OpenDalSvg from './svg.vue';

OpenDalPng.install = (app: App): void => {
  app.component(OpenDalPng.name, OpenDalPng)
}

OpenDalSvg.install = (app: App): void => {
  app.component(OpenDalSvg.name, OpenDalPng)
}

export  {
  OpenDalPng, OpenDalSvg
}
