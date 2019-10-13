const casual = require('casual');

module.exports = () => {
  const data = {
    users: []
  };

  for (let i = 0; i < 100; i++) {
    data.users.push({
      "id": casual.uuid,
      "username": casual.username,
      "password": casual.password,
      "birthay": casual.date(format = 'DD-MM-YYYY')
    })
  }

  return data
};
