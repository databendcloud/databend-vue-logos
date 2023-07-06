import { App } from 'vue'
import DarkDatabendCloudSingleSvg from './SVG/DarkDatabendCloudSingleSvg.vue';
import DarkDatabendCloudHorizontalSvg from './SVG/databend-cloud-logo-horizontal-reverse.vue';
import LightDatabendCloudHorizontalSvg from './SVG/databend-cloud-logo-horizontal.vue';
import DarkDatabendCloudVerticalSvg from './SVG/databend-cloud-logo-vertical-reverse.vue';
import LightDatabendCloudSingleSvg from './SVG/LightDatabendCloudSingleSvg.vue';
import DarkDatabendCloudHorizontalPng from './PNG/dark-databend-cloud-logo-horizontal.vue';
import DarkDatabendCloudVerticalPng from './PNG/dark-databend-cloud-logo-vertical.vue';
import DarkDatabendCloudSinglePng from './PNG/DarkDatabendCloudSinglePng.vue';
import LightDatabendCloudHorizontalPng from './PNG/light-databend-cloud-logo-horizontal.vue';
import LightDatabendCloudVerticalPng from './PNG/light-databend-cloud-logo-vertical.vue';
import LightDatabendCloudSinglePng from './PNG/LightDatabendCloudSinglePng.vue';


DarkDatabendCloudSingleSvg.install = (app: App): void => {
  app.component(DarkDatabendCloudSingleSvg.name, DarkDatabendCloudSingleSvg)
}

DarkDatabendCloudHorizontalSvg.install = (app: App): void => {
  app.component(DarkDatabendCloudHorizontalSvg.name, DarkDatabendCloudHorizontalSvg)
}

LightDatabendCloudHorizontalSvg.install = (app: App): void => {
  app.component(LightDatabendCloudHorizontalSvg.name, LightDatabendCloudHorizontalSvg)
}

DarkDatabendCloudVerticalSvg.install = (app: App): void => {
  app.component(DarkDatabendCloudVerticalSvg.name, DarkDatabendCloudVerticalSvg)
}

LightDatabendCloudSingleSvg.install = (app: App): void => {
  app.component(LightDatabendCloudSingleSvg.name, LightDatabendCloudSingleSvg)
}

DarkDatabendCloudHorizontalPng.install = (app: App): void => {
  app.component(DarkDatabendCloudHorizontalPng.name, DarkDatabendCloudHorizontalPng)
}
DarkDatabendCloudVerticalPng.install = (app: App): void => {
  app.component(DarkDatabendCloudVerticalPng.name, DarkDatabendCloudVerticalPng)
}

DarkDatabendCloudSinglePng.install = (app: App): void => {
  app.component(DarkDatabendCloudSinglePng.name, DarkDatabendCloudSinglePng)
}

LightDatabendCloudHorizontalPng.install = (app: App): void => {
  app.component(LightDatabendCloudHorizontalPng.name, LightDatabendCloudHorizontalPng)
}

LightDatabendCloudVerticalPng.install = (app: App): void => {
  app.component(LightDatabendCloudVerticalPng.name, LightDatabendCloudVerticalPng)
}

LightDatabendCloudSinglePng.install = (app: App): void => {
  app.component(LightDatabendCloudSinglePng.name, LightDatabendCloudSinglePng)
}
export  {
  DarkDatabendCloudSingleSvg,
  DarkDatabendCloudHorizontalSvg,
  LightDatabendCloudHorizontalSvg,
  DarkDatabendCloudVerticalSvg,
  LightDatabendCloudSingleSvg,
  DarkDatabendCloudHorizontalPng,
  DarkDatabendCloudVerticalPng,
  DarkDatabendCloudSinglePng,
  LightDatabendCloudHorizontalPng,
  LightDatabendCloudVerticalPng,
  LightDatabendCloudSinglePng
}
