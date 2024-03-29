console.info('Hide TFC items...');

JEIEvents.hideItems((event) => {
  // tfc-style ores
  global.tfcOreType.forEach((ore) => {
    global.tfcRockType.forEach((rock) => {
      // tfc ore blocks
      if (ore.type === 'metal') {
        event.hide(`${ore.modId}:ore/poor_${ore.name}/${rock.name}`);
        event.hide(`${ore.modId}:ore/normal_${ore.name}/${rock.name}`);
        event.hide(`${ore.modId}:ore/rich_${ore.name}/${rock.name}`);
        event.hide(`${ore.modId}:ore/poor_${ore.name}`);
        event.hide(`${ore.modId}:ore/rich_${ore.name}`);
        event.hide(`${ore.modId}:deposit/${ore.name}/${rock.name}`);
      } else {
        event.hide(`${ore.modId}:ore/${ore.name}/${rock.name}`);
      }
    });
  });

  // tfc stone blocks
  global.tfcRockType.forEach((rock) => {
    // replaced
    event.hide(`tfc:rock/gravel/${rock.name}`);
    // disabled
    if (rock.replace === false) {
      global.tfcRockBlocks.forEach((type) => {
        event.hide(`tfc:rock/${type}/${rock.name}`);
        event.hide(`tfc:rock/${type}/${rock.name}_slab`);
        event.hide(`tfc:rock/${type}/${rock.name}_stairs`);
        event.hide(`tfc:rock/${type}/${rock.name}_wall`);
        event.hide(`tfc:rock/raw/${rock.name}_slab`);
        event.hide(`tfc:rock/raw/${rock.name}_stairs`);
        event.hide(`tfc:rock/raw/${rock.name}_wall`);
        event.hide(`tfc:brick/${rock.name}`);
      });
    }
  });

  // tfc wood items
  global.tfcWoodType.forEach((wood) => {
    // replaced
    event.hide(`tfc:wood/leaves/${wood.name}`);
    event.hide(`tfc:wood/sapling/${wood.name}`);
    event.hide(`tfc:wood/twig/${wood.name}`);
    event.hide(`tfc:wood/fallen_leaves/${wood.name}`);
    event.hide(`tfc:plant/${wood.name}_krummholz`)
    // disabled
    if (wood.replace === false) {
      global.tfcWoodItems.forEach((type) => {
        event.hide(`tfc:wood/${type}/${wood.name}`);
      });
      global.tfcWoodBlocks.forEach((type) => {
        event.hide(`tfc:wood/planks/${wood.name}_${type}`);
      });
      global.firmalifeWoodItems.forEach((type) => {
        event.hide(`firmalife:wood/${type}/${wood.name}`);
      });
    }
  });

  // tfc dirt blocks
  global.tfcDirtType.forEach((dirt) => {
    global.tfcDirtBlocks.forEach((type) => {
      event.hide(`tfc:${type}/${dirt}`);
      event.hide(`tfc:${type}/${dirt}_slab`);
      event.hide(`tfc:${type}/${dirt}_stairs`);
      event.hide(`tfc:${type}/${dirt}_wall`);
    });
  });

  // tfc sand blocks
  global.tfcSandType.forEach((sand) => {
    global.tfcSandBlocks.forEach((type) => {
      event.hide(`tfc:${type}/${sand}`);
      event.hide(`tfc:${type}/${sand}_slab`);
      event.hide(`tfc:${type}/${sand}_stairs`);
      event.hide(`tfc:${type}/${sand}_wall`);
    });
  });

  // tfc and firmalife plants
  global.tfcPlants.forEach((plant) => {
    event.hide(`${plant}`);
  });

  // custom tfc-style ores
  global.tfcOreType.forEach((ore) => {
    global.vanillaEnableRockType.forEach((rock) => {
      event.hide(`kubejs:ore/${ore.name}/${rock.name}`);
    });
  });
});
