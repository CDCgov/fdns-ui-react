The IconButton component is used to have a simple button with an icon. The Icons are passed in as children of the component (see code), and can utilize [Material UI icons](https://material-ui.com/components/material-icons/) or your own custom icons/images. There is no external padding or margins by default, you must add it via CSS.

```js
    import AccountBoxIcon from '@material-ui/icons/AccountBox';
    import DnsIcon from '@material-ui/icons/Dns';
    import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
    import IcoBlueInfo from '../icons/IcoBlueInfo.jsx';
    import IcoGreenCheckmark from '../icons/IcoGreenCheckmark.jsx';
    import IcoFolderClosedEmpty from '../icons/IcoFolderClosedEmpty.jsx';

    <div className="icon-buttons">
      <IconButton color="primary" variant="contained" onClick={()=>{}}>
        <AccountBoxIcon />
        {'Primary'}
      </IconButton>
      <IconButton color="default" variant="contained" onClick={()=>{}}>
        <SwapHorizontalCircleIcon />
        {'Default'}
      </IconButton>
      <IconButton color="secondary" variant="contained" onClick={()=>{}}>
        <DnsIcon />
        {'Secondary'}
      </IconButton>
      <IconButton color="default" variant="text" onClick={()=>{}}>
        <IcoGreenCheckmark />
        {'Transparent'}
      </IconButton>
      <IconButton color="default" variant="outlined" onClick={()=>{}}>
        <IcoBlueInfo />
        {'Clear'}
      </IconButton>
      <IconButton color="default" variant="outlined" onClick={()=>{}}>
        <IcoFolderClosedEmpty />
        {'Custom JSX Icon'}
      </IconButton>
    </div>
```