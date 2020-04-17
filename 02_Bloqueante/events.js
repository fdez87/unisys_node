const EventEmitter = require('events')
const emisor = new EventEmitter()

// Captura el evento
emisor.on('telefonear', (ev = {}) => {
    if (ev.tipo === 'pro') {
        console.log('¡Ring, Ring, Ring!')    
    }
    else {
        console.log('¡Ring, Ring!')
    }
})

// Captura el evento una sola vez
emisor.once('telefonear', () => {
    console.log('¡Brr, Brr!')
})

// Triggers
emisor.emit('telefonear')
emisor.emit('telefonear')
emisor.emit('telefonear', {tipo: 'pro'})
emisor.off('telefonear', null)
emisor.emit('telefonear')