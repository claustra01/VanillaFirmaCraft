// priority: 0

console.info('JEI item hiding...')

onEvent('jei.hide.items', event => {

	// tfc-style ores
	global.newOreType.forEach(ore => {
		global.tfcRockType.forEach(rock => {
			// tfc ore blocks
			if (ore.isGraded) {
				event.hide(`${ore.modId}:ore/poor_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/normal_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/poor_${ore.name}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}`)
				event.hide(`${ore.modId}:deposit/${ore.name}/${rock}`)
			} else {
				event.hide(`${ore.modId}:ore/${ore.name}/${rock}`)
			}
		})
	})

	// tfc stone blocks
	global.tfcRockType.forEach(rock => {
		global.tfcRockBlocks.forEach(type => {
			// keep granite anvil
			let item = `tfc:rock/${type}/${rock}`
			if (item != "tfc:rock/anvil/granite") event.hide(item)
			// others
			event.hide(`tfc:rock/${type}/${rock}_slab`)
			event.hide(`tfc:rock/${type}/${rock}_stairs`)
			event.hide(`tfc:rock/${type}/${rock}_wall`)
			event.hide(`tfc:brick/${rock}`)
		})
	})

	// tfc stone tools
	global.tfcStoneType.forEach(stone => {
		global.tfcStoneTools.forEach(type => {
			event.hide(`tfc:stone/${type}/${stone}`)
		})
	})

	// tfc wood items
	global.tfcWoodType.forEach(wood => {
		// replaced
		event.hide(`tfc:wood/log/${wood.name}`)
		event.hide(`tfc:wood/stripped_log/${wood.name}`)
		event.hide(`tfc:wood/wood/${wood.name}`)
		event.hide(`tfc:wood/stripped_wood/${wood.name}`)
		event.hide(`tfc:wood/leaves/${wood.name}`)
		event.hide(`tfc:wood/sapling/${wood.name}`)
		event.hide(`tfc:wood/twig/${wood.name}`)
		// disabled
		if (wood.replaced == false) {
			global.tfcWoodItems.forEach(type => {
				event.hide(`tfc:wood/${type}/${wood.name}`)
			})
			global.tfcWoodBlocks.forEach(type => {
				event.hide(`tfc:wood/planks/${wood.name}_${type}`)
			})
			global.firmalifeWoodItems.forEach(type => {
				event.hide(`firmalife:wood/${type}/${wood.name}`)
			})
		}
	})

	// tfc dirt blocks
	global.tfcDirtType.forEach(dirt => {
		global.tfcDirtBlocks.forEach(type => {
			event.hide(`tfc:${type}/${dirt}`)
			event.hide(`tfc:${type}/${dirt}_slab`)
			event.hide(`tfc:${type}/${dirt}_stairs`)
			event.hide(`tfc:${type}/${dirt}_wall`)
		})
	})

	// tfc sand blocks
	global.tfcSandType.forEach(sand => {
		global.tfcSandBlocks.forEach(type => {
			event.hide(`tfc:${type}/${sand}`)
			event.hide(`tfc:${type}/${sand}_slab`)
			event.hide(`tfc:${type}/${sand}_stairs`)
			event.hide(`tfc:${type}/${sand}_wall`)
		})
	})

	// tfc and firmalife plants
	global.tfcPlants.forEach(plant => {
		event.hide(`${plant}`)
	})
	
})
