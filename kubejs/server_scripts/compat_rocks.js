// priority: 0

console.info('Stone compat recipes registering...')

const polishableRocks = [
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
  // smooth stones
  polishableRocks.forEach(rockPair => {
    event.remove({output: `${rockPair[1]}`})
    event.shapeless(`${rockPair[1]}`, [`${rockPair[0]}`, "#tfc:chisels"])
      .damageIngredient(1)
    event.recipes.tfc.chisel(`${rockPair[1]}`, `${rockPair[0]}`, 'smooth')
  })
})

onEvent('tags.items', event => {
  // rocks
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
  event.add("tfc:rock_knapping", rocks)
  event.add("tfc:igneous_extrusive_rock", rocks)
  // smooth stones
  polishableRocks.forEach(rockPair => {
    event.add("forge:smooth_stone", `${rockPair[1]}`)
  })
})