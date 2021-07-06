# HIROKA

### server:

install: `npm i`,
launch: `npm run start` or `nodemon` ( `npm i nodemon `)

for the moment I have made the authentication system with a token which will be generated (jsonwebtoken), the algorithm used is as follows: `HS256`

#### endpoint:

protocol://origin/register

*methode*: POST

body:
```js
{
    username: "username",
    email: "email@example.com",
    password: "password"
}
```

```js
return {
  token: String
}
```
---
protocol://origin/login

*method*: POST

body:
```js
{
    email: "email@example.com",
    password: "password"
}
```

```js
return {
  token: String
}