// eslint-disable-next-line
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://shibbysearch.site/api/`
  })
}
