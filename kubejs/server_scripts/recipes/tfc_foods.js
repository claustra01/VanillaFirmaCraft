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

  // beekeeping
  event.remove('minecraft:beehive');
  event.remove('minecraft:honey_bottle');
  event.remove({ output: 'firmalife:beehive' });
  event.shaped('minecraft:beehive', ['LFL', 'LTL', 'LFL'], {
    L: '#tfc:lumber',
    F: 'firmalife:beehive_frame',
    T: 'tfc:thatch',
  });
  event.replaceInput(
    { input: 'firmalife:raw_honey' },
    'firmalife:raw_honey',
    'minecraft:honeycomb'
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

  // honey
  event.add('tfc:sweetener', 'minecraft:honeycomb');
});
