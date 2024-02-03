console.info('Tweak TFC rock recipes...');

ServerEvents.tags('item', (event) => {
  // flux
  event.add('tfc:fluxstone', 'rocks:seashell');
});

ServerEvents.tags('block', (event) => {
  // kaolin clay
  event.add('tfc:prospectable', 'tfc:white_kaolin_clay');
  event.add('tfc:prospectable', 'tfc:pink_kaolin_clay');
  event.add('tfc:prospectable', 'tfc:red_kaolin_clay');
  event.add('precisionprospecting:prospectable_mineral', 'tfc:white_kaolin_clay');
  event.add('precisionprospecting:prospectable_mineral', 'tfc:pink_kaolin_clay');
  event.add('precisionprospecting:prospectable_mineral', 'tfc:red_kaolin_clay');
});