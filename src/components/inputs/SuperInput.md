The SuperInput is used to collect information from a form.

```js
	initialState = {
    	value: '',
    };
  	onChange = (e) => {
    	setState({
      		value: e.target.value,
    	});
  	}
	<SuperInput onChange={onChange} value={state.value} />
```