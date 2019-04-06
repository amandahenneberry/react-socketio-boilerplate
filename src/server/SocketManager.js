const io = require('./index.js').io

module.exports = function(socket){
					
	console.log('A user connected')

	socket.on('disconnect', ()=>{
		console.log('A user disconnected')
	})

}
