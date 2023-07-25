# HIROKA

Hiroka is a microservices-based forum application.

### server:
#### Installation
To install the server, run the following command:

#### Launch
To launch the server, use PM2 with the following command:
`pm2 start './gateway/main.js'`

---

For authentication, the system uses a token generated with the jsonwebtoken library, utilizing the `HS256`` algorithm.

![ScreenShot](https://grafikart.fr/uploads/2017/10/jwt.png)

Port 8080 is used for the gateway.

#### endpoint:

Register User
- Method: POST
- URL: http://localhost:8080/auth/register
- Request Body (raw JSON):
```js
{
    username: String,
    email: "email@example.com",
    password: String
}
```
- Response:
```js
{
  token: String(jwt)
}
```


---

Login User
- Method: POST
- URL: http://localhost:8080/auth/login
- Request Body (raw JSON):
```js
{
    email: "email@example.com",
    password: String
}
```
- Response:
```js
{
  token: String(jwt)
}
```

---
Update User (@me)
- Method: PATCH
- URL: http://localhost:port/@me (Replace port with the actual port number)
- Request Body (raw JSON):
```js
{
    email: "email@example.com",
    password: "String",
    status: "Number (0 or 1)",
    bio: "String",
    username: "String"
}

```
- Response:
```js
{
  token: String(jwt)
}
```
### client

The client is built using the `HJS` (Hogan.js) template, which allows calling HTML pages from Node.js.
```ruby
files:
  /src/public
  /src/views
```