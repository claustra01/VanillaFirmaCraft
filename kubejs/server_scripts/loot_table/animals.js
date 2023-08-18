// priority: 0

console.info('Animal drop setting...')

onEvent('lootjs', event => {
  // cat
  event.addEntityLootModifier("minecraft:cat")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:small_raw_hide")

  // chicken
  event.addEntityLootModifier("minecraft:chicken")
    .removeLoot("minecraft:chicken")
    .addWeightedLoot([1, 3], ["tfc:food/chicken"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([3, 6], ["minecraft:feather"])

  // cow
  event.addEntityLootModifier("minecraft:cow")
    .removeLoot("minecraft:beef")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/beef"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([1, 3], ["firmalife:rennet"])
    .addLoot("tfc:large_raw_hide")

  // donkey
  event.addEntityLootModifier("minecraft:donkey")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/horse_meat"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:medium_raw_hide")

  // fox
  event.addEntityLootModifier("minecraft:fox")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:small_raw_hide")

  // goat
  event.addEntityLootModifier("minecraft:goat")
    .addWeightedLoot([3, 6], ["tfc:food/chevon"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([1, 3], ["firmalife:rennet"])
    .addLoot("tfc:medium_raw_hide")

  // horse
  event.addEntityLootModifier("minecraft:horse")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/horse_meat"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:medium_raw_hide")

  // llama
  event.addEntityLootModifier("minecraft:llama")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/camelidae"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:medium_raw_hide")

  // mooshroom
  event.addEntityLootModifier("minecraft:mooshroom")
    .removeLoot("minecraft:beef")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/beef"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([1, 3], ["firmalife:rennet"])
    .addLoot("tfc:large_raw_hide")

  // mule
  event.addEntityLootModifier("minecraft:mule")
    .removeLoot("minecraft:leather")
    .addWeightedLoot([3, 6], ["tfc:food/horse_meat"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:medium_raw_hide")

  // ocelot
  event.addEntityLootModifier("minecraft:ocelot")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:small_raw_hide")
  
  // panda
  event.addEntityLootModifier("minecraft:panda")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:large_raw_hide")

  // parrot
  event.addEntityLootModifier("minecraft:parrot")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([3, 6], ["minecraft:feather"])

  // pig
  event.addEntityLootModifier("minecraft:pig")
    .removeLoot("minecraft:porkchop")
    .addWeightedLoot([2, 4], ["tfc:food/pork"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:medium_raw_hide")
  
  // polar bear
  event.addEntityLootModifier("minecraft:polar_bear")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:large_raw_hide")

  // rabbit
  event.addEntityLootModifier("minecraft:rabbit")
    .removeLoot("minecraft:rabbit")
    .removeLoot("minecraft:rabbit_hide")
    .addWeightedLoot([1, 3], ["tfc:food/rabbit"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:small_raw_hide")

  // sheep
  event.addEntityLootModifier("minecraft:sheep")
    .removeLoot("minecraft:mutton")
    .addWeightedLoot([2, 4], ["tfc:food/mutton"])
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addWeightedLoot([1, 3], ["firmalife:rennet"])
    .addLoot("tfc:small_sheepskin_hide")
  global.colors.forEach(color => {
    event.addEntityLootModifier("minecraft:sheep")
      .removeLoot(`minecraft:${color}_wool`)
  })

  // squid
  event.addEntityLootModifier("minecraft:squid")
    .addLoot("tfc:food/calamari")
  event.addEntityLootModifier("minecraft:glow_squid")
    .addLoot("tfc:food/calamari")

  // wolf
  event.addEntityLootModifier("minecraft:wolf")
    .addWeightedLoot([1, 2], ["minecraft:bone"])
    .addLoot("tfc:small_raw_hide")

})