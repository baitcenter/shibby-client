export default class Http {
  constructor (opts) {
    this.url = opts.url
    this.method = opts.method
    this.data = opts.data
    this.headers = opts.headers
    this.callbacks = {}
    this.request(this.opts)
  }

  request (opts) {
    for (const key in opts) {
      if ((!isNaN(key) && (key >= 100 && key <= 511)) || (key === 'then' || key === 'catch')) {
        this.callbacks[key] = opts[key]
      }
    }

    this.req = new XMLHttpRequest()

    this.req.addEventListener('load', this.callback.bind(this))
    this.req.addEventListener('error', this.callback.bind(this))

    this.req.open(this.method, this.url)

    // Set headers
    for (const key in this.headers) this.req.setRequestHeader(key, this.headers[key])

    // Build data string
    let dataArr = []
    for (const key in this.data) dataArr.push(key + '=' + this.data[key])

    if (dataArr.length === 1) this.req.send(encodeURI(dataArr.join('')))
    else if (dataArr.length > 1) this.req.send(encodeURI(dataArr.join('&')))
    else this.req.send()
  }

  parse (data) {
    try { data = JSON.parse(data) } catch (err) { }
    return data
  }

  callback (event) {
    let code = event.target.status
    let response = this.parse(event.target.response)
    let error = code >= 400 ? new Error(event.target.statusText) : null

    if (this.callbacks[code]) this.callbacks[code](error || response, this.req)

    if (!error && this.callbacks.then) this.callbacks.then(response, this.req)
    else if (this.callbacks.catch) this.callbacks.catch(error, this.req)
  }

  then (cb) {
    this.callbacks.then = cb
    return this
  }

  catch (cb) {
    this.callbacks.catch = cb
    return this
  }
}
