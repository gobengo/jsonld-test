import { test } from 'node:test'
import jsonld from 'jsonld'
import assert from "assert"

test('can use jsonld.js', async t => {
  const doc = {
    "@context": "https://www.w3.org/ns/activitystreams",
    "summary": "A note",
    "type": "Note",
    "content": "My dog has fleas."
  }
  const rdf = await new Promise((resolve, reject) => {
    jsonld.toRDF(doc, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
  console.log('rdf', rdf)
  assert.ok(rdf)
})
