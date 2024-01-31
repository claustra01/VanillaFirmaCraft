console.info('Register TFC compat items...');

StartupEvents.registry('item', (event) => {
  // stone brick
  event.create('deepslate_brick');
  event.create('blackstone_brick');
  event.create('end_stone_brick');
});
