const jsonStrings = `{
  "name": "William Shakespeare",
  "dead": true,
  "works": [{
          "name": "Romeo and Juliet",
          "published": 1591,
          "isAwesome": true
      },
      {
          "name": "Richard III",
          "published": 1592,
          "isAwesome": false
      }
  ],
  "favoriteSites": [
      "tumblr",
      "4chan"
  ]
}`

const parsedData = JSON.parse(jsonStrings);

let newJson = function sorting(parsedData) {
    for (let key in parsedData) {
        let val = parsedData[key]
        if (typeof val === typeof 'string' || typeof val === typeof true) {
            let val = parsedData[key]
            console.log(`${key} -> ${val}`)
        } else if (typeof val === typeof {}) {
            for (var i = 0; i < val.length; i++)
                console.log(`${key} -> ${i} -> `, val[i])
        } else if (typeof val === typeof {}) {
            for (let j = 0; j < val.length; j++)
                console.log(`${key} -> ${i} -> `, val[j])
        }
    }
}
newJson(parsedData)
