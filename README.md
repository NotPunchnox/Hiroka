# HIROKA

### server:

install: `npm i`,
launch: `npm run start` or `nodemon` ( `npm i nodemon `)

---

for the moment I have made the authentication system with a token which will be generated (jsonwebtoken), the algorithm used is as follows: `HS256`

##### jwt:
![ScreenShot](https://grafikart.fr/uploads/2017/10/jwt.png)

#### endpoint:

methode: `POST` register
http://localhost:port/register

BODY raw js:
```js
{
    username: String,
    email: "email@example.com",
    password: String
}
```

```js
{
  token: String(jwt)
}

return res.redirect('/home'), session.token = String(jwt)
```


---

methode: `POST` login
http://localhost:port/login

BODY raw js:
```js
{
    email: "email@example.com",
    password: String
}
```

```js
{
  token: String(jwt)
}

return res.redirect('/home'), session.token = String(jwt)
```

---

methode: `PATCH` @me
http://localhost:port/@me

BODY raw js:
```js
{
    email: "email@example.com",
    password: String,
    status: Number(0 || 1),
    bio: String,
    username: String
}
```

```js
{
  token: String(jwt)
}

return res.redirect('/home'), session.token = String(jwt)
```
### client

The client is made with the template `HJS` (Hogan.js), which allows to call the html pages from node.js.

```coffee
files:
  /src/public
  /src/views
```