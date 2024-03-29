console.info('Tweak animal drops...');

LootJS.modifiers((event) => {
  // camel
  event
    .addEntityLootModifier('minecraft:camel')
    .addWeightedLoot([3, 6], ['tfc:food/camelidae'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.1)));

  // cat
  event
    .addEntityLootModifier('minecraft:cat')
    .removeLoot('minecraft:string')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:small_raw_hide');

  // chicken
  event
    .addEntityLootModifier('minecraft:chicken')
    .removeLoot('minecraft:chicken')
    .addWeightedLoot([1, 3], ['tfc:food/chicken'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([3, 6], ['minecraft:feather']);

  // cow
  event
    .addEntityLootModifier('minecraft:cow')
    .removeLoot('minecraft:beef')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/beef'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([1, 3], ['firmalife:rennet'])
    .addLoot('tfc:large_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.5)));

  // dolphin
  event
    .addEntityLootModifier('minecraft:dolphin')
    .removeLoot('minecraft:cod')
    .addWeightedLoot([3, 6], ['tfc:blubber'])
    .addWeightedLoot([1, 2], ['minecraft:bone']);

  // donkey
  event
    .addEntityLootModifier('minecraft:donkey')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/horse_meat'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.2)));

  // fox
  event
    .addEntityLootModifier('minecraft:fox')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:small_raw_hide');

  // frog
  event.addEntityLootModifier('minecraft:frog').addLoot('tfc:food/frog_legs');

  // goat
  event
    .addEntityLootModifier('minecraft:goat')
    .addWeightedLoot([3, 6], ['tfc:food/chevon'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([1, 3], ['firmalife:rennet'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot('tfc:goat_horn')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.1)));

  // horse
  event
    .addEntityLootModifier('minecraft:horse')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/horse_meat'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.2)));

  // llama
  event
    .addEntityLootModifier('minecraft:llama')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/camelidae'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.1)));

  // mooshroom
  event
    .addEntityLootModifier('minecraft:mooshroom')
    .removeLoot('minecraft:beef')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/beef'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([1, 3], ['firmalife:rennet'])
    .addLoot('tfc:large_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.5)));

  // mule
  event
    .addEntityLootModifier('minecraft:mule')
    .removeLoot('minecraft:leather')
    .addWeightedLoot([3, 6], ['tfc:food/horse_meat'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.1)));

  // ocelot
  event
    .addEntityLootModifier('minecraft:ocelot')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:small_raw_hide');

  // panda
  event
    .addEntityLootModifier('minecraft:panda')
    .removeLoot('minecraft:bamboo')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:large_raw_hide');

  // parrot
  event
    .addEntityLootModifier('minecraft:parrot')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([3, 6], ['minecraft:feather']);

  // pig
  event
    .addEntityLootModifier('minecraft:pig')
    .removeLoot('minecraft:porkchop')
    .addWeightedLoot([2, 4], ['tfc:food/pork'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:medium_raw_hide');

  // polar bear
  event
    .addEntityLootModifier('minecraft:polar_bear')
    .removeLoot('minecraft:cod')
    .removeLoot('minecraft:salmon')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:large_raw_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.2)));

  // rabbit
  event
    .addEntityLootModifier('minecraft:rabbit')
    .removeLoot('minecraft:rabbit')
    .removeLoot('minecraft:rabbit_hide')
    .addWeightedLoot([1, 3], ['tfc:food/rabbit'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:small_raw_hide');

  // sheep
  event
    .addEntityLootModifier('minecraft:sheep')
    .removeLoot('minecraft:mutton')
    .addWeightedLoot([2, 4], ['tfc:food/mutton'])
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addWeightedLoot([1, 3], ['firmalife:rennet'])
    .addLoot('tfc:small_sheepskin_hide')
    .addLoot(LootEntry.of('waterflasks:bladder').when((c) => c.randomChance(0.1)));
  global.colors.forEach((color) => {
    event
      .addEntityLootModifier('minecraft:sheep')
      .removeLoot(`minecraft:${color}_wool`);
  });

  // squid
  event.addEntityLootModifier('minecraft:squid').addLoot('tfc:food/calamari');
  event
    .addEntityLootModifier('minecraft:glow_squid')
    .addLoot('tfc:food/calamari');

  // turtle
  event
    .addEntityLootModifier('minecraft:turtle')
    .removeLoot('minecraft:seagrass')
    .addLoot('tfc:food/turtle')
    .addLoot('minecraft:scute');

  // wolf
  event
    .addEntityLootModifier('minecraft:wolf')
    .addWeightedLoot([1, 2], ['minecraft:bone'])
    .addLoot('tfc:small_raw_hide');
});
