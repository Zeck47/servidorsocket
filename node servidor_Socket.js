const net = require('net'); // A requisição da Net
const port = 8000; // Configurar porta de entrada do host
const host = '127.0.0.1'; // Tipo de hospedagem do servidor

const server = net.createServer((socket) => {
  console.log('Cliente conectado'); // Mensagem enviada após o clinte conectar ao servidor

  socket.on('data', (data) => {
    console.log('Dados recebidos:', data.toString());
    socket.write(data); // Será recebida os dados da conexão do cliente hospedado ao servidor
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  }); // receberá esta mensagem após o cliente do servidor desconectar
});

server.listen(port, host, () => {
  console.log(Servidor ouvindo em ${host}:${port});
}); // Mensagem enviada com o tipo de conexão que o socket está sendo executado
