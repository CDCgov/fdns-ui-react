The UploaderList component is used to list valid files.

```js
    let files = [];
    const count = 50;
    Array.apply(null, { length: count }).map((n, i) => {
      const file = new Blob([`${n}${i}`], { type: 'text/plain' });
      file.name = `pasted-file-${new Date().getTime()}.txt`;
      file.lastModifiedDate= new Date();
      return files.push(file);
    });
	<UploaderList files={files} />
```