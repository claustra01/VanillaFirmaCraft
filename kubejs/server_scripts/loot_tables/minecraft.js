console.info('Tweak vanilla drops...');

LootJS.modifiers((event) => {
  // deepslate
  event
    .addBlockLootModifier('minecraft:deepslate')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_deepslate_rock');

  // netherrack
  event
    .addBlockLootModifier('minecraft:netherrack')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_netherrack_rock');
  event
    .addBlockLootModifier('minecraft:crimson_nylium')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_netherrack_rock');
  event
    .addBlockLootModifier('minecraft:warped_nylium')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_netherrack_rock');

  // blackstone
  event
    .addBlockLootModifier('minecraft:blackstone')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_blackstone_rock');

  // endstone
  event
    .addBlockLootModifier('minecraft:end_stone')
    .not((n) => { n.matchOffHand('#tfc:chisels') })
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], 'kubejs:loose_end_stone_rock');

  // amethyst
  event
    .addBlockLootModifier('minecraft:amethyst_cluster')
    .removeLoot(Ingredient.all)
    .addLoot('2x tfc:gem/amethyst');
});
