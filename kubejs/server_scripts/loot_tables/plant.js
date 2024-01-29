LootJS.modifiers((event) => {
  // straw
  event
    .addBlockLootModifier("minecraft:grass")
    .matchMainHand("#tfc:knives")
    .addLoot("tfc:straw")
  event
    .addBlockLootModifier("minecraft:tall_grass")
    .matchMainHand("#tfc:knives")
    .addLoot("tfc:straw")

})