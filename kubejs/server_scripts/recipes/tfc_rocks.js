console.info('Tweak TFC rock recipes...');

ServerEvents.tags('item', (event) => {
  // loose rocks
  event.add('tfc:rock_knapping', [
    'kubejs:loose_deepslate_rock',
    'kubejs:loose_netherrack_rock',
    'kubejs:loose_blackstone_rock',
    'kubejs:loose_end_stone_rock'
  ]);

  event.add('tfc:igneous_intrusive_rock', [
    'kubejs:loose_deepslate_rock',
    'kubejs:loose_netherrack_rock',
  ]);
  event.add('tfc:igneous_extrusive_rock', [
    'kubejs:loose_blackstone_rock',
  ]);
  event.add('tfc:metamorphic_rock', [
    'kubejs:loose_end_stone_rock'
  ]);

  event.add('tfc:igneous_intrusive_items', [
    'kubejs:loose_deepslate_rock',
    'kubejs:loose_netherrack_rock',
  ]);
  event.add('tfc:igneous_extrusive_items', [
    'kubejs:loose_blackstone_rock',
  ]);
  event.add('tfc:metamorphic_items', [
    'kubejs:loose_end_stone_rock'
  ]);

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