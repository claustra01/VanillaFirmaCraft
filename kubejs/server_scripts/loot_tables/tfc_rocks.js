console.info('Tweak TFC rock drops...');

LootJS.modifiers((event) => {
  // stone
  event
    .addBlockLootModifier('minecraft:stone')
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'tfc:rock/loose/dacite');

  // stone slab
  event
    .addBlockLootModifier('minecraft:stone_slab')
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 2], 'tfc:rock/loose/dacite');
  
  // cobblestone
  event
    .addBlockLootModifier('minecraft:cobblestone')
    .removeLoot(Ingredient.all)
    .addLoot('tfc:rock/cobble/dacite');
  event
    .addBlockLootModifier('minecraft:mossy_cobblestone')
    .removeLoot(Ingredient.all)
    .addLoot('tfc:rock/mossy_cobble/dacite');

  // basalt
  event
    .addBlockLootModifier('minecraft:basalt')
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'tfc:rock/loose/basalt');
  event
    .addBlockLootModifier('minecraft:smooth_basalt')
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'tfc:rock/loose/basalt');
  event
    .addBlockLootModifier('minecraft:polished_basalt')
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'tfc:rock/loose/basalt');
});
