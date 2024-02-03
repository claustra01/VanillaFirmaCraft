console.info('Add JEI info...');

JEIEvents.information((event) => {
  // raw stones
  global.tfcRockType.forEach((rock) => {
    if (rock.replace) {
      event.addItem(`tfc:rock/raw/${rock.name}`, ['To get raw stone, mine with chisel in offhand.']);
    }
  });

  // flux
  event.addItem('tfc:powder/flux', ['Flux made from calcite rock, borax, corals, or seashell.'])
});