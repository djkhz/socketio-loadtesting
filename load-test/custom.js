const faker = require('faker');

module.exports.getChatData = (userContext, events, done) => {
  userContext.vars.name = faker.name.findName();
  userContext.vars.message = faker.lorem.sentence();
  done();
};