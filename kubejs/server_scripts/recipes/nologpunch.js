console.info('Tweak nologpunch recipes...');

ServerEvents.recipes((event) => {
  event.remove({ id: 'nologpunch:stick'})
  event.remove({ output: 'nologpunch:flint_tool' });
});
