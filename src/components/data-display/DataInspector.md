The DataInspector component is used to get a detailed view of JSON data with a built-in search.

```js
	import { messages } from '../../fixtures/fixtures.js';
	const data = Object.assign({}, messages.slice(0)[0]);
	data.total = 100;
	data.isUser = true;
	data.isAdmin = null;

	<DataInspector data={data} onClose={()=>{}} />
```