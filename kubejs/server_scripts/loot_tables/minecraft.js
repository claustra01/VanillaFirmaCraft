console.info('Tweak TFC rock drops...');

LootJS.modifiers((event) => {
  // deepslate
  event
    .addBlockLootModifier('minecraft:deepslate')
    .matchOffHand('#tfc:chisels')
    .removeLoot(Ingredient.all)
    .addLoot('minecraft:deepslate');
});
