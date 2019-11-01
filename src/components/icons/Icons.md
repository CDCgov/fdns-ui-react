The Icon component.


```jsx
	import IcoCloudDownload from './IcoCloudDownload.jsx';
	import IcoCloudUpload from './IcoCloudUpload.jsx';
	import IcoTask from './IcoTask.jsx';
	import IcoBlueInfo from './IcoBlueInfo.jsx';
	import IcoGreenCheckmark from './IcoGreenCheckmark.jsx';
	import IcoRedError from './IcoRedError.jsx';
	import IcoFolderOpenEmpty from './IcoFolderOpenEmpty.jsx';
	import IcoFolderOpenFull from './IcoFolderOpenFull.jsx';
	import IcoFolderClosedFull from './IcoFolderClosedFull.jsx';
	import IcoFolderClosedEmpty from './IcoFolderClosedEmpty.jsx';

<div>
	<div className="Test">
		<IcoCloudDownload />
		<IcoFolderOpenFull />
		<IcoTask />

		<IcoBlueInfo />
		<IcoGreenCheckmark />
		<IcoRedError />

		<IcoBlueInfo />
		<IcoGreenCheckmark />
		<IcoTask />

		<IcoBlueInfo />
		<IcoGreenCheckmark />
		<IcoTask />
	</div>
	<div className="Test">
		<IcoBlueInfo />
		<IcoCloudUpload />
		<IcoFolderOpenFull />

		<IcoFolderOpenEmpty />
		<IcoFolderClosedFull />
		<IcoFolderClosedEmpty />

		<IcoCloudDownload />
		<IcoFolderOpenEmpty />
		<IcoTask />

		<IcoCloudDownload />
		<IcoCloudUpload />
		<IcoTask />
	</div>
</div>
```