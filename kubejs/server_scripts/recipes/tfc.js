console.info('Tweak TFC item recipes...');

ServerEvents.recipes((event) => {
  // disable rocks
  global.tfcRockType.forEach((rock) => {
    if (rock.replace === false) {
      global.tfcRockBlocks.forEach((type) => {
        event.remove({ output: `tfc:rock/${type}/${rock.name}` });
        event.remove({ output: `tfc:rock/${type}/${rock.name}_slab` });
        event.remove({ output: `tfc:rock/${type}/${rock.name}_stairs` });
        event.remove({ output: `tfc:rock/${type}/${rock.name}_wall` });
        event.remove({ output: `tfc:rock/raw/${rock.name}_slab` });
        event.remove({ output: `tfc:rock/raw/${rock.name}_stairs` });
        event.remove({ output: `tfc:rock/raw/${rock.name}_wall` });
        event.remove({ output: `tfc:brick/${rock.name}` });
      });
    }
  });

  // disable woods
  global.tfcWoodType.forEach((wood) => {
    if (wood.replace === false) {
      global.tfcWoodItems.forEach((type) => {
        event.remove({ output: `tfc:wood/${type}/${wood.name}` });
      });
      global.tfcWoodBlocks.forEach((type) => {
        event.remove({ output: `tfc:wood/planks/${wood.name}_${type}` });
      });
      global.firmalifeWoodItems.forEach((type) => {
        event.remove({ output: `firmalife:wood/${type}/${wood.name}`});
      });
    }
  });

});