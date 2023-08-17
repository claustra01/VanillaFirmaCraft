onEvent('recipes', event => {
  // remove vanilla tools
  for (const material of ["wooden", "stone", "iron", "diamond", "netherite", "golden"]) {
    for (const tool of ["shovel", "pickaxe", "axe", "hoe", "sword"]) {
      event.remove({output: `minecraft:${material}_${tool}`}) 
    }
  }
  for (const material of ["iron", "diamond", "netherite", "golden"]) {
    for (const armor of ["helmet", "chestplate", "leggings", "boots"]) {
      event.remove({output: `minecraft:${material}_${armor}`}) 
    }
  }
})
