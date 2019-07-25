The SuperTable is used to display a table of data. You can pass headers to display how you want to display the columns and rows of the table.

```js
	import { messages, headers } from '../../fixtures/fixtures.js';
	const data = messages.slice(0).splice(0,25);

	<SuperTable data={data}
                headers={headers}
                showErrorsAndWarnings={false}
                onDetail={()=>{}} />
```