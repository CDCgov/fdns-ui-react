const path = require('path');
const { version } = require('./package');

module.exports = {
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
	},
	skipComponentsWithoutExample: true,
	version,
	title: 'FDNS UI React Style Guide',
	sections: [
		{
			name: 'Buttons',	
			components: './src/components/buttons/*.js',
		},
		{
			name: 'Data Display',	
			components: './src/components/data-display/*.js',
		},
		{
			name: 'Feedback',	
			components: './src/components/feedback/*.js',
		},
		{
			name: 'Filters',
			components: './src/components/filters/*.js',
		},
		{
			name: 'Layouts',
			components: './src/components/layouts/*.js',
		},
		{
			name: 'Navigation',	
			components: './src/components/navigation/*.js',
		},
		{
			name: 'Options',	
			components: './src/components/options/*.js',
		},
		{
			name: 'Search',	
			components: './src/components/search/*.js',
		},
		{
			name: 'Surfaces',
			components: './src/components/surfaces/*.js'
		},
		{
			name: 'Uploaders',
			components: './src/components/uploaders/*.js'
		},
		{
			name: 'Utils',
			components: './src/components/utils/*.js'
		},
	],
	theme: {
    color: {
      baseBackground: '#fdfdfc',
      sidebarBackground: '#f7f8f9',
      codeBackground: '#ffffff',
			link: '#717376',
			linkHover: '#52a5e9',
    },
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
};