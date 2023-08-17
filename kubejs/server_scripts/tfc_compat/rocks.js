// priority: 0

console.info('Stone compat recipes registering...')

const rocks = [
  "rocks:cobblestone_splitter",
  "rocks:granite_splitter",
  "rocks:diorite_splitter",
  "rocks:andesite_splitter",
  "rocks:sandstone_splitter",
  "rocks:red_sandstone_splitter",
  "rocks:end_stone_splitter",
  "rocks:netherrack_splitter",
  "rocks:soul_soil_splitter"
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
  event.recipes.tfc.damage_inputs_shapeless_crafting("tfc:rock/anvil/granite", ["#forge:stone", "#tfc:hammers"])

  // bricks
  event.recipes.tfc.damage_inputs_shapeless_crafting("kubejs:brick/stone", ["rocks:cobblestone_splitter", "#tfc:chisels"])
  event.recipes.tfc.damage_inputs_shapeless_crafting("4x kubejs:brick/stone", ["minecraft:cobblestone", "#tfc:chisels"])
  event.recipes.tfc.damage_inputs_shapeless_crafting("4x kubejs:brick/deepslate", ["minecraft:cobbled_deepslate", "#tfc:chisels"])
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
    event.recipes.tfc.damage_inputs_shapeless_crafting(`${rockPair[1]}`, [`${rockPair[0]}`, "#tfc:chisels"])
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