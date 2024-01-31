console.info('Remove TFC item recipes...');

ServerEvents.recipes((event) => {
  // tfc stone blocks
  global.tfcRockType.forEach((rock) => {
    event.remove({ output: `tfc:rock/gravel/${rock.name}` });
    event.remove({ output: `tfc:rock/mossy_loose/${rock.name}` });
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

  // tfc wood blocks
  global.tfcWoodType.forEach((wood) => {
    if (wood.replace === false) {
      global.tfcWoodItems.forEach((type) => {
        event.remove({ output: `tfc:wood/${type}/${wood.name}` });
      });
      global.tfcWoodBlocks.forEach((type) => {
        event.remove({ output: `tfc:wood/planks/${wood.name}_${type}` });
      });
      global.firmalifeWoodItems.forEach((type) => {
        event.remove({ output: `firmalife:wood/${type}/${wood.name}` });
      });
    }
  });

  // tfc dirt blocks
  global.tfcDirtType.forEach((dirt) => {
    global.tfcDirtBlocks.forEach((type) => {
      event.remove({ output: `tfc:${type}/${dirt}` });
      event.remove({ output: `tfc:${type}/${dirt}_slab` });
      event.remove({ output: `tfc:${type}/${dirt}_stairs` });
      event.remove({ output: `tfc:${type}/${dirt}_wall` });
    });
  });

  // tfc sand blocks
  global.tfcSandType.forEach((sand) => {
    global.tfcSandBlocks.forEach((type) => {
      event.remove({ output: `tfc:${type}/${sand}` });
      event.remove({ output: `tfc:${type}/${sand}_slab` });
      event.remove({ output: `tfc:${type}/${sand}_stairs` });
      event.remove({ output: `tfc:${type}/${sand}_wall` });
    });
  });


});