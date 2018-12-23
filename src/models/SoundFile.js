import { Model } from '@vuex-orm/core'
import Playlist from '@/models/Playlist'
export default class SoundFile extends Model {
  static entity = 'soundFiles'
  static primaryKey = '_id'

  static fields () {
    return {
      // _id: this.number(0),
      title: this.string(''),
      description: this.string(''),
      uploader: this.string(''),
      downloadUrl: this.string(''),
      localFileUrl: this.attr(''),
      sourceUrl: this.string(''),
      currentRating: this.attr(0),
      votes: this.attr(0),
      trackLength: this.attr(),
      tags: this.attr(''),
      isRated: this.boolean(false),
      playlistItem: this.hasOne(Playlist, 'sound_id')
    }
  }

  static methodConf = {
    http: {
      baseUrl: 'https://shibbysearch.site/api',
      url: '/soundfiles'
    },
    methods: {
      $fetch: {
        name: 'fetch',
        http: {
          url: '',
          method: 'get'
        }
      },
      $get: {
        name: 'get',
        http: {
          url: '/:id',
          method: 'get'
        }
      },
      $create: {
        name: 'create',
        http: {
          url: '',
          method: 'post'
        }
      },
      $update: {
        name: 'update',
        http: {
          url: '/:id',
          method: 'put'
        }
      },
      $delete: {
        name: 'delete',
        http: {
          url: '/:id',
          method: 'delete'
        }
      }
    }
  }
}
