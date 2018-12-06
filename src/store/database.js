import { Database } from '@vuex-orm/core'
import SoundFile from '@/models/SoundFile'
import Playlist from '@/models/Playlist'
import soundFiles from '@/store/modules/soundFiles'
import playlist from '@/store/modules/playlistItem'

const database = new Database()

database.register(SoundFile, soundFiles)
database.register(Playlist, playlist)

export default database
