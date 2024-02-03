console.info('Tweak TFC rock drops...');

LootJS.modifiers((event) => {
  // deepslate
  event
    .addBlockLootModifier('minecraft:deepslate')
    .matchOffHand('#tfc:chisels')
    .removeLoot(Ingredient.all)
    .addLoot('minecraft:deepslate');
  
  // amethyst
  event
    .addBlockLootModifier('minecraft:amethyst_cluster')
    .removeLoot(Ingredient.all)
    .addLoot('2x tfc:gem/amethyst');
});
