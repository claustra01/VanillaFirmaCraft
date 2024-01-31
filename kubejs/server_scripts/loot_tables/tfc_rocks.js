console.info('Tweak TFC rock drops...');

LootJS.modifiers((event) => {
  // stone
  event
    .addBlockLootModifier('minecraft:stone')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/dacite');
  event
    .addBlockLootModifier('minecraft:stone')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/dacite');

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

  // granite
  event
    .addBlockLootModifier('minecraft:granite')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/granite');
  event
    .addBlockLootModifier('minecraft:granite')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/granite');

  // diorite
  event
    .addBlockLootModifier('minecraft:diorite')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/diorite');
  event
    .addBlockLootModifier('minecraft:diorite')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/diorite');

  // andesite
  event
    .addBlockLootModifier('minecraft:andesite')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/andesite');
  event
    .addBlockLootModifier('minecraft:andesite')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/andesite');

  // basalt
  event
    .addBlockLootModifier('minecraft:basalt')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/basalt');
  event
    .addBlockLootModifier('minecraft:basalt')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/basalt');
  event
    .addBlockLootModifier('minecraft:smooth_basalt')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/basalt');
  event
    .addBlockLootModifier('minecraft:smooth_basalt')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/smooth/basalt');

  // calcite
  event
    .addBlockLootModifier('minecraft:calcite')
    .removeLoot(Ingredient.all)
    .not((n) => {
      n.matchOffHand('#tfc:chisels')
    })
    .addWeightedLoot([1, 4], 'tfc:rock/loose/chalk')
  event
    .addBlockLootModifier('minecraft:smooth_basalt')
    .matchOffHand('#tfc:chisels')
    .addLoot('tfc:rock/raw/chalk');
});
