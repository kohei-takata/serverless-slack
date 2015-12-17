/**
 * Controller: SlashCommands
 */

var Slack = require('./slack');

module.exports.hello = function(event, cb) {

  var text = 'Hey There!';

  var response = {
    "text": text,
    "attachments": [
      {
        "text": text
      }
    ]
  };

  return cb(null, response);

};