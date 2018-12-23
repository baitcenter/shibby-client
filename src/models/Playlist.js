import { Model } from '@vuex-orm/core'
import SoundFile from '@/models/SoundFile'

export default class Playlist extends Model {
  static entity = 'playlist'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(),
      artist: this.string(),
      src: this.string(''),
      sound_id: this.string(),
      file: this.belongsTo(SoundFile, 'sound_id')
      // file: this.attr([]),
    }
  }
}
