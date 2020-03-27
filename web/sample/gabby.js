const shout = require('./shout.js');
class Gabby
{
    async talk(phrase){
        return `I am saying ${phrase}`;
    }

    async shout(phrase){
        return `I am saying ${await shout(phrase)}`
    }
}
module.exports = {Gabby};