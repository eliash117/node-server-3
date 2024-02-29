const http = require('http');
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Terminar el informe', completed: true },
  { id: 3, description: 'Llamar al cliente', completed: false }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/tasks') {
    res.writeHead(200);
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
