The IconButton component is used to have a simple button with an icon. The Icons are passed in as children of the component (see code), and can utilize [Material UI icons](https://material-ui.com/components/material-icons/) or your own custom icons/images.

```js
    const imgDataLayers = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljby1kYXRhTGF5ZXJzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImFwcC1kZXNrdG9wLWxpc3QtbmV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2MS4wMDAwMDAsIC0yMTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc0Ni4wMDAwMDAsIDIwNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpY28tZGF0YUxheWVycyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCA3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJfeDMzX19MYXllcnNfMV8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iX3gzM19fTGF5ZXJzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJMYXllcnNfMyIgZmlsbD0iIzFFNDA4QSIgcG9pbnRzPSIxOSAxNC4yNSA5LjUgOS41IDAgMTQuMjUgOS41IDE5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iTGF5ZXJzXzIiIGZpbGw9IiNGRjQwODEiIHBvaW50cz0iMTkgOS41IDkuNSA0Ljc1IDAgOS41IDkuNSAxNC4yNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkxheWVyc18xIiBmaWxsPSIjQUI3MkMxIiBwb2ludHM9IjE5IDQuNzUgOS41IDAgMCA0Ljc1IDkuNSA5LjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
    import MailIcon from '@material-ui/icons/Mail';
    import SettingsIcon from '@material-ui/icons/Settings';
    import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
    import BookmarkIcon from '@material-ui/icons/Bookmark';
    import LaptopIcon from '@material-ui/icons/Laptop';

    <div className="icon-buttons">
      <IconButton color="primary" variant="contained" onClick={()=>{}}>
        <MailIcon />
        {'Primary'}
      </IconButton>
      <IconButton color="default" variant="contained" onClick={()=>{}}>
        <SettingsIcon />
        {'Default'}
      </IconButton>
      <IconButton color="secondary" variant="contained" onClick={()=>{}}>
        <CalendarTodayIcon />
        {'Secondary'}
      </IconButton>
      <IconButton color="default" variant="text" onClick={()=>{}}>
        <BookmarkIcon />
        {'Transparent'}
      </IconButton>
      <IconButton color="default" variant="outlined" onClick={()=>{}}>
        <LaptopIcon />
        {'Clear'}
      </IconButton>
      <IconButton image={imgDataLayers} imageAlt="Data Layers" color="default" variant="outlined" onClick={()=>{}}>
        {'Custom Image Icon'}
      </IconButton>
    </div>
```