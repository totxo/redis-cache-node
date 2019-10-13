const fetch = require('node-fetch');
const redis = require('redis');
const logger = require('./utils/logger.utils');
const express = require('express');

const app = express();

const USER_URL = 'http://localhost:4000/users';
const redisClient = redis.createClient(6379);

getAllUsers = () => {
  return fetch(USER_URL)
    .then( response => response.json())
    .then( users => users);
};

app.get('/users', (req, res) => {

  logger.info(`******  INIT GET *******`);

  redisClient.get('users', (rr, users) => {

    if (users) {

      console.log('Existe en redis');

      res.status(200).json(JSON.parse(users));
      logger.info(`****** 😎️ 😎️ GET FROM REDIS 😎 😎 *******`);

    } else {

      console.log('No existe en redis');

      getAllUsers()
        .then((users) => {
          redisClient.setex("users", 60, JSON.stringify(users));

          res.status(200).json(users);

          logger.info(`****** 😥 😥 GET FORM SERVER 😥 😥  *******`);
        })
    }
  })

});

app.listen(3333, () => {
  redisClient.on('connect', () => {
    console.info('Connected with redis');
  });
});
