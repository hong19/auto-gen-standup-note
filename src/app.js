import bot from 'nodemw';
import config from '../config/config';
import regex from 'regex';

// pass configuration object
const client = new bot({
  protocol: config.protocol,           // Wikipedia now enforces HTTPS
  server: config.server,  // host name of MediaWiki-powered site
  path: config.path,                  // path to api.php script
  debug: true                 // is more verbose when set to true
});

function handleResponse(err, data) {
  // error handling
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}

// client.logIn(config.username, config.password, handleResponse);

client.getArticle('Meeting_Minutes', function (err, data) {
  // error handling
  if (err) {
    console.error(err);
  } else {
    let title = regex.findLastTwStandUpTitle(data);
    title = title.replace(/ /g, '_');
    console.log(title);
    client.getArticle(title, function (err, data) {
      if (err) {
        console.error(err);
      } else {
        const cleanedContent = regex.cleanDoneSection(data);
      }
    });
  }
});



