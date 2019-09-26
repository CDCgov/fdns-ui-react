const path = require('path');
const { version } = require('./package');

module.exports = {
	assetsDir: './src/assets/',
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
			name: 'Design Guidelines',
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
          name: 'Layouts',
          content: './src/documentation/design/layouts.md',
        },
      ]
		},
		{
			name: 'Component Library',
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
		},
	],

	theme: {
    color: {
			name: '#ffffff',
			baseBackground: '#fdfdfc',
			sidebarLinks: '#FFF;',
      sidebarBackground: '#00223D',
      codeComment: '#717376',
      codePunctuation: '#999',
      codeProperty: '#905',
      codeDeleted: '#905',
      codeString: '#690',
      codeInserted: '#690',
      codeOperator: '#9a6e3a',
      codeKeyword: '#1673b1',
      codeFunction: '#DD4A68',
			codeVariable: '#e90',
			codeBackground: '#FFFFFF;'
    },
    fontFamily: {
      base: '"proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }
  },
};