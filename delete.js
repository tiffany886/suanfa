var minLength = function (s) {
  let AB = new RegExp('AB')
  let CD = new RegExp('CD')
  while (s.indexOf('AB') != -1 || s.indexOf('CD') != -1) {
    if (s.indexOf('AB') != -1) {
      s = s.replace(AB, '')
    } else {
      if (s.indexOf('CD') != -1) {
        s = s.replace(CD, '')
      }
    }
  }

  return s.length
}
minLength('ABFCACDB')
