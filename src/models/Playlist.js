import { Model } from '@vuex-orm/core'
import SoundFile from '@/models/SoundFile'

export default class Playlist extends Model {
  static entity = 'playlist'

  static fields () {
    return {
      id: this.increment(),
      file: this.attr({}),
      sound_id: this.string(),
      soundFiles: this.belongsTo(SoundFile, 'sound_id')
    }
  }
}
