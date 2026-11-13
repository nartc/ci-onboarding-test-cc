import { createServer } from 'node:http';
import { render } from './app.js';

const port = Number(process.env['PORT'] ?? 4320);
createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(render(req.url ?? '/'));
}).listen(port, () => {
  console.log(`web listening on http://localhost:${port}`);
});
