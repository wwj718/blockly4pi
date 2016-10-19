# kinto 
https://github.com/Kinto/kinto-admin 源码 

react webpack


### kinto-http.js
http://ip:8888/v1/

https://github.com/Kinto/kinto-http.js#installation

```javascript
var username = "pi"
var password = "pi"
const secretString = `${username}:${password}`;
const kinto = new KintoClient("https://my.server.tld/v1", {
      headers: {
            Authorization: "Basic " + btoa(secretString)
              }
});
```
