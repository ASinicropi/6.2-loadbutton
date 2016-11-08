var $ = require('jquery');
var Backbone = require('backbone');

  var Button = Backbone.Model.extend({

  });

  var ButtonCollection = Backbone.Collection.extend({
    model: Button,
    url: 'https://tiny-lasagna-server.herokuapp.com/collections/posts',

  });

module.exports = {
  Button: Button,
  ButtonCollection: ButtonCollection
};
