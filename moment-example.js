/**
 * Created by adnan on 4/14/16.
 */
var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('LLL'));

var timestamp = 23232323324244;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('LLL'));