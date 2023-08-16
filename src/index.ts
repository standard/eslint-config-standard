/*! eslint-config-standard. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

import { type Linter } from 'eslint'
import json from './config.json'
const config = json as unknown as Linter.BaseConfig
export default config
