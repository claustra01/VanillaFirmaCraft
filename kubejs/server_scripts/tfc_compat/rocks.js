// priority: 0

console.info('Stone compat recipes registering...')

const rocks = [
  "rocks:rock",
  "rocks:granite_rock",
  "rocks:diorite_rock",
  "rocks:andesite_rock",
  "rocks:sand_rock",
  "rocks:red_sand_rock",
  "rocks:gravel_rock",
  "rocks:end_stone_rock",
  "rocks:netherrack_rock",
  "rocks:soul_soil_rock"
]

const polishRecipes = [
  ["minecraft:stone", "minecraft:smooth_stone"],
  ["minecraft:granite", "minecraft:polished_granite"],
  ["minecraft:diorite", "minecraft:polished_diorite"],
  ["minecraft:andesite", "minecraft:polished_andesite"],
  ["minecraft:deepslate", "minecraft:polished_deepslate"],
  ["minecraft:basalt", "minecraft:smooth_basalt"],
  ["minecraft:blackstone", "minecraft:polished_blackstone"],
  ["minecraft:sandstone", "minecraft:smooth_sandstone"],
  ["minecraft:red_sandstone", "minecraft:smooth_red_sandstone"],
  ["minecraft:smooth_basalt", "minecraft:polished_basalt"]
]

onEvent('recipes', event => {
  // stone anvil
  event.shapeless("tfc:rock/anvil/granite", ["#forge:stone", "#tfc:hammers"])
    .damageIngredient(1)

  // bricks
  event.shapeless("kubejs:brick/stone", ["rocks:rock", "#tfc:chisels"])
    .damageIngredient(1)
  event.shapeless("4x kubejs:brick/stone", ["minecraft:cobblestone", "#tfc:chisels"])
    .damageIngredient(1)
  event.shapeless("4x kubejs:brick/deepslate", ["minecraft:cobbled_deepslate", "#tfc:chisels"])
    .damageIngredient(1)
  event.remove({output: "minecraft:stone_bricks"})
  event.remove({output: "minecraft:deepslate_bricks"})
  event.shaped("4x minecraft:stone_bricks", [
    "BMB",
    "MBM",
    "BMB"
  ], {
    "B": "kubejs:brick/stone",
    "M": "#tfc:mortar"
  })
  event.shaped("4x minecraft:deepslate_bricks", [
    "BMB",
    "MBM",
    "BMB"
  ], {
    "B": "kubejs:brick/deepslate",
    "M": "#tfc:mortar"
  })

  // raw stones
  event.remove({id: "minecraft:granite"})
  event.remove({id: "minecraft:diorite"})
  event.remove({id: "minecraft:andesite"})

  // smooth stones
  polishRecipes.forEach(rockPair => {
    event.remove({output: `${rockPair[1]}`})
    event.shapeless(`${rockPair[1]}`, [`${rockPair[0]}`, "#tfc:chisels"])
      .damageIngredient(1)
    event.recipes.tfc.chisel(`${rockPair[1]}`, `${rockPair[0]}`, 'smooth')
  })
})

onEvent('tags.items', event => {
  // rocks
  event.add("tfc:rock_knapping", rocks)
  event.add("tfc:igneous_extrusive_rock", rocks)
  
  // smooth stones
  polishRecipes.forEach(rockPair => {
    event.add("forge:smooth_stone", `${rockPair[1]}`)
  })

  // flux
  event.add("tfc:fluxstone", ["minecraft:calcite", "rocks:seashell"])
})

onEvent('lootjs', event => {
  // stone anvil
  event.addBlockLootModifier("tfc:rock/anvil/granite")
    .replaceLoot("tfc:rock/loose/granite", "tfc:rock/anvil/granite");
})