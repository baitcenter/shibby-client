// import Http from '@/libs/http'
const axios = require('axios')
const request = require('request')
const soundgasmApi = {
  getSound: (url, callback) => {
    this.getWebpage(url, webpage => {
      let title = webpage.match(/aria-label="title">(.*)</)[1]
      let uploader = url.match(/\/u\/(.*)\//)[1]
      let downloadURL = webpage.match(/(https:\/\/soundgasm.net\/sound.*)"/)[1]
      let sound = {
        title: title,
        uploader: uploader,
        downloadURL: downloadURL
      }
      callback(sound)
    })
  },
  fetchPage: (url) => {
    let options = {
      // url: inputUrl,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    request(url, options, function (error, response, body) {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
      console.log('body:', body) // Print the HTML for the Google homepage.
    })
  },
  getWebpage: (url) => {
    axios.get(url, {
      mode: 'cors',
      headers: {
        // 'Access-Control-Allow-Origin:': 'https://soundgasm.net'
      }
    }).then(function (response) {
      // handle success
      let webpage = response
      console.log(response)
      return webpage
    })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
}
// const soundgasmApi = {

//   getWebpage: (url, callback) => {
//     new Http({
//       method: 'GET',
//       url: url
//     })

//     Http.get(url, res => {
//       let webpage = ''
//       res.on('data', chunk => {
//         webpage += chunk
//       })
//       res.on('end', () => callback(webpage))
//     })
//   }

// }

export default soundgasmApi
