import { App } from 'vue'
import DarkDatabendLabsHorizontalSvg from './SVG/databend-labs-logo-horizontal-reverse.vue';
import LightDatabendLabsHorizontalSvg from './SVG/databend-labs-logo-horizontal.vue';
import DarkDatabendLabsVerticalSvg from './SVG/databend-labs-logo-vertical-reverse.vue';
import LightDatabendLabsVerticalSvg from './SVG/databend-labs-logo-vertical.vue';
import DarkDatabendLabsHorizontalPng from './PNG/dark-databend-labs-logo-horizontal.vue';
import DarkDatabendLabsVerticalPng from './PNG/dark-databend-labs-logo-vertical.vue';
import LightDatabendLabsHorizontalPng from './PNG/light-databend-labs-logo-horizontal.vue';
import LightDatabendLabsVerticalPng from './PNG/light-databend-labs-logo-vertical.vue';

DarkDatabendLabsHorizontalSvg.install = (app: App): void => {
  app.component(DarkDatabendLabsHorizontalSvg.name, DarkDatabendLabsHorizontalSvg)
}

LightDatabendLabsHorizontalSvg.install = (app: App): void => {
  app.component(LightDatabendLabsHorizontalSvg.name, LightDatabendLabsHorizontalSvg)
}

DarkDatabendLabsVerticalSvg.install = (app: App): void => {
  app.component(DarkDatabendLabsVerticalSvg.name, DarkDatabendLabsVerticalSvg)
}

LightDatabendLabsVerticalSvg.install = (app: App): void => {
  app.component(LightDatabendLabsVerticalSvg.name, LightDatabendLabsVerticalSvg)
}

DarkDatabendLabsHorizontalPng.install = (app: App): void => {
  app.component(DarkDatabendLabsHorizontalPng.name, DarkDatabendLabsHorizontalPng)
}

DarkDatabendLabsVerticalPng.install = (app: App): void => {
  app.component(DarkDatabendLabsVerticalPng.name, DarkDatabendLabsVerticalPng)
}

LightDatabendLabsHorizontalPng.install = (app: App): void => {
  app.component(LightDatabendLabsHorizontalPng.name, LightDatabendLabsHorizontalPng)
}
LightDatabendLabsVerticalPng.install = (app: App): void => {
  app.component(LightDatabendLabsVerticalPng.name, LightDatabendLabsVerticalPng)
}
export  {
  DarkDatabendLabsHorizontalSvg,
  LightDatabendLabsHorizontalSvg,
  DarkDatabendLabsVerticalSvg,
  LightDatabendLabsVerticalSvg,
  DarkDatabendLabsHorizontalPng,
  DarkDatabendLabsVerticalPng,
  LightDatabendLabsHorizontalPng,
  LightDatabendLabsVerticalPng
}
