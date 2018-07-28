import bot from 'nodemw';
import config from '../config/config';

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
    console.log(data);
    let content = data;
    // const re = /^\*[\b]\[\[TW\bStandup\b\(.*\)]]/;
    const re = /TW Standup/;
    console.log(content.search(re));
  }
});



