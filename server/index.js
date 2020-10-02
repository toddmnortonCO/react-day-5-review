require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const ctrl = require('./controllers/ctrls');
const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db is all good')
    app.listen(SERVER_PORT, () => {
      console.log(`Listening on port ${SERVER_PORT}.`);
    });
})

const baseUrl = '/api/post'  //base Urls can't be the same w/ multiple app.get, app.post, etc.

app.get(baseUrl, ctrl.getPost)
app.post(baseUrl, ctrl.addPost)
app.put(baseUrl + '/:id' , ctrl.editPost)
app.delete(baseUrl + '/:id', ctrl.deletePost)

