import moment from 'moment';

export default {
  generateTodayTitle() {
    const template = 'TW Standup ({{TIME}})';
    return template.replace('{{TIME}}', moment().format('YYYY.MM.DD'));
  }
}