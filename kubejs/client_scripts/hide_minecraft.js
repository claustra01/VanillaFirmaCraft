// priority: 0

console.info('JEI item hiding...')

const woodList = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak"
]

onEvent('jei.hide.items', event => {
	// wood blocks
	woodList.forEach(wood => {
    event.hide(`minecraft:${wood}_planks`)
    event.hide(`minecraft:${wood}_slab`)
    event.hide(`minecraft:${wood}_stairs`)
    event.hide(`minecraft:${wood}_sign`)
    event.hide(`minecraft:${wood}_button`)
    event.hide(`minecraft:${wood}_pressure_plate`)
    event.hide(`minecraft:${wood}_door`)
    event.hide(`minecraft:${wood}_trapdoor`)
    event.hide(`minecraft:${wood}_fence_gate`)
    event.hide(`minecraft:${wood}_boat`)
	})
})
