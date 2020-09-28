import { flatten } from 'flat'

import defaultConfig from '../../../config/default.json'

const flattenConfig: any = flatten(defaultConfig, { maxDepth: 2 })

/**
 * @name ConfigService#get
 * @name description get value of one key or all if no key is informed
 * @param {string} [key] config key to extract
 * @param {any}
 */
export class ConfigService {
  static get(key?: string): any {
    if (!key) {
      return defaultConfig
    }

    if (flattenConfig[key]) {
      return flattenConfig[key]
    }

    throw new Error(`ConfigService.get => key "${key}" not found`)
  }
}
