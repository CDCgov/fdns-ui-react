const path = require('path');
const { version } = require('./package');

module.exports = {
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
	},
	skipComponentsWithoutExample: true,
	version,
	title: 'FDNS UI React Style Guide',
};