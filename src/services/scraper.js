import Api from '@/api/Api'

export default {
  scrapeFile (params) {
    return Api().get(`scrapefile`, params)
  }
}
