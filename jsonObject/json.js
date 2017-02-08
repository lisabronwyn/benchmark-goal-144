const foo = {
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
};

for(let prop in foo) {
  console.log(prop[3])
}
