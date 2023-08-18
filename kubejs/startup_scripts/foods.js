// priority: 0

console.info('New foods registering...')

onEvent('item.registry', event => {
	// brick
	event.create("food/grain")
	event.create("food/flour")
	event.create(`food/dough`)
})