The PaneHistory is used to show a history of other Panes such as from searches.
N.B. this component will likely see a significant update before moving to version 1.0.0.

```js
	import { history } from '../../fixtures/fixtures.js';
	<PaneHistory history={ history } onReset={()=>{}} mainSubtitle={ `6 Results` } />
```