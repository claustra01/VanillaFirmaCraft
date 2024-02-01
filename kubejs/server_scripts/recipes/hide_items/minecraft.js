console.info('Remove vanilla item recipes...');

ServerEvents.recipes((event) => {
  // ores
  event.remove('minecraft:raw_iron');
  event.remove('minecraft:raw_iron_block');
  event.remove('minecraft:raw_copper');
  event.remove('minecraft:raw_copper_block');
  event.remove('minecraft:raw_gold');
  event.remove('minecraft:raw_gold_block');

  // gems
  event.remove('minecraft:coal');
  event.remove('minecraft:diamond');
  event.remove('minecraft:emerald');
  event.remove('minecraft:lapis_lazuli');
  event.remove('minecraft:coal_block');
  event.remove('minecraft:diamond_block');
  event.remove('minecraft:emerald_block');

  // metals
  event.remove('minecraft:iron_ingot');
  event.remove('minecraft:gold_ingot');
  event.remove('minecraft:iron_nugget');
  event.remove('minecraft:gold_nugget');
  event.remove('minecraft:iron_block');
  event.remove('minecraft:gold_block');
  event.remove('minecraft:copper_ingot');
  event.remove('minecraft:copper_block');
  event.remove('minecraft:cut_copper');
  event.remove('minecraft:cut_copper_stairs');
  event.remove('minecraft:cut_copper_slabs');
  event.remove('minecraft:waxed_copper_block');
  event.remove('minecraft:waxed_cut_copper');
  event.remove('minecraft:waxed_cut_copper_stairs');
  event.remove('minecraft:waxed_cut_copper_slab');
  for (const type of ['exposed', 'weathered', 'oxidized']) {
    event.remove(`minecraft:${type}_copper`);
    event.remove(`minecraft:${type}_cut_copper`);
    event.remove(`minecraft:${type}_cut_copper_stairs`);
    event.remove(`minecraft:${type}_cut_copper_slab`);
    event.remove(`minecraft:waxed_${type}_copper`);
    event.remove(`minecraft:waxed_${type}_cut_copper`);
    event.remove(`minecraft:waxed_${type}_cut_copper_stairs`);
    event.remove(`minecraft:waxed_${type}_cut_copper_slab`);
  }

  // metal decorations
  event.remove('minecraft:iron_bars')
  event.remove('minecraft:iron_door')
  event.remove('minecraft:iron_trapdoor')
  event.remove('minecraft:chain')
  event.remove('minecraft:heavy_weighted_pressure_plate')
  event.remove('minecraft:light_weighted_pressure_plate')

  // tile entities
  global.vanillaTileEntities.forEach((tile) => {
    event.remove(tile);
  });

  // stone blocks
  global.tfcRockType.forEach((rock) => {
    if (rock.replace === true) {
      event.remove(`minecraft:${rock.vanilla}`);
      event.remove(`minecraft:${rock.vanilla}_stairs`);
      event.remove(`minecraft:${rock.vanilla}_slab`);
      event.remove(`minecraft:${rock.vanilla}_wall`);
      event.remove(`minecraft:polished_${rock.vanilla}`);
      event.remove(`minecraft:polished_${rock.vanilla}_stairs`);
      event.remove(`minecraft:polished_${rock.vanilla}_slab`);
    }
  });
  for (const type of ['stairs', 'slab', 'wall']) {
    event.remove(`minecraft:cobblestone_${type}`);
    event.remove(`minecraft:mossy_cobblestone_${type}`);
    event.remove(`minecraft:stone_brick_${type}`);
    event.remove(`minecraft:mossy_stone_brick_${type}`);
  }
  event.remove('minecraft:cobblestone');
  event.remove('minecraft:mossy_cobblestone');
  event.remove('minecraft:stone_bricks');
  event.remove('minecraft:mossy_stone_bricks');
  event.remove('minecraft:cracked_stone_bricks');
  event.remove('minecraft:chiseled_stone_bricks');

  event.remove('minecraft:stone_button');
  event.remove('minecraft:stone_pressure_plate');

  // wood blocks
  global.tfcWoodType.forEach((wood) => {
    if (wood.replace === true) {
      global.vanillaWoodBlocks.forEach((type) => {
        event.remove(`minecraft:${wood.vanilla}_${type}`);
      });
    }
  });

});