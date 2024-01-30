console.info('Hide Vanilla items...')

JEIEvents.hideItems(event => {

  // tile entities
  global.vanillaTileEntities.forEach(tile => {
    event.hide(tile)
  })

  // vanilla tools
  for (const material of ["wooden", "stone", "iron", "diamond", "netherite", "golden"]) {
    for (const tool of ["shovel", "pickaxe", "axe", "hoe", "sword"]) {
      event.hide(`minecraft:${material}_${tool}`) 
    }
  }
  for (const material of ["iron", "diamond", "netherite", "golden"]) {
    for (const armor of ["helmet", "chestplate", "leggings", "boots"]) {
      event.hide(`minecraft:${material}_${armor}`) 
    }
  }
  event.hide("minecraft:fishing_rod")

  // stone blocks
  global.tfcRockType.forEach(rock => {
    if (rock.replace === true) {
      event.hide(`minecraft:${rock.vanilla}`)
      event.hide(`minecraft:${rock.vanilla}_stairs`)
      event.hide(`minecraft:${rock.vanilla}_slab`)
      event.hide(`minecraft:${rock.vanilla}_wall`)
      event.hide(`minecraft:polished_${rock.vanilla}`)
      event.hide(`minecraft:polished_${rock.vanilla}_stairs`)
      event.hide(`minecraft:polished_${rock.vanilla}_slab`)
    }
  })
  for (const type of ["stairs", "slab", "wall"]) {
    event.hide(`minecraft:cobblestone_${type}`)
    event.hide(`minecraft:mossy_cobblestone_${type}`)
    event.hide(`minecraft:stone_brick_${type}`)
    event.hide(`minecraft:mossy_stone_brick_${type}`)
  }
  event.hide(`minecraft:cobblestone`)
  event.hide(`minecraft:mossy_cobblestone`)
  event.hide(`minecraft:stone_bricks`)
  event.hide(`minecraft:mossy_stone_bricks`)
  event.hide(`minecraft:cracked_stone_bricks`)
  event.hide(`minecraft:chiseled_stone_bricks`)

  event.hide("minecraft:stone_button")
  event.hide("minecraft:stone_pressure_plate")
  
  // infused stone blocks
  event.hide("minecraft:infested_stone")
  event.hide("minecraft:infested_cobblestone")
  event.hide(`minecraft:infested_stone_bricks`)
  event.hide(`minecraft:infested_mossy_stone_bricks`)
  event.hide(`minecraft:infested_cracked_stone_bricks`)
  event.hide(`minecraft:infested_chiseled_stone_bricks`)
  event.hide("minecraft:infested_deepslate")

  // wood blocks
	global.tfcWoodType.forEach(wood => {
    if (wood.replace === true) {
      event.hide(`minecraft:${wood.vanilla}_planks`)
      event.hide(`minecraft:${wood.vanilla}_slab`)
      event.hide(`minecraft:${wood.vanilla}_stairs`)
      event.hide(`minecraft:${wood.vanilla}_fence`)
      event.hide(`minecraft:${wood.vanilla}_sign`)
      event.hide(`minecraft:${wood.vanilla}_hanging_sign`)
      event.hide(`minecraft:${wood.vanilla}_button`)
      event.hide(`minecraft:${wood.vanilla}_pressure_plate`)
      event.hide(`minecraft:${wood.vanilla}_door`)
      event.hide(`minecraft:${wood.vanilla}_trapdoor`)
      event.hide(`minecraft:${wood.vanilla}_fence_gate`)
      event.hide(`minecraft:${wood.vanilla}_boat`)
      event.hide(`minecraft:${wood.vanilla}_chest_boat`)
    }
	})

  // meats
  const hideMeats = [
    "beef",
    "porkchop",
    "mutton",
    "chicken",
    "rabbit",
    "cod",
    "salmon"
  ]
  hideMeats.forEach(meat => {
    event.hide(`minecraft:${meat}`)
    event.hide(`minecraft:cooked_${meat}`)
  })
  event.hide("minecraft:tropical_fish")
  event.hide("minecraft:pufferfish")

  // other foods
  event.hide("minecraft:golden_apple")
  event.hide("minecraft:enchanted_golden_apple")
  event.hide("minecraft:melon_slice")
  event.hide("minecraft:golden_carrot")
  event.hide("minecraft:baked_potato")
  event.hide("minecraft:dried_kelp")
  event.hide("minecraft:bread")
  event.hide("minecraft:cookie")
  event.hide("minecraft:cake")

  event.hide("minecraft:mushroom_stew")
  event.hide("minecraft:beetroot_soup")
  event.hide("minecraft:rabbit_stew")
  event.hide("minecraft:suspicious_stew")

})
