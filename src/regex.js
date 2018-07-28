export default {
  findLastTwStandUpTitle(content) {
    const re = /TW Standup \(.*\)/;
    const found = content.match(re);
    if (!found) {
      console.error("Can't find any TW StandUp")
    }
    return found[0];
  }
}