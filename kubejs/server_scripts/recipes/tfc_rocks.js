ServerEvents.recipes((event) => {
  // cobblestone
  event.remove({ id: 'rocks:cobblestone_from_splitter' });
  event.remove({ id: 'rocks:granite_from_splitter' });
  event.remove({ id: 'rocks:diorite_from_splitter' });
  event.remove({ id: 'rocks:andesite_from_splitter' });
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:rock/cobble/dacite', [
      'rocks:cobblestone_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:rock/cobble/granite', [
      'rocks:granite_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:rock/cobble/diorite', [
      'rocks:diorite_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:rock/cobble/andesite', [
      'rocks:andesite_splitter',
      '#tfc:chisels',
    ])
  );

  // bricks
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:brick/dacite', [
      'rocks:cobblestone_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:brick/granite', [
      'rocks:granite_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:brick/diorite', [
      'rocks:diorite_splitter',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('tfc:brick/andesite', [
      'rocks:andesite_splitter',
      '#tfc:chisels',
    ])
  );
});

ServerEvents.tags('item', (event) => {
  // rock splitters
  const splitters = [
    'rocks:cobblestone_splitter',
    'rocks:granite_splitter',
    'rocks:diorite_splitter',
    'rocks:andesite_splitter',
    'rocks:sandstone_splitter',
    'rocks:red_sandstone_splitter',
    'rocks:end_stone_splitter',
    'rocks:netherrack_splitter',
    'rocks:soul_soil_splitter',
  ];
  event.add('tfc:any_knapping', splitters);
  event.add('tfc:rock_knapping', splitters);

  event.add('tfc:igneous_intrusive_rock', [
    'rocks:granite_splitter',
    'rocks:diorite_splitter',
  ]);
  event.add('tfc:sedimentary_rock', [
    'rocks:sandstone_splitter',
    'rocks:red_sandstone_splitter',
  ]);
  event.add('tfc:igneous_extrusive_rock', [
    'rocks:cobblestone_splitter',
    'rocks:andesite_splitter',
    'rocks:netherrack_splitter',
  ]);
  event.add('tfc:metamorphic_rock', [
    'rocks:end_stone_splitter',
    'rocks:soul_soil_splitter',
  ]);

  event.add('tfc:igneous_intrusive_items', [
    'rocks:granite_splitter',
    'rocks:diorite_splitter',
  ]);
  event.add('tfc:sedimentary_items', [
    'rocks:sandstone_splitter',
    'rocks:red_sandstone_splitter',
  ]);
  event.add('tfc:igneous_extrusive_items', [
    'rocks:cobblestone_splitter',
    'rocks:andesite_splitter',
    'rocks:netherrack_splitter',
  ]);
  event.add('tfc:metamorphic_items', [
    'rocks:end_stone_splitter',
    'rocks:soul_soil_splitter',
  ]);

  // flux
  event.add('tfc:fluxstone', 'rocks:seashell');
});
