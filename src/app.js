import bot from 'nodemw';
import config from '../config/config';
import regex from 'regex';
import utils from 'utils';

// pass configuration object
const client = new bot({
  protocol: config.protocol,           // Wikipedia now enforces HTTPS
  server: config.server,  // host name of MediaWiki-powered site
  path: config.path,                  // path to api.php script
  debug: true,                 // is more verbose when set to true
  username: config.username,
  password: config.password
});

client.logIn( function (err) {
  if (err) {
    console.error(err);
    return;
  }

  client.getArticle('Meeting_Minutes', function (err, MeetingMinutesContent) {
    // error handling
    if (err) {
      console.error(err);
    } else {
      let {title, index} = regex.findLastTwStandUpTitle(MeetingMinutesContent);
      title = title.replace(/ /g, '_');

      client.getArticle(title, function (err, data) {
        if (err) {
          console.error(err);
        } else {
          const cleanedContent = regex.cleanDoneSection(data);
          const todayTitle = utils.generateTodayTitle();
          const updatedMeetingMinutesContent = regex.generateNewMeetingMinutes(MeetingMinutesContent, index, todayTitle)
          client.edit('Meeting_Minutes', updatedMeetingMinutesContent, null, false, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              client.edit(todayTitle.replace(/ /g, '_'), cleanedContent, null, false, function (err, data) {
                if (err) {
                  console.log(err);
                } else {

                }
              });
            }
          })
        }
      });
    }
  });
});
