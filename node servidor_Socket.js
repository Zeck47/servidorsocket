const net = require('net');
const port = 8000;
const host = '127.0.0.1';

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    console.log('Dados recebidos:', data.toString());
    socket.write(data);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(port, host, () => {
  console.log(Servidor ouvindo em ${host}:${port});
});
