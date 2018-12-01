export default (inputStr) => {
  const regex = /([[])((\w*\s*)*)([\]])/gm
  const str = inputStr
  // let outputStr = this.inputStr
  let m
  let tags = []
  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      // if (groupIndex === 0) {
      //   // let regex = `/(\\${match})/g`
      //   outputStr.replace(RegExp(match), '')
      //   // console.log(regex)
      //   console.log(outputStr)
      // }
      // Pushes tags to array
      if (groupIndex === 2) {
        tags.push(match)
        console.log(tags)
      }
      // console.log(`Found match, group ${groupIndex}: ${match}`)
    })
    // console.log(m)
  }
  return tags

  // let myString = this.str
  // const tagRegex = /([[])((\w*\s*)*)([\]])/gm
  // let match = tagRegex.exec(myString)
  // while (match != null) {
  //   array.forEach(element => {
  //   })
  //   // matched text: match[0]
  //   // match start: match.index
  //   // capturing group n: match[n]
  //   console.log(match[0])
  //   match = tagRegex.exec(myString)
}
