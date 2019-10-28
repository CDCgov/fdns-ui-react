import './styles/fdns-ui-react.css';

// Import third party libs' css
import 'animate.css/animate.css';
import 'flexbox/css/grid.min.css';
import 'flexbox/css/media-object.min.css';
import 'react-virtualized/styles.css';

// Importing all fas icons from FA
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

export * as fixtures from './fixtures/fixtures';
export * as shapes from './fixtures/shapes';

export ContainedButton from './components/buttons/ContainedButton';
export Container from './components/layouts/Container';
export DataEndpoint from './components/data-display/DataEndpoint';
export DataInspector from './components/data-display/DataInspector';
export DataLayers from './components/data-display/DataLayers';
export DragSortableList from './components/options/DragSortableList';
export DropdownUser from './components/options/DropdownUser';
export DropdownDownloads from './components/options/DropdownDownloads';
export Filter from './components/filters/Filter';
export FilterAction from './components/filters/FilterAction';
export FilterDate from './components/filters/FilterDate';
export FilterGroup from './components/filters/FilterGroup';
export FilterSelect from './components/filters/FilterSelect';
export { IcoTask, IcoCloudUpload, IcoCloudDownload }  from './components/icons/index.jsx';
export IconButton from './components/buttons/IconButton';
export Loader from './components/feedback/Loader';
export Login from './components/layouts/Login';
export OptionAction from './components/options/OptionAction';
export OptionErrorsWarnings from './components/options/OptionErrorsWarnings';
export OptionView from './components/options/OptionView';
export OptionExport from './components/options/OptionExport';
export OptionPageLimit from './components/options/OptionPageLimit';
export Pane from './components/layouts/Pane';
export PaneHistory from './components/layouts/PaneHistory';
export SearchBar from './components/search/SearchBar';
export SuperButton from './components/buttons/SuperButton';
export SuperGrid from './components/layouts/SuperGrid';
export SuperInput from './components/inputs/SuperInput';
export SuperTable from './components/layouts/SuperTable';
export TablePaginationActions from './components/layouts/TablePaginationActions';
export ThemeProvider from './components/ThemeProvider';
export Uploader from './components/uploaders/Uploader';
export UploaderDrop from './components/uploaders/UploaderDrop';
export UploaderPaste from './components/uploaders/UploaderPaste';
export UploaderList from './components/uploaders/UploaderList';

// React Bootstrap Wrappers

// Layout/Typography
export { Avatar, Divider, Drawer, Grid, Paper, Typography } from '@material-ui/core';

// Tables
export { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// Buttons
export { Button, Fab } from '@material-ui/core';

// Overlays
export { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grow, Modal, Popover, Tooltip } from '@material-ui/core';

// Forms
export { Form, FormGroup, FormControl, FormControlLabel, Input, InputAdornment, InputGroup, InputLabel, Switch, TextField } from '@material-ui/core';

// Utilities
export { Collapse } from '@material-ui/core';
export { Fade } from '@material-ui/core';
