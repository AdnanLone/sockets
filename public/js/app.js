/**
 * Created by adnan on 4/13/16.
 */
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);
jQuery('.room-title').text(room);

socket.on('connect', function () {
    console.log('Connected to socket io server');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp).local().format('hh:mm a');
    var $message = jQuery('.messages');

    console.log('New Message is: ' + message.text + '  ' + momentTimestamp);

    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp + '</strong>' + ' : ' + message.text + '</p>');
});

//Handle submitting of new message
var $form = jQuery('#message-form');
$form.on('submit', function (event) {
    event.preventDefault();
    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        text: $message.val(),
        name: name
    });
    $message.val('');
});