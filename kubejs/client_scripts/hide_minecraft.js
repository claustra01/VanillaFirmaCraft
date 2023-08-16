// priority: 0

console.info('JEI item hiding...')

onEvent('jei.hide.items', event => {
	// wood blocks
	global.tfcWoodType.forEach(wood => {
    if (wood.replaced == true) {
      event.hide(`minecraft:${wood.vanilla}_planks`)
      event.hide(`minecraft:${wood.vanilla}_slab`)
      event.hide(`minecraft:${wood.vanilla}_stairs`)
      event.hide(`minecraft:${wood.vanilla}_fence`)
      event.hide(`minecraft:${wood.vanilla}_sign`)
      event.hide(`minecraft:${wood.vanilla}_button`)
      event.hide(`minecraft:${wood.vanilla}_pressure_plate`)
      event.hide(`minecraft:${wood.vanilla}_door`)
      event.hide(`minecraft:${wood.vanilla}_trapdoor`)
      event.hide(`minecraft:${wood.vanilla}_fence_gate`)
      event.hide(`minecraft:${wood.vanilla}_boat`)
    }
	})
})
