module.exports = exports = function (content) {
  console.log('this is a non-sense npm package');
  return content.split('').reverse().join('');
};