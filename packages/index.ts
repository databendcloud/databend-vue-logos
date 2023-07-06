import { App } from 'vue'
import {  
  DarkDatabendSingleSvg,
  LightDatabendHorizontalSvg,
  DarkDatabendVerticalSvg,
  LightDatabendVerticalSvg,
  DarkDatabendHorizontalPng,
  DarkDatabendVerticalPng,
  DarkDatabendSinglePng,
  LightDatabendHorizontalPng,
  LightDatabendVerticalPng,
  LightDatabendSinglePng,
  DarkDatabendHorizontalSvg
 } from './databend';
 import {
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
 } from './databend-cloud';

import {
  DarkDatabendLabsHorizontalSvg,
  LightDatabendLabsHorizontalSvg,
  DarkDatabendLabsVerticalSvg,
  LightDatabendLabsVerticalSvg,
  DarkDatabendLabsHorizontalPng,
  DarkDatabendLabsVerticalPng,
  LightDatabendLabsHorizontalPng,
  LightDatabendLabsVerticalPng
} from './databend-labs';
// import { OpenDalPng, OpenDalSvg } from './open-dal';
const components = [ 
  DarkDatabendSingleSvg,
  LightDatabendHorizontalSvg,
  LightDatabendHorizontalSvg,
  DarkDatabendVerticalSvg,
  DarkDatabendHorizontalSvg,
  LightDatabendVerticalSvg,
  DarkDatabendHorizontalPng,
  DarkDatabendVerticalPng,
  DarkDatabendSinglePng,
  LightDatabendHorizontalPng,
  LightDatabendVerticalPng,
  LightDatabendSinglePng,
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
  LightDatabendCloudSinglePng,
  DarkDatabendLabsHorizontalSvg,
  LightDatabendLabsHorizontalSvg,
  DarkDatabendLabsVerticalSvg,
  LightDatabendLabsVerticalSvg,
  DarkDatabendLabsHorizontalPng,
  DarkDatabendLabsVerticalPng,
  LightDatabendLabsHorizontalPng,
  LightDatabendLabsVerticalPng,
  // OpenDalPng, OpenDalSvg
]
const install = (app: App): void => {
  components.map((component) => app.component(component.name, component))
}

export {
  DarkDatabendSingleSvg,
  LightDatabendHorizontalSvg,
  DarkDatabendVerticalSvg,
  LightDatabendVerticalSvg,
  DarkDatabendHorizontalPng,
  DarkDatabendHorizontalSvg,
  DarkDatabendVerticalPng,
  DarkDatabendSinglePng,
  LightDatabendHorizontalPng,
  LightDatabendVerticalPng,
  LightDatabendSinglePng,
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
  LightDatabendCloudSinglePng,
  DarkDatabendLabsHorizontalSvg,
  LightDatabendLabsHorizontalSvg,
  DarkDatabendLabsVerticalSvg,
  LightDatabendLabsVerticalSvg,
  DarkDatabendLabsHorizontalPng,
  DarkDatabendLabsVerticalPng,
  LightDatabendLabsHorizontalPng,
  LightDatabendLabsVerticalPng,
  // OpenDalPng, OpenDalSvg
}

export default {
    install
}
