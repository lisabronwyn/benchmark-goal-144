const foo = sorted() => {
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

let sorted = foo.map(function(o) {
    return o.number;
});
