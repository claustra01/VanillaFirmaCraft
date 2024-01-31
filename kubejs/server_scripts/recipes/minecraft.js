console.info('Tweak vanilla recipes...');

ServerEvents.recipes((event) => {
  // deepslate
  event.remove('minecraft:polished_deepslate')
  event.remove('minecraft:deepslate_bricks')
  event.remove('minecraft:chiseled_deepslate')
  event.remove('minecraft:deepslate_tiles')
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:polished_deepslate', [
      'minecraft:deepslate',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('4x kubejs:deepslate_brick', [
      'minecraft:cobbled_deepslate',
      '#tfc:chisels',
    ])
  );
  event.shaped('4x minecraft:deepslate_bricks', ['BMB', 'MBM', 'BMB'], {
    B: 'kubejs:deepslate_brick',
    M: '#tfc:mortar',
  });
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:cracked_deepslate_bricks', [
      'minecraft:deepslate_bricks',
      '#tfc:hammers',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:chiseled_deepslate', [
      'minecraft:deepslate_bricks',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:deepslate_tiles', [
      'minecraft:polished_deepslate',
      '#tfc:chisels',
    ])
  );

  // blackstone
  event.remove('minecraft:polished_blackstone')
  event.remove('minecraft:polished_blackstone_bricks')
  event.remove('minecraft:chiseled_polished_blackstone')
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:polished_blackstone', [
      'minecraft:blackstone',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('4x kubejs:blackstone_brick', [
      'minecraft:polished_blackstone',
      '#tfc:chisels',
    ])
  );
  event.shaped('4x minecraft:polished_blackstone_bricks', ['BMB', 'MBM', 'BMB'], {
    B: 'kubejs:blackstone_brick',
    M: '#tfc:mortar',
  });
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:cracked_polished_blackstone_bricks', [
      'minecraft:polished_blackstone_bricks',
      '#tfc:hammers',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:chiseled_polished_blackstone', [
      'minecraft:polished_blackstone_bricks',
      '#tfc:chisels',
    ])
  );

  // endstone
  event.remove('minecraft:end_stone_bricks');
  event.shaped('4x minecraft:end_stone_bricks', ['BMB', 'MBM', 'BMB'], {
    B: 'kubejs:end_stone_brick',
    M: '#tfc:mortar',
  });

  // sandstone
  event.remove('minecraft:smooth_sandstone');
  event.remove('minecraft:chiseled_sandstone');
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:smooth_sandstone', [
      'minecraft:sandstone',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:chiseled_sandstone', [
      'minecraft:cut_sandstone',
      '#tfc:chisels',
    ])
  );

  // red sandstone
  event.remove('minecraft:smooth_red_sandstone');
  event.remove('minecraft:chiseled_red_sandstone');
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:smooth_red_sandstone', [
      'minecraft:red_sandstone',
      '#tfc:chisels',
    ])
  );
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless('minecraft:chiseled_red_sandstone', [
      'minecraft:cut_red_sandstone',
      '#tfc:chisels',
    ])
  );

  // nether bricks
  event.remove('minecraft:nether_bricks');
  event.shaped('4x minecraft:nether_bricks', ['BMB', 'MBM', 'BMB'], {
    B: 'minecraft:nether_brick',
    M: '#tfc:mortar',
  });
});
