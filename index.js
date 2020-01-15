const express = require('express'); // Comando para importar a biblioteca express

// Utilizado para colocar o servidor no ar
const app = express();

app.use(express.json());

/* Primeiro parâmetro é qual o endereço do  rota e o segundo uma função que recebe dois parâmetros do express, o request (requisição) e response(resposta).
Quando uma rota é acessada é feita uma requisição ao servidor que pode enviar algumas informações necessárias para o backend enquanto o response é como é devolvida uma resposta para o cliente.
node "nome do arquivo" (index.js) executa o código e inicia o servidor para ser acessado.
*/
app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello Omnistack!' });
}) // Método send envia uma resposta no formato de texto.


app.listen(3333) // Define em qual porta a aplicação será acessada
