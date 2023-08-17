// priority: 0

console.info('Plant drop setting...')

onEvent('lootjs', event => {
	// straw plants
  const strawPlants = [
    "minecraft:grass",
    "minecraft:tall_grass"
  ]
  strawPlants.forEach(plant => {
    event.addBlockLootModifier(plant)
      .matchMainHand("#tfc:knives")
      .addLoot("tfc:straw")
  })
})
