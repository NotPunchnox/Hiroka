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
    username: "username",
    email: "email@example.com",
    password: "password"
}
```

```js
return {
  token: String(jwt)
}
```

---

methode: `POST` login
http://localhost:port/login

BODY raw js:
```js
{
    email: "email@example.com",
    password: "password"
}
```

```js
return {
  token: String(jwt)
}