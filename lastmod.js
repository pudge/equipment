function getMostRecentLastMod() {
  var files = []
  const entries = performance.getEntriesByType('resource')
  entries.map(function(entry) {
    if (
      (entry.initiatorType === 'script' || entry.initiatorType === 'link')
      &&
      entry.name.startsWith(location.href)
    ) {
      files.push(entry.name)
    }
  });

  return async(f = []) => {
    let ts = new Date(document.lastModified)
    console.log(`lastmod: ${document.location}: ${ts.toUTCString()}`)
    for (let i of files) {
      let d = await fetch(i) //get each file
        .then(r => r.headers.get('Last-Modified')) //get last modified date in raw text format
        .catch(e => console.error(e))
      console.log(`lastmod: ${i}: ${d}`)
      ts = Math.max(ts, +new Date(d)) //latest timestamp
    }
    return ts;
  }
}

async function lastMod() {
  const lastMod = new Date( await getMostRecentLastMod()() )
  return moment(lastMod).format("YYYY.MM.DD")
}

async function setLastMod(el) {
  return $(el).html( await lastMod() )
}
