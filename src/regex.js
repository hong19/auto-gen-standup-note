import moment from 'moment';

export default {
  findLastTwStandUpTitle(content) {
    const re = /TW Standup \(.*\)/;
    const found = content.match(re);
    if (!found) {
      console.error("Can't find any TW StandUp")
    }
    return {
      title: found[0],
      index: found.index
    };
  },
  cleanDoneSection(content) {
    const re = /; DONE:(.|\n)*?;/g;
    return content.replace(re, '; DONE:\n\n\n;');
  },
  generateNewMeetingMinutes(content, index, title) {
    index = index - 4;
    // Because '* [['
    let markupTitle = `* [[${title}]]`;
    if (moment().format('ddd') === 'Mon') {
      markupTitle += '\n\n';
    }
    return content.slice(0, index) + markupTitle + '\n' + content.slice(index);
  }
}