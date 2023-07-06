import { App } from 'vue'
import DarkDatabendSingleSvg from './SVG/DarkDatabendSingleSvg.vue'
import DarkDatabendHorizontalSvg from './SVG/databend-logo-horizontal-reverse.vue';
import LightDatabendHorizontalSvg from './SVG/databend-logo-horizontal.vue';
import DarkDatabendVerticalSvg from './SVG/databend-logo-vertical-reverse.vue';
import LightDatabendVerticalSvg from './SVG/databend-logo-vertical.vue';
import DarkDatabendHorizontalPng from './PNG/dark-databend-logo-horizontal.vue';
import DarkDatabendVerticalPng from './PNG/dark-databend-logo-vertical.vue';
import DarkDatabendSinglePng from './PNG/DarkDatabendSinglePng.vue';
import LightDatabendHorizontalPng from  './PNG/light-databend-logo-horizontal.vue';
import LightDatabendVerticalPng from './PNG/light-databend-logo-vertical.vue';
import LightDatabendSinglePng from './PNG/LightDatabendSinglePng.vue';



DarkDatabendSingleSvg.install = (app: App): void => {
  app.component(DarkDatabendSingleSvg.name, DarkDatabendSingleSvg)
}

LightDatabendHorizontalSvg.install = (app: App): void => {
  app.component(LightDatabendHorizontalSvg.name, LightDatabendHorizontalSvg)
}

LightDatabendHorizontalSvg.install = (app: App): void => {
  app.component(LightDatabendHorizontalSvg.name, LightDatabendHorizontalSvg)
}


DarkDatabendVerticalSvg.install = (app: App): void => {
  app.component(DarkDatabendVerticalSvg.name, DarkDatabendVerticalSvg)
}

LightDatabendVerticalSvg.install = (app: App): void => {
  app.component(LightDatabendVerticalSvg.name, LightDatabendVerticalSvg)
}

DarkDatabendHorizontalPng.install = (app: App): void => {
  app.component(DarkDatabendHorizontalPng.name, DarkDatabendHorizontalPng)
}


DarkDatabendVerticalPng.install = (app: App): void => {
  app.component(DarkDatabendVerticalPng.name, DarkDatabendVerticalPng)
}


DarkDatabendSinglePng.install = (app: App): void => {
  app.component(DarkDatabendSinglePng.name, DarkDatabendSinglePng)
}

LightDatabendHorizontalPng.install = (app: App): void => {
  app.component(LightDatabendHorizontalPng.name, LightDatabendHorizontalPng)
}

LightDatabendVerticalPng.install = (app: App): void => {
  app.component(LightDatabendVerticalPng.name, LightDatabendVerticalPng)
}

LightDatabendSinglePng.install = (app: App): void => {
  app.component(LightDatabendSinglePng.name, LightDatabendSinglePng)
}
DarkDatabendHorizontalSvg.install = (app: App): void => {
  app.component(DarkDatabendHorizontalSvg.name, DarkDatabendHorizontalSvg)
}
export  {
  DarkDatabendSingleSvg,
  LightDatabendHorizontalSvg,
  DarkDatabendHorizontalSvg,
  DarkDatabendVerticalSvg,
  LightDatabendVerticalSvg,

  DarkDatabendHorizontalPng,
  DarkDatabendVerticalPng,
  DarkDatabendSinglePng,
  LightDatabendHorizontalPng,
  LightDatabendVerticalPng,
  LightDatabendSinglePng
}
