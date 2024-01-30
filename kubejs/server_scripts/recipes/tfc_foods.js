ServerEvents.recipes(event => {

  // hidden foods
  event.remove("minecraft:golden_apple")
  event.remove("minecraft:golden_carrot")
  event.remove("minecraft:bread")
  event.remove("minecraft:cookie")
  event.remove("minecraft:cake")

  // wheat grain
  event.recipes.tfc.extra_products_shapeless_crafting("tfc:straw", 
    event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless("tfc:food/wheat_grain", ["minecraft:wheat", "#tfc:knives"])
    )
  )

})

ServerEvents.tags('item', event => {
  
  // fluits
  const fruits = [
    "apple",
    "melon_slice",
    "sweet_berries",
    "glow_berries"
  ]
  event.add("tfc:foods", fruits)
  event.add("tfc:foods/fruits", fruits)

  // vegetable
  const vegetables = [
    "carrot",
    "potato",
    "beetroot"
  ]
  event.add("tfc:foods", vegetables)
  event.add("tfc:foods/vegetables", vegetables)

  // grains
  event.add("tfc:foods", "minecraft:wheat")
  
})