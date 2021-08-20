# HIROKA

Hiroka is micro services forum.

### server:

install: `npm i`,
launch: `pm2 start './gateway/main.js'`

---

for the moment I have made the authentication system with a token which will be generated (jsonwebtoken), the algorithm used is as follows: `HS256`

##### jwt:
![ScreenShot](https://grafikart.fr/uploads/2017/10/jwt.png)

port 8080 = gateway

#### endpoint:

methode: `POST` register
http://localhost:8080/auth/register

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
```


---

methode: `POST` login
http://localhost:8080/auth/login

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
```
### client

The client is made with the template `HJS` (Hogan.js), which allows to call the html pages from node.js.

```ruby
files:
  /src/public
  /src/views
```