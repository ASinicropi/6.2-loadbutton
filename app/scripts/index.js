var $ = require('jquery');
var Button = require('./models/button').Button
var models = require('./models/button');

$(function(){

  var loadButton = new models.ButtonCollection();

  $('.load-button').on('click', function(e){
    e.preventDefault();
      console.log("Loading");
      $('.load-button').text('Loading..');
      $('.load-button').prop('disabled', true);

    loadButton.fetch().then(function(){
      console.log("done loading");
      $('.load-button').text('Submit');
      $('.load-button').prop('disabled', false);
    })
  });

});
