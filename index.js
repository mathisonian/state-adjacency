var adjacency = require('./adjacency.json');

module.exports = function (stateCode) {
  stateCode = stateCode.toLowerCase();
  if (adjacency.hasOwnProperty(stateCode)) {
    return adjacency[stateCode];
  }

  console.log('Could not find state code: ' + stateCode);
  return [];
};
