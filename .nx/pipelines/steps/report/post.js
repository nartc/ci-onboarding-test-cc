// Post script of the "Lab report" step: runs before the machine is cleaned up and reads the
// state that main.js saved through $NX_CLOUD_STATE.
const state = Object.entries(process.env).filter(([name]) => /STATE/i.test(name));
console.log(`state seen by the post script: ${JSON.stringify(Object.fromEntries(state))}`);
const startedAt = Number(process.env.STATE_startedAt);
if (startedAt)
  console.log(
    `main.js ran ${Date.now() - startedAt} ms ago, failed jobs: ${process.env.STATE_failed}`,
  );
