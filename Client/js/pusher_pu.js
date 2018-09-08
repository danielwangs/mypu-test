var Pusher = require('pusher');


  var pusher = new Pusher({
    appId: '576355',
    key: '05dceae4343ae8e632bf',
    secret: '6086910e9aef7bf41d8a',
    cluster: 'ap1',
    encrypted: true
  });
function pu() {
  pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
  });
}

function main() {
  $("#button").on('click', pu);
}
