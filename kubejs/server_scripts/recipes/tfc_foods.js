console.info('Tweak TFC food recipes...');

ServerEvents.recipes((event) => {
  // hidden foods
  event.remove('minecraft:golden_apple');
  event.remove('minecraft:golden_carrot');
  event.remove('minecraft:bread');
  event.remove('minecraft:cookie');
  event.remove('minecraft:cake');

  // wheat grain
  event.recipes.tfc.extra_products_shapeless_crafting(
    'tfc:straw',
    event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless('tfc:food/wheat_grain', [
        'minecraft:wheat',
        '#tfc:knives',
      ])
    )
  );

  // pumpkin
  event.remove('minecraft:pumpkin_seeds');
  event.shapeless('minecraft:pumpkin_seeds', ['tfc:food/pumpkin_chunks']);

  // melon
  event.remove('minecraft:melon_seeds');
  event.shapeless('minecraft:melon_seeds', ['tfc:food/melon_slice']);

  // beekeeping
  event.remove('minecraft:beehive');
  event.remove('minecraft:honey_bottle');
  event.remove({ output: 'firmalife:beehive' });
  event.remove({ output: 'firmalife:jar/honey' });
  event.shaped('minecraft:beehive', ['LFL', 'LTL', 'LFL'], {
    L: '#tfc:lumber',
    F: 'firmalife:beehive_frame',
    T: 'tfc:thatch',
  });
  event.recipes.tfc.extra_products_shapeless_crafting(
    'firmalife:beeswax',
    event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless('firmalife:jar/honey', [
        'minecraft:honeycomb',
        'tfc:empty_jar',
        '#tfc:knives',
      ])
    )
  );
  event.replaceInput(
    { input: 'minecraft:honey_bottle' },
    'minecraft:honey_bottle',
    'firmalife:jar/honey'
  );
});

ServerEvents.tags('item', (event) => {
  // fluits
  const fruits = ['apple', 'sweet_berries', 'glow_berries'];
  event.add('tfc:foods', fruits);
  event.add('tfc:foods/fruits', fruits);

  // vegetable
  const vegetables = ['carrot', 'potato', 'beetroot'];
  event.add('tfc:foods', vegetables);
  event.add('tfc:foods/vegetables', vegetables);

  // grains
  event.add('tfc:foods', 'minecraft:wheat');

  // seeds
  event.add('tfc:seeds', ['minecraft:wheat_seeds', 'minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:beetroot_seeds']);

  // honey
  event.add('tfc:sweetener', 'minecraft:honeycomb');
});
