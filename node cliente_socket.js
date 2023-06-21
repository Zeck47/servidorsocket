const net = require('net'); // A requisição da Net
const port = 8000; // Configurar porta de entrada
const host = '127.0.0.1'; // Tipo de hospedagem associada ao servidor do cliente
const mensagem = 'Olá, servidor!'; // MEnsagem enviada após conectar o servidor

const client = new net.Socket();
client.connect(port, host, () => {
  console.log('Conectado ao servidor');
  client.write(mensagem); // Será enviada uma mensagem ao cliente após conectar no servidor
});

client.on('data', (data) => {
  console.log('Dados recebidos:', data.toString());
  client.destroy(); // Será enviado os dados do usuário que se conectou no servidor
});

client.on('close', () => {
  console.log('Conexão fechada'); // Mensagem enviada após a saída do servidor ou fechada a conexão do servidor
});
