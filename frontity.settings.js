const settings = {
  "name": "oriol-im",
  "state": {
    "frontity": {
      "url": "https://www.oriol.im",
      "title": "I'm Oriol",
      "description": "Just the place where @OriolEgea writes things..."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About Me",
              "/sobre-mi/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.oriol.im/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
