console.info('Register TFC compat items...');

StartupEvents.registry('item', (event) => {
  // vanilla stone
  event.create('loose_deepslate_rock');
  event.create('loose_netherrack_rock');
  event.create('loose_blackstone_rock');
  event.create('loose_end_stone_rock');
  event.create('deepslate_brick');
  event.create('blackstone_brick');
  event.create('end_stone_brick');
});
