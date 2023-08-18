// priority: 0

console.info('New foods registering...')

onEvent('item.registry', event => {
	// brick
	event.create("food/wheat_grain")
	event.create("food/wheat_flour")
	event.create(`food/wheat_dough`)
})