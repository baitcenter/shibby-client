import Api from '@/api/Api'

export default {
  // Fetch all files in DB
  fetchFiles () {
    return Api().get('soundfiles')
  },
  // Add file to DB
  addFile (params) {
    // console.log(params)
    return Api().post('soundfiles', params)
  },
  updateFile (params) {
    // console.log(params)
    return Api().put('soundfiles/' + params.id, params)
  },
  getFile (params) {
    // console.log(params)
    return Api().get('soundfile/' + params.id)
  },
  deleteFile (id) {
    // console.log(id)
    return Api().delete('soundfiles/' + id)
  }
}
