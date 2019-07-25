The IconButton component is used to have a simple button with an icon.

```js
    const imgDataLayers = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljby1kYXRhTGF5ZXJzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImFwcC1kZXNrdG9wLWxpc3QtbmV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2MS4wMDAwMDAsIC0yMTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc0Ni4wMDAwMDAsIDIwNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpY28tZGF0YUxheWVycyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCA3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJfeDMzX19MYXllcnNfMV8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iX3gzM19fTGF5ZXJzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJMYXllcnNfMyIgZmlsbD0iIzFFNDA4QSIgcG9pbnRzPSIxOSAxNC4yNSA5LjUgOS41IDAgMTQuMjUgOS41IDE5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iTGF5ZXJzXzIiIGZpbGw9IiNGRjQwODEiIHBvaW50cz0iMTkgOS41IDkuNSA0Ljc1IDAgOS41IDkuNSAxNC4yNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkxheWVyc18xIiBmaWxsPSIjQUI3MkMxIiBwb2ludHM9IjE5IDQuNzUgOS41IDAgMCA0Ljc1IDkuNSA5LjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

    <div className="icon-buttons">
      <IconButton icon="envelope" color="primary" variant="contained" onClick={()=>{}}>{'Primary'}</IconButton>
      <IconButton icon="cogs" color="default" variant="contained" onClick={()=>{}}>{'Success'}</IconButton>
      <IconButton icon="info-circle" color="default" variant="contained" onClick={()=>{}}>{'Info'}</IconButton>
      <IconButton icon="exclamation-triangle" color="secondary" variant="contained" onClick={()=>{}}>{'Danger'}</IconButton>
      <IconButton icon="bookmark" color="default" variant="text" onClick={()=>{}}>{'Transparent'}</IconButton>
      <IconButton icon="calendar" color="default" variant="contained" onClick={()=>{}}>{'Alternate'}</IconButton>
      <IconButton icon="laptop" color="default" variant="outlined" onClick={()=>{}}>{'Clear'}</IconButton>
      <IconButton image={imgDataLayers} imageAlt="Data Layers" color="default" variant="outlined" onClick={()=>{}}>{'White'}</IconButton>
    </div>
```