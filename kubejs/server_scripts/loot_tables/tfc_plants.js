LootJS.modifiers((event) => {
  // straw
  event
    .addBlockLootModifier('minecraft:grass')
    .matchMainHand('#tfc:knives')
    .addLoot('tfc:straw');
  event
    .addBlockLootModifier('minecraft:tall_grass')
    .matchMainHand('#tfc:knives')
    .addLoot('tfc:straw');

  // melon
  event
    .addBlockLootModifier('minecraft:melon')
    .removeLoot('minecraft:melon_slice')
    .addWeightedLoot([3, 7], 'tfc:food/melon_slice');
});
