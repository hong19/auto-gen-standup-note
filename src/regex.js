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
  }
}