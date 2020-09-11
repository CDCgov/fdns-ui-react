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
					name: '', // N.B. ALL SECTIONS MUST HAVE A NAME, EVEN IF IT'S JUST AN EMPTY STRING
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
          name: 'Accessibility Standards',
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
			name: 'Style Guide',
			description: 'A Style Guide is a set of standards and rules for the formatting of digital interfaces. Representing a subclass in the design system, this static documentation describes the design system itself: how products should look and feel, use cases for UI patterns, correct typographic scales, etc.',
			content: './src/documentation/style-guide/introduction.md',
      sections: [
        {
          name: 'Color',
          content: './src/documentation/style-guide/colors.html',
				},
				{
          name: 'Spacing',
          content: './src/documentation/style-guide/spacing.md',
				},
				{
          name: 'Typography',
          content: './src/documentation/style-guide/typography.md',
				},
      ]
		},
		{
			name: 'Pattern Library',
			description: 'A Pattern library is a collection of functional design modules (components), that appear across or within an application multiple times.',
			content: './src/documentation/pattern-library/introduction.md',
      sections: [
        {
          name: 'Pattern Components',
          content: './src/documentation/pattern-library/patterns.md',
				},
				{
          name: 'Layout',
          content: './src/documentation/pattern-library/layout.md',
				},
				{
          name: 'Themes',
          content: './src/documentation/pattern-library/themes.md',
				},
				{
          name: 'Icons',
          content: './src/documentation/pattern-library/icons.md',
				},
      ]
		},
		{
			name: 'Coded Components',
			description: 'Current FDNS UI is built using react, however the code could be refactored using style and pattern libraries as a guide into other front-end frameworks.',
			content: './src/documentation/coded-components/component-status.md',
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
					components: './src/components/icons/index.js',
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
      sections: [
        {
          name: 'Contributing',
          content: './src/documentation/contributing-guidelines/contributing.md',
				}
      ]
		},
		{
			name: 'About FDNS UI',
			description: 'FDNS UI is a pragmatic component and design library used to build evolving interfaces for public health applications. It utilizes a system of styles, patterns, components and documentation; to provide a unified language and consistent look and feel when designing data-driven applications. This project is built and maintained open-source by the Centers for Disease Control under the CSELS/DHIS.',
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
			description: 'There are many online reference sites and forums which are a great place for learning best practices and application architecture',
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
			sidebarLinks: '#2c3e50;',
			sidebarLink: '#2c3e50;',
			sidebarBackground: '#FFFFFF',
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
		const { settings, lang } = props;
    // "../mySourceCode.js"
    if (settings && settings.file && typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file);
      // displays the block as static code
      settings.static = true;
      // no longer needed
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      }
    }
    return props;
  }
};