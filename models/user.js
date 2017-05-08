const Sequelize = require('sequelize');
const blueBird = require('bluebird');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
// YOUR CODE HERE...
  first: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 18
    },
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
// ...AND HERE
  getterMethods: {
    fullName: function() {
      return this.first + ' ' + this.last;
    }
  },
  instanceMethods: {
    haveBirthday: function() {
      return User.findAll({
        attributes: ['age']
      });
    },
    hooks: {

    }
  }
});

module.exports = User;
