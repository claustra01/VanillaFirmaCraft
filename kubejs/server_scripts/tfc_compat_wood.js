// priority: 0

console.info('Wood compat recipes registering...')

onEvent('recipes', event => {
	global.tfcWoodType.forEach(wood => {
  	// remove vanilla recipes
    if (wood.replaced) {
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
      event.remove({output: `tfc:wood/planks/${wood.name}_log_fence`})
      event.remove({output: `firmalife:wood/jarbnet/${wood.name}`})
      event.shaped(`8x tfc:wood/planks/${wood.name}_log_fence`, [
        "LWL",
        "LWL"
      ], {
        "L": `minecraft:${wood.vanilla}_log`,
        "W": `tfc:wood/lumber/${wood.name}`
      })
      event.shaped(`2x firmalife:wood/jarbnet/${wood.name}`, [
        "L  ",
        "RWW",
        "L  "
      ], {
        "L": `minecraft:${wood.vanilla}_log`,
        "W": `tfc:wood/lumber/${wood.name}`,
        "R": "tfc:metal/rod/brass"
      })
    }
	})
})

onEvent('tags.items', event => {
  global.tfcWoodType.forEach(wood => {
  	// add log tags
    if (wood.replaced) {
      const logs = [
        `minecraft:${wood.vanilla}_log`,
        `minecraft:stripped_${wood.vanilla}_log`,
        `minecraft:${wood.vanilla}_wood`,
        `minecraft:stripped_${wood.vanilla}_wood`
      ]
      event.add(`tfc:${wood.name}_logs`, logs)
    }
	})
})