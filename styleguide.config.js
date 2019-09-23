const path = require('path');
const { version } = require('./package');

module.exports = {
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
	},
	skipComponentsWithoutExample: true,
	version,
	title: 'FDNS UI Library',
	sections: [
		{
      sections: [
        {
          content: './src/documentation/introduction.md',
				},
      ]
		},
		{
			name: 'Getting Started',
			description: 'Install FDNS-UI, a CDC material design inspired UI and Framework.',
      sections: [
        {
          name: 'Installation of React Library',
          content: './src/documentation/installation/installation.md',
				},
				{
          name: '508 compliance',
          content: './src/documentation/508.md',
          description: 'The description for the 508 section'
				},
				{
          name: 'FAQs',
          content: './src/documentation/FAQs.md',
          description: 'The description for the FAQs section'
        },
      ]
		},
		{
			name: 'Design Library',
			description: 'Install FDNS-UI, a CDC material design inspired UI and Framework.',
      sections: [
        {
          name: 'Style',
          content: './src/documentation/design/style.md',
				},
				{
          name: 'Theme',
          content: './src/documentation/design/theme.md',
				},
				{
          name: 'Components',
          content: './src/documentation/design/components.md',
        },
      ]
		},
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
			name: '#ffffff',
      baseBackground: '#fdfdfc',
      sidebarBackground: '#00223D',
      codeBackground: '#ffffff',
			link: '#E9E8E7',
			linkHover: '#A6D7FF',
    },
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
};