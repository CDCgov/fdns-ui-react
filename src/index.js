import './styles/fdns-ui-react.css';

// Import third party libs' css
import 'animate.css/animate.css';
import 'flexbox/css/grid.min.css';
import 'flexbox/css/media-object.min.css';

// Importing all fas icons from FA
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

export * as fixtures from './fixtures/fixtures';
export * as shapes from './fixtures/shapes';

export Container from './components/Container';
export Filter from './components/Filter';
export FilterAction from './components/FilterAction';
export FilterDate from './components/FilterDate';
export FilterGroup from './components/FilterGroup';
export FilterSelect from './components/FilterSelect';
export IconButton from './components/IconButton';
export DataEndpoint from './components/DataEndpoint';
export DataInspector from './components/DataInspector';
export DataLayers from './components/DataLayers';
export DropdownUser from './components/DropdownUser';
export DropdownDownloads from './components/DropdownDownloads';
export Loader from './components/Loader';
export SuperGrid from './components/SuperGrid';
export SuperTable from './components/SuperTable';
export SuperInput from './components/SuperInput';
export SuperButton from './components/SuperButton';
export Login from './components/Login';
export Pane from './components/Pane';
export PaneHistory from './components/PaneHistory';
export SearchBar from './components/SearchBar';
export OptionAction from './components/OptionAction';
export OptionErrorsWarnings from './components/OptionErrorsWarnings';
export OptionView from './components/OptionView';
export OptionExport from './components/OptionExport';
export OptionPageLimit from './components/OptionPageLimit';
export Uploader from './components/Uploader';
export UploaderDrop from './components/UploaderDrop';
export UploaderPaste from './components/UploaderPaste';
export UploaderList from './components/UploaderList';

// React Bootstrap Wrappers

// Layout/Typography
export { Avatar, Divider, Drawer, Grid, Paper, Typography } from '@material-ui/core';

// Tables
export { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// Buttons
export { Button, Fab } from '@material-ui/core';

// Overlays
export { Dialog, DialogContent, DialogContentText, DialogTitle, Grow, Modal, Popover, Tooltip } from '@material-ui/core';

// Forms
export { Form, FormGroup, FormControl, FormControlLabel, Input, InputAdornment, InputGroup, InputLabel, TextField } from '@material-ui/core';

// Utilities
export { Collapse } from '@material-ui/core';
export { Fade } from '@material-ui/core';
