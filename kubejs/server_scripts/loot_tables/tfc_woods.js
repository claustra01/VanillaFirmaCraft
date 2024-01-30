LootJS.modifiers((event) => {
  global.tfcWoodType.forEach((wood) => {
    if (wood.replace === true) {
      global.vanillaWoodBlocks.forEach((type) => {
        // logs
        event
          .addBlockLootModifier(`minecraft:${wood.vanilla}_log`)
          .replaceLoot(
            `minecraft:${wood.vanilla}_log`,
            `tfc:wood/${type}/${wood.name}`
          );
      });
    }
  });
});
