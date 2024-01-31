console.info('Tweak TFC plant drops...');

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

  // pumpkin
  event
    .addBlockLootModifier('minecraft:pumpkin')
    .removeLoot(Ingredient.all)
    .addLoot('tfc:pumpkin');

  // melon
  event
    .addBlockLootModifier('minecraft:melon')
    .removeLoot(Ingredient.all)
    .addLoot('tfc:melon');
});
