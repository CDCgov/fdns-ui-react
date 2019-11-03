The ActionBar component allows creation of a simple ActionBar with a few default actions.
You have the ability to add custom actions via child components.

##### Default ActionBar
```js
  <div className="action-bar">
    <ActionBar />
  </div>
```

##### With Custom Actions And No Search Bar
```js
  import IconButton from '../buttons/IconButton';
  <div className="action-bar">
    <ActionBar showSearchBar={false}>
      <IconButton icon="angle-double-up" color="secondary" variant="contained" onClick= {()=>{}}>
        Collapse All
      </IconButton>
    </ActionBar>
  </div>
```

##### With ErrorText
```js
  import IconButton from '../buttons/IconButton';
  <div className="action-bar">
    <ActionBar errorText={'This is a sample error message.'} />
  </div>
```