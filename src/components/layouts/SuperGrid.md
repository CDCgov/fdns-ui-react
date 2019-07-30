The SuperGrid is used to display a grid of data. You can pass headers to display how you want to display the individual rows in the grid item.

```js
	import { messages, headers } from '../../fixtures/fixtures.js';
	<SuperGrid data={messages} headers={headers} onDetail={()=>{}} />
```