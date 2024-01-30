LootJS.modifiers((event) => {
  // stone
  event
    .addBlockLootModifier("minecraft:stone")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/dacite")
  event
    .addBlockLootModifier("minecraft:stone_slab")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 2], "tfc:rock/loose/dacite")
  event
    .addBlockLootModifier("minecraft:cobblestone")
    .removeLoot(Ingredient.all)
    .addLoot("tfc:rock/cobble/dacite")
  event
    .addBlockLootModifier("minecraft:mossy_cobblestone")
    .removeLoot(Ingredient.all)
    .addLoot("tfc:rock/mossy_cobble/dacite")

  // granite
  event
    .addBlockLootModifier("minecraft:granite")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/granite")
  // diorite
  event
    .addBlockLootModifier("minecraft:diorite")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/diorite")
  // andesite
  event
    .addBlockLootModifier("minecraft:andesite")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/andesite")

  // basalt
  event
    .addBlockLootModifier("minecraft:basalt")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/basalt")
  event
    .addBlockLootModifier("minecraft:smooth_basalt")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/basalt")

  // calcite
  event
    .addBlockLootModifier("minecraft:calcite")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1, 4], "tfc:rock/loose/chalk")
})