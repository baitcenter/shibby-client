import { Model } from '@vuex-orm/core'

export default class TagFilter extends Model {
  static entity = 'tagFilter'
  static fields () {
    return {
      id: this.increment(),
      tag: this.string(''),
      exclude: this.boolean(false)
    }
  }
}
