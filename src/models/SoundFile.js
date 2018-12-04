import { Model } from '@vuex-orm/core'

export default class SoundFile extends Model {
  static entity = 'soundFiles'
  static primaryKey = '_id'

  static fields () {
    return {
      id: this.number(0),
      title: this.attr(''),
      description: this.attr(''),
      uploader: this.attr(''),
      downloadUrl: this.attr(''),
      localFileUrl: this.attr(''),
      sourceUrl: this.attr(''),
      currentRating: this.attr(''),
      votes: this.attr(''),
      trackLength: this.attr(''),
      tags: this.attr('')
    }
  }
}
