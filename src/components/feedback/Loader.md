The Loader component is used as a consistent wrapper for the app context.

```js
	import { Button } from '@material-ui/core';

	handleTrigger = (e) => {
	    setState({
	      active: true,
	    });

	    // remove the loader after 3 secs
	    setTimeout(() => {
	      setState({
	        active: false,
	      });
	    }, (3 * 1000));
	}

	<div className="loader-wrapper">
			<Button onClick={handleTrigger}>Trigger Loader</Button>
			<Loader active={state.active} />
	</div>
```