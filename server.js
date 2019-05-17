const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let online_user_count = 0;

io.on('connection', socket => {
    console.log('yeni bir kullanıcı bağlandı.');
    online_user_count++;
    io.emit('newUser', online_user_count);

    socket.on('disconnect', () => {
        console.log('bir kullanıcı ayrıldı.');
        online_user_count--;
        io.emit('disUser', online_user_count);        
    });
});