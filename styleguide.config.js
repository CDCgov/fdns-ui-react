const path = require('path');
const { version } = require('./package');
const fs = require('fs');

module.exports = {
	assetsDir: './src/assets/',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
	},
	skipComponentsWithoutExample: true,
	version,
	title: 'FDNS UI',
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
      sections: [
        {
          name: 'Design',
          content: './src/documentation/getting-started/design.md',
				},
				{
          name: 'Develop',
          content: './src/documentation/getting-started/develop.md',
				},
      ]
		},
		{
			name: 'Accessibility',
			content: './src/documentation/accessibility/accessibility.md',
      sections: [
        {
          name: 'Accessibility standards',
          content: './src/documentation/accessibility/accessibility-standards.md',
				},
				{
          name: '508 Compliance Report',
          content: './src/documentation/accessibility/508-compliance-report.md',
				},
				{
          name: 'Resources',
          content: './src/documentation/accessibility/resources.md',
				},
				{
          name: 'Tools',
          content: './src/documentation/accessibility/tools.md',
				},
      ]
		},
		{
			name: 'Design Guidelines',
			description: 'Install FDNS-UI, a CDC material design inspired UI and Framework.',
      sections: [
        {
          name: 'Color',
          content: './src/documentation/design-guidelines/colors.html',
				},
				{
          name: 'Layout',
          content: './src/documentation/design-guidelines/layout.md',
				},
				{
          name: 'Spacing',
          content: './src/documentation/design-guidelines/spacing.md',
				},
				{
          name: 'Typography',
          content: './src/documentation/design-guidelines/typography.md',
				},
				{
          name: 'Themes',
          content: './src/documentation/design-guidelines/themes.md',
				},
				{
          name: 'Icons',
          content: './src/documentation/design-guidelines/icons.md',
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
					name: 'Icons',
					components: './src/components/icons/index.jsx',
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
		{
			name: 'Shapes & Fixtures',
			description: 'The shapes and fixtures used in the various components.',
			sections: [
				{
					name: 'Shapes',
					content: './src/fixtures/shapes.md',
				},
				{
					name: 'Fixtures',
					content: './src/fixtures/fixtures.md',
				}
			]
		},
		{
			name: 'Contribution Guidelines',
			description: 'Contributions are welcomed and appreciated! If you want to contribute to FDNS UI….',
      sections: [
        {
          name: 'contributing',
          content: './src/documentation/contributing-guidelines/contributing.md',
				},
				{
          name: 'Pull Request',
          content: './src/documentation/contributing-guidelines/pull-request.md',
				},
      ]
		},
		{
			name: 'About FDNS UI',
			description: 'Install FDNS-UI, a CDC material design inspired UI and Framework.',
      sections: [
        {
          name: 'Current Initiatives',
          content: './src/documentation/about-fdns-ui/current-initiatives.md',
				},
				{
          name: 'FDNS UI History',
          content: './src/documentation/about-fdns-ui/fdns-ui-history.md',
				},
				{
          name: 'Release Notes',
          content: './src/documentation/about-fdns-ui/release-notes.md',
				},
				{
          name: 'Roadmap',
          content: './src/documentation/about-fdns-ui/roadmap.md',
				},
      ]
		},
		{
			name: 'CDC Notices',
      sections: [
        {
          name: 'Public Domain',
          content: './src/documentation/cdc-notices/public-domain.md',
				},
				{
          name: 'License',
          content: './src/documentation//cdc-notices/license.md',
				},
				{
          name: 'Privacy',
          content: './src/documentation//cdc-notices/privacy.md',
				},
				{
          name: 'Contributing',
          content: './src/documentation//cdc-notices/contributing.md',
				},
				{
          name: 'Records',
          content: './src/documentation//cdc-notices/records.md',
				},
				{
          name: 'Notices',
          content: './src/documentation//cdc-notices/notices.md',
				},
      ]
		},
		{
			name: 'Resources',
			description: 'Install FDNS-UI, a CDC material design inspired UI and Framework.',
      sections: [
        {
          name: 'Links',
          content: './src/documentation/resources/link.md',
				},
      ]
		},
	],

	theme: {
    color: {
			name: '#FFF',
			baseBackground: '#FFFFFF',
			link: '#2E845F',
			linkHover: '#90a7bf',
			border: '#717376',
			sidebarLinks: '#FFF;',
			sidebarLink: '#FFF;',
			sidebarBackground: '#282c34',
			codeBase: '#fff',
      codeComment: '#999',
      codePunctuation: '#fff',
      codeProperty: '#fff',
      codeDeleted: '#fff',
      codeString: '#3EAF7C',
      codeInserted: '#fff',
      codeOperator: '#F7F8F9',
      codeKeyword: '#A6D7FF',
      codeFunction: '#fff1c2',
			codeVariable: '#fff',
			codeBackground: '#282c34;'
    },
    fontFamily: {
      base: '"proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }
	},
  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const { settings, lang } = props
    // "../mySourceCode.js"
    if (typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file)
      // displays the block as static code
      settings.static = true
      // no longer needed
      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang
      }
    }
    return props
  }
};