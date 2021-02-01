const EventEmitter = require('events');
const edmitter = new EventEmitter();
edmitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

edmitter.emit('messageLogged', {id : 1, url : 'http : //'});
// cach thu hai de chinh sua callbacks
// edmitter.on('messageLogged', (arg) => {
//     console.log('listened called', arg);
// });