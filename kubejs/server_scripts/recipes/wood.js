ServerEvents.recipes(event => {

  global.tfcWoodType.forEach(wood => {
    if (wood.replace) {
      // replace logs
      event.replaceInput(
        { input: `tfc:wood/log/${wood.name}` },
        `tfc:wood/log/${wood.name}`,
        `minecraft:${wood.name}_log`
      )
      // remove recipes
      event.remove({output: `tfc:wood/wood/${wood.vanilla}`})
      event.remove({output: `minecraft:${wood.vanilla}_planks`})
      event.remove({output: `minecraft:${wood.vanilla}_hanging_sign`})
    }
  })
})

ServerEvents.tags('item', event => {
  global.tfcWoodType.forEach(wood => {
    // add tfc log tags
    event.add(`tfc:${wood.name}_logs`, `minecraft:${wood.name}_log`)
    event.add(`tfc:${wood.name}_logs`, `minecraft:${wood.name}_wood`)
    event.add(`tfc:${wood.name}_logs`, `minecraft:stripped_${wood.name}_log`)
    event.add(`tfc:${wood.name}_logs`, `minecraft:stripped_${wood.name}_wood`)
  })
})