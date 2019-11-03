The DataLayers component is used to modify the available headers.

```js
	import { Button } from '@material-ui/core';
	import { headers } from '../../fixtures/fixtures.js';

	initialState = {
		active: false,
	};
	handleClick = () => {
		const { active } = state;
		setState({
			active: !active,
		});
	}

	handleClose = () => {
		setState({
			active: false,
		});
	}
	getHeight = () => {
		return window.innerHeight;
	}

	<div className="data-layers-wrapper">
		<Button onClick={handleClick}>Toggle Data Layers</Button>
		<DataLayers headers={headers} active={state.active} getHeight={getHeight} onClose={handleClose}/>
	</div>
```