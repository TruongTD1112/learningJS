

const EventEmitter = require ('events');
const edmitter = new EventEmitter();

// register a listener
edmitter.on('messageLogged', function(arg){
    console.log('listener called', arg);
});

edmitter.emit('messgageLogged', {id : 1, url : 'http://'});