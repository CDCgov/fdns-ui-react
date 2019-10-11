The FilterGroup is used to group Filters together and have a common apply / reset method from FilterAction used with the group.

```js
	import Filter from './Filter.js';

  	<FilterGroup onApply={()=>{}}>
    	<Filter ref="a" label="Filter A" placeholder="Filter A" icon={["far", "folder"]} />
    	<Filter ref="b" label="Filter B" placeholder="Filter B" icon={["far", "file"]} />
  	</FilterGroup>
```