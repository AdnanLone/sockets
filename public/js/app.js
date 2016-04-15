/**
 * Created by adnan on 4/13/16.
 */

var socket = io();

socket.on('connect', function () {
    console.log('Connected to socket io server');
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp).local().format('hh:mm a');
    console.log('New Message is: ' + message.text + '  ' + momentTimestamp);

    jQuery('.messages').append('<p><strong>'+momentTimestamp +'</strong>'+ ' : ' + message.text +'</p>');
});

//Handle submitting of new message
var $form = jQuery('#message-form');
$form.on('submit', function (event) {
    event.preventDefault();
    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        text: $message.val()
    });
    $message.val('');
});