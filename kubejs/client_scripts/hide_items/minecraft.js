console.info('Hide vanilla items...');

JEIEvents.hideItems((event) => {
  // ores
  global.vanillaOres.forEach((ore) => {
    event.hide(`minecraft:${ore}_ore`);
    event.hide(`minecraft:deepslate_${ore}_ore`);
  });
  event.hide('minecraft:raw_iron');
  event.hide('minecraft:raw_iron_block');
  event.hide('minecraft:raw_copper');
  event.hide('minecraft:raw_copper_block');
  event.hide('minecraft:raw_gold');
  event.hide('minecraft:raw_gold_block');

  // metal blocks
  event.hide('minecraft:iron_block');
  event.hide('minecraft:gold_block');
  event.hide('minecraft:copper_block');
  event.hide('minecraft:cut_copper');
  event.hide('minecraft:cut_copper_stairs');
  event.hide('minecraft:cut_copper_slabs');
  event.hide('minecraft:waxed_copper_block');
  event.hide('minecraft:waxed_cut_copper');
  event.hide('minecraft:waxed_cut_copper_stairs');
  event.hide('minecraft:waxed_cut_copper_slab');
  global.vanillaCopperType.forEach(type => {
    event.hide(`minecraft:${type}_copper`);
    event.hide(`minecraft:${type}_cut_copper`);
    event.hide(`minecraft:${type}_cut_copper_stairs`);
    event.hide(`minecraft:${type}_cut_copper_slab`);
    event.hide(`minecraft:waxed_${type}_copper`);
    event.hide(`minecraft:waxed_${type}_cut_copper`);
    event.hide(`minecraft:waxed_${type}_cut_copper_stairs`);
    event.hide(`minecraft:waxed_${type}_cut_copper_slab`);
  })

  // tile entities
  global.vanillaTileEntities.forEach((tile) => {
    event.hide(tile);
  });

  // vanilla tools
  for (const material of [
    'wooden',
    'stone',
    'iron',
    'diamond',
    'netherite',
    'golden',
  ]) {
    for (const tool of ['shovel', 'pickaxe', 'axe', 'hoe', 'sword']) {
      event.hide(`minecraft:${material}_${tool}`);
    }
  }
  for (const material of ['iron', 'diamond', 'netherite', 'golden']) {
    for (const armor of ['helmet', 'chestplate', 'leggings', 'boots']) {
      event.hide(`minecraft:${material}_${armor}`);
    }
  }
  event.hide('minecraft:fishing_rod');

  // stone blocks
  global.tfcRockType.forEach((rock) => {
    if (rock.replace === true) {
      event.hide(`minecraft:${rock.vanilla}`);
      event.hide(`minecraft:${rock.vanilla}_stairs`);
      event.hide(`minecraft:${rock.vanilla}_slab`);
      event.hide(`minecraft:${rock.vanilla}_wall`);
      event.hide(`minecraft:polished_${rock.vanilla}`);
      event.hide(`minecraft:polished_${rock.vanilla}_stairs`);
      event.hide(`minecraft:polished_${rock.vanilla}_slab`);
    }
  });
  for (const type of ['stairs', 'slab', 'wall']) {
    event.hide(`minecraft:cobblestone_${type}`);
    event.hide(`minecraft:mossy_cobblestone_${type}`);
    event.hide(`minecraft:stone_brick_${type}`);
    event.hide(`minecraft:mossy_stone_brick_${type}`);
  }
  event.hide('minecraft:cobblestone');
  event.hide('minecraft:mossy_cobblestone');
  event.hide('minecraft:stone_bricks');
  event.hide('minecraft:mossy_stone_bricks');
  event.hide('minecraft:cracked_stone_bricks');
  event.hide('minecraft:chiseled_stone_bricks');

  event.hide('minecraft:stone_button');
  event.hide('minecraft:stone_pressure_plate');

  // infused stone blocks
  event.hide('minecraft:infested_stone');
  event.hide('minecraft:infested_cobblestone');
  event.hide('minecraft:infested_stone_bricks');
  event.hide('minecraft:infested_mossy_stone_bricks');
  event.hide('minecraft:infested_cracked_stone_bricks');
  event.hide('minecraft:infested_chiseled_stone_bricks');
  event.hide('minecraft:infested_deepslate');

  // wood blocks
  global.tfcWoodType.forEach((wood) => {
    if (wood.replace === true) {
      global.vanillaWoodBlocks.forEach((type) => {
        event.hide(`minecraft:${wood.vanilla}_${type}`);
      });
      event.hide(`minecraft:stripped_${wood.vanilla}_log`);
      event.hide(`minecraft:stripped_${wood.vanilla}_wood`);
    }
  });

  // meats
  const hideMeats = [
    'beef',
    'porkchop',
    'mutton',
    'chicken',
    'rabbit',
    'cod',
    'salmon',
  ];
  hideMeats.forEach((meat) => {
    event.hide(`minecraft:${meat}`);
    event.hide(`minecraft:cooked_${meat}`);
  });
  event.hide('minecraft:tropical_fish');
  event.hide('minecraft:pufferfish');

  // other foods
  event.hide('minecraft:golden_apple');
  event.hide('minecraft:enchanted_golden_apple');
  event.hide('minecraft:melon_slice');
  event.hide('minecraft:golden_carrot');
  event.hide('minecraft:baked_potato');
  event.hide('minecraft:dried_kelp');
  event.hide('minecraft:bread');
  event.hide('minecraft:cookie');
  event.hide('minecraft:cake');

  event.hide('minecraft:mushroom_stew');
  event.hide('minecraft:beetroot_soup');
  event.hide('minecraft:rabbit_stew');
  event.hide('minecraft:suspicious_stew');

  event.hide('minecraft:honey_bottle');
});
