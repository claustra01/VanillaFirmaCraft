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

  // stone blocks
  global.tfcRockType.forEach(rock => {
    if (rock.replace === true) {
      event.hide(`minecraft:${rock.vanilla}_stairs`)
      event.hide(`minecraft:${rock.vanilla}_slab`)
      event.hide(`minecraft:${rock.vanilla}_wall`)
      event.hide(`minecraft:polished${rock.vanilla}`)
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
  event.hide(`minecraft:stone_bricks`)
  event.hide(`minecraft:cracked_stone_bricks`)
  event.hide(`minecraft:chiseled_stone_bricks`)

  // wood blocks
	global.tfcWoodType.forEach(wood => {
    if (wood.replace === true) {
      event.hide(`minecraft:${wood.vanilla}_planks`)
      event.hide(`minecraft:${wood.vanilla}_slab`)
      event.hide(`minecraft:${wood.vanilla}_stairs`)
      event.hide(`minecraft:${wood.vanilla}_fence`)
      event.hide(`minecraft:${wood.vanilla}_sign`)
      event.hide(`minecraft:${wood.vanilla}_button`)
      event.hide(`minecraft:${wood.vanilla}_pressure_plate`)
      event.hide(`minecraft:${wood.vanilla}_door`)
      event.hide(`minecraft:${wood.vanilla}_trapdoor`)
      event.hide(`minecraft:${wood.vanilla}_fence_gate`)
      event.hide(`minecraft:${wood.vanilla}_boat`)
      event.hide(`minecraft:${wood.vanilla}_chest_boat`)
    }
	})

})
