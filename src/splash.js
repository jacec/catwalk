var pjson = require('../package.json');

//Display splash screen, who doesn't like ASCII art?
var splash = `

        ___      _               _ _
       / __|__ _| |___ __ ____ _| | |__
      | (__/ _\` |  _\\ V  V / _\` | | / /
       \\___\\__,_|\\__|\\_/\\_/\\__,_|_|_\\_\\ v` + pjson.version + `
        Part of the Riverbed SDP family

A model driven micro-services configuration platform
             to strut your stuff on!\n`



module.exports = {
  ShowSplash: showSplash
};

function showSplash() {
  console.log(splash)
}
