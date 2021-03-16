# Test task

---

## Create a URL Shortener with Nodejs (like bitly or shorturl)

### Our server should support two routes:
1. receive a long URL, shorten it, save and send back
2. resolve the actual redirect from  shorten link to the original

---

# playworks-test

## Project setup
```
npm install
```

### Edit config files (server/bin/config.json)
```
cp server/bin/config.json.sample server/bin/config.json
```

### Run server
```
npm run start
```

### See http://localhost:3000

---

To get your link shorten visit /encode route with query param url
The url should start with http://, https:// etc.

Example
```
http://localhost:3000/encode?url=https%3A%2F%2Fwww.google.com
```
---

Then you can use your shortlink and the server will redirect you to the desired page

Example
```
http://localhost:3000/{shortlink}
```
