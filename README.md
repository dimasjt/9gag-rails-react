[![CircleCI](https://circleci.com/gh/dimasjt/9gag-rails-react/tree/master.svg?style=svg)](https://circleci.com/gh/dimasjt/9gag-rails-react/tree/master)

# API
API end point `http://9gag.dimasjt.com.com/api`
- [GET /:section/:type](#get-sectiontype)
- [GET /gag/:id](#get-gagid)

## Get /:section/:type
Example
`http://9gag.dimasjt.com/api/funny/hot`
```json
{
  "posts": [
    {
      "id": "aeY9dGW",
      "title": "A gif about nothing... Nothing?... NOTHING!",
      "url": "http://9gag.com/gag/aeY9dGW",
      "image": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460s.jpg",
      "comments_count": 46,
      "points": "90",
      "media": {
        "poster": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460s.jpg",
        "mp4": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460sv.mp4",
        "webm": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460svwm.webm"
      }
    },
    
    
  ],
  "next_page": "arOyBPy"
}
```

Next Page
`http://9gag.dimasjt.com/api/funny/hot?page=arOyBPy`
```json
{
  "posts": [
    {
      "id": "a9WyB0j",
      "title": "Title? Nobody needs that",
      "url": "http://9gag.com/gag/a9WyB0j",
      "image": "http://img-9gag-fun.9cache.com/photo/a9WyB0j_460s.jpg",
      "comments_count": 27,
      "points": "1217",
      "media": null
    },
    
    
    
  ],
  "next_page": "a9WyBqm"
}
```

## Get /gag/:id

Example
`http://9gag.dimasjt.com/api/gag/aeY9dGW`

```json
{
  "post": {
    "id": "aeY9dGW",
    "title": "A gif about nothing... Nothing?... NOTHING!",
    "url": "http://9gag.com/gag/aeY9dGW",
    "image": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460s.jpg",
    "comments_count": 52,
    "points": "4.5\n                            213",
    "media": {
      "poster": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460s.jpg",
      "mp4": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460sv.mp4",
      "webm": "http://img-9gag-fun.9cache.com/photo/aeY9dGW_460svwm.webm"
    }
  }
}
```
