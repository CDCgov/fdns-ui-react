The DropdownDownloads component is used to display information about downloads from the OptionsExport.

```js
	const downloads = [
	  {
	    file: {
	      size: 100,
	      drawer: 'test',
	      modified: '2017-09-01T12:06:22.923Z',
	      etag: 'test',
	      id: '1',
	    },
	    query: 'year: 2017 tag:foo',
	    format: 'xml',
	    progress: 1.0,
	    _id: '1',
	    events: [],
	    status: 'COMPLETED',
	  },{
	    query: '',
	    format: 'xlsx',
	    progress: 1.0,
	    _id: '2',
	    events: [],
	    status: 'ERROR',
	  },{
	    query: '',
	    format: 'json',
	    progress: 0.5,
	    _id: '3',
	    events: [],
	    status: 'RUNNING',
	  }
	];

	renderURL = () => {
		return '#DocDropdownDownloads';
	}
		<div className='alignment'>
			<DropdownDownloads role="button" aria-label="download button" downloads={downloads} onClear={()=>{}} renderURL={renderURL} />
		</div>
```