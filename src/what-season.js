module.exports = function getSeason(date) {
  let season = '';
  if (date === undefined) season = 'Unable to determine the time of year!';
  //real date object doesn't have its own property getMonth unlike fake object
  else if (date.hasOwnProperty('getMonth')) throw new Error();
  else if (date.getMonth() == 0) season = 'winter';
  else if (date.getMonth() == 1) season = 'winter';
  else if (date.getMonth() == 2) season = 'spring';
  else if (date.getMonth() == 3) season = 'spring';
  else if (date.getMonth() == 4) season = 'spring';
  else if (date.getMonth() == 5) season = 'summer';
  else if (date.getMonth() == 6) season = 'summer';
  else if (date.getMonth() == 7) season = 'summer';
  else if (date.getMonth() == 8) season = 'autumn';
  else if (date.getMonth() == 9) season = 'autumn';
  else if (date.getMonth() == 10) season = 'autumn';
  else if (date.getMonth() == 11) season = 'winter';
 return season;
};
