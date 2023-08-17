// priority: 0

console.info('Food compat recipes registering...')

const meats = [
  "beef",
  "porkchop",
  "chicken",
  "mutton",
  "rabbit",
  "cod",
  "salmon"
]

onEvent('server.datapack.first', event => {
  // meat
  meats.forEach(meat => {
    event.addTFCHeat(`minecraft:${meat}`, 1.0)
    event.addTFCHeat(`minecraft:cooked_${meat}`, 1.0)
    // temporary value!
    event.addTFCFoodItem(`minecraft:${meat}`, event => {
      event.hunger(4)
      event.saturation(0)
      event.decayModifier(2)
      event.protein(1.5)
    })
    event.addTFCFoodItem(`minecraft:cooked_${meat}`, event => {
      event.hunger(4)
      event.saturation(2)
      event.decayModifier(1.5)
      event.protein(2.5)
    })
  })
})

onEvent('recipes', event => {
  // meat
  meats.forEach(meat => {
    event.recipes.tfc.heating(`minecraft:cooked_${meat}`, `minecraft:${meat}`, 200)
  })
})

onEvent('tags.items', event => {
  // meat
  meats.forEach(meat => {
    event.add("tfc:foods", `minecraft:${meat}`)
    event.add("tfc:foods", `minecraft:cooked_${meat}`)
    event.add("tfc:foods/meats", `minecraft:${meat}`)
    event.add("tfc:foods/meats", `minecraft:cooked_${meat}`)
    event.add("tfc:foods/raw_meats", `minecraft:${meat}`)
    event.add("tfc:foods/cooked_meats", `minecraft:cooked_${meat}`)
  })
})