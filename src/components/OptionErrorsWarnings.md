The OptionErrorsWarnings component is used to give an action button.

```js
	import { errors, warnings } from '../fixtures/fixtures.js';
	const analysis = {
		valid: true,
		warnings: warnings.length,
		explanation: Object.assign(errors, warnings),
		errors: errors.length,
	};
	<OptionErrorsWarnings analysis={analysis}
		updateErrorsWarnings={()=>{}} />
```