import { createApp } from './app.js';

const port = Number(process.env['PORT'] ?? 4330);
createApp().listen(port, () => {
  console.log(`gateway listening on http://localhost:${port}`);
});
