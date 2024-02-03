console.info('Tweak vanilla drops...');

LootJS.modifiers((event) => {
  // amethyst
  event
    .addBlockLootModifier('minecraft:amethyst_cluster')
    .removeLoot(Ingredient.all)
    .addLoot('2x tfc:gem/amethyst');
});
