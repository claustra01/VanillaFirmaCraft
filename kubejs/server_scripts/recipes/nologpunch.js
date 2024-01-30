console.info('Tweak nologpunch recipes...');

ServerEvents.recipes((event) => {
  event.remove('nologpunch:flint_tool');
});
