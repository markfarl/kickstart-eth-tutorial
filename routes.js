const routes = require('next-routes')()

// :wildcard
routes
	.add('/campaigns/new', '/campaigns/new')
	.add(
	'/campaigns/:address', '/campaigns/show'
	)

module.exports = routes