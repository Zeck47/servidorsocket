const net = require('net');
const port = 8000;
const host = '127.0.0.1';
const mensagem = 'Olá, servidor!';

const client = new net.Socket();
client.connect(port, host, () => {
  console.log('Conectado ao servidor');
  client.write(mensagem);
});

client.on('data', (data) => {
  console.log('Dados recebidos:', data.toString());
  client.destroy();
});

client.on('close', () => {
  console.log('Conexão fechada');
});
