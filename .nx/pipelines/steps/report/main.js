// Main script of the "Lab report" step. Uses a dynamic import so it runs as ESM or CommonJS.
import('node:fs').then(({ appendFileSync }) => {
  const title = process.env.NX_CLOUD_INPUT_title || 'CI lab';
  const results = JSON.parse(process.env.NX_CLOUD_INPUT_results || '{}');
  const rows = Object.entries(results).map(([job, value]) => `| ${job} | ${value.result} |`);
  const summary = [`## ${title}`, '', '| Job | Result |', '| --- | --- |', ...rows, ''].join('\n');
  console.log(summary);

  const failed = Object.values(results).filter((value) => value.result === 'failure').length;
  const append = (file, text) => file && appendFileSync(file, text);
  append(process.env.NX_CLOUD_STEP_SUMMARY, `${summary}\n`);
  append(process.env.NX_CLOUD_OUTPUT, `failed=${failed}\n`);
  // Read back by post.js.
  append(process.env.NX_CLOUD_STATE, `failed=${failed}\nstartedAt=${Date.now()}\n`);
});
