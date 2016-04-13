/**
 * Created by adnan on 4/13/16.
 */

var socket = io();
socket.on('connect', function () {
    console.log('Connected to socket io server');
});