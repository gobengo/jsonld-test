import jsonld from 'jsonld'
const doc = {
  "@context": "https://www.w3.org/ns/activitystreams",
  "summary": "A note",
  "type": "Note",
  "content": "My dog has fleas."
}
console.log('about to toRDF', { doc })
const rdf = await new Promise((resolve, reject) => {
  jsonld.toRDF(doc, (err, result) => {
    if (err) reject(err)
    else resolve(result)
  })
})
console.log('rdf', rdf)
