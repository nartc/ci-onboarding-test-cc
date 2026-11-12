// Main script of the "Lab hello" step.
console.log(`hello from a custom step on ${process.env.CI_LAB_MACHINE || 'an inline machine'}`);
