// priority: 0

console.info('Wood compat recipes registering...')

const wootPairs = [
  {
    "vanilla": "oak",
    "tfc": "oak"
  },
  {
    "vanilla": "spruce",
    "tfc": "spruce"
  },
  {
    "vanilla": "birch",
    "tfc": "birch"
  },
  {
    "vanilla": "jungle",
    "tfc": "sequoia"
  },
  {
    "vanilla": "acacia",
    "tfc": "acacia"
  },
  {
    "vanilla": "dark_oak",
    "tfc": "hickory"
  }
]

onEvent('recipes', event => {
	wootPairs.forEach(wood => {
  	// remove vanilla recipes
    event.remove({output: `minecraft:${wood.vanilla}_planks`})
    event.remove({output: `minecraft:stripped_${wood.vanilla}_wood`})
    event.remove({output: `minecraft:${wood.vanilla}_slab`})
    event.remove({output: `minecraft:${wood.vanilla}_stairs`})
    event.remove({output: `minecraft:${wood.vanilla}_fence`})
    event.remove({output: `minecraft:${wood.vanilla}_sign`})
    event.remove({output: `minecraft:${wood.vanilla}_button`})
    event.remove({output: `minecraft:${wood.vanilla}_pressure_plate`})
    event.remove({output: `minecraft:${wood.vanilla}_door`})
    event.remove({output: `minecraft:${wood.vanilla}_trapdoor`})
    event.remove({output: `minecraft:${wood.vanilla}_fence_gate`})
    event.remove({output: `minecraft:${wood.vanilla}_boat`})
    // replace tfc-style recipes
    event.remove({output: `tfc:wood/lumber/${wood.tfc}`})
    event.remove({output: `tfc:wood/planks/${wood.tfc}_log_fence`})
    event.remove({output: `tfc:wood/support/${wood.tfc}`})
    event.remove({output: `firmalife:wood/jarbnet/${wood.tfc}`})
    event.shapeless(`8x tfc:wood/lumber/${wood.tfc}`, [`#minecraft:${wood.vanilla}_logs`, "#tfc:saws"]).damageIngredient("#tfc:saws", 1)
    event.shapeless(`4x tfc:wood/lumber/${wood.tfc}`, [`tfc:wood/planks/${wood.tfc}`, "#tfc:saws"]).damageIngredient("#tfc:saws", 1)
    event.shaped(`8x tfc:wood/planks/${wood.tfc}_log_fence`, [
      "LWL",
      "LWL"
    ], {
      "L": `minecraft:${wood.vanilla}_log`,
      "W": `tfc:wood/lumber/${wood.tfc}`,
    })
    event.shaped(`8x tfc:wood/support/${wood.tfc}`, [
      "LL",
      "S "
    ], {
      "L": `#minecraft:${wood.vanilla}_logs`,
      "S": "#tfc:saws"
    }).damageIngredient("#tfc:saws", 1)
    event.shaped(`2x firmalife:wood/jarbnet/${wood.tfc}`, [
      "L  ",
      "RWW",
      "L  "
    ], {
      "L": `minecraft:${wood.vanilla}_log`,
      "W": `tfc:wood/lumber/${wood.tfc}`,
      "R": "tfc:metal/rod/brass"
    })
	})
})