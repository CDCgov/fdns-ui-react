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
export { Grid, Paper, Typography } from '@material-ui/core';

// Tables
export { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// Buttons
export { Button } from '@material-ui/core';
// export { ButtonGroup } from '@material-ui/core';
// export { ButtonToolbar } from '@material-ui/core';
// export { DropdownButton } from '@material-ui/core';
// export { SplitButton } from '@material-ui/core';
// export { Dropdown } from '@material-ui/core';
// export { MenuItem } from '@material-ui/core';

// Overlays
// export { Modal } from '@material-ui/core';
// export { Tooltip } from '@material-ui/core';
// export { OverlayTrigger } from '@material-ui/core';
// export { Popover } from '@material-ui/core';

// Navigation
// export { Nav } from '@material-ui/core';
// export { NavItem } from '@material-ui/core';
// export { NavDropdown } from '@material-ui/core';
// export { Navbar } from '@material-ui/core';
// export { Breadcrumb } from '@material-ui/core';
// export { Tabs } from '@material-ui/core';
// export { Tab } from '@material-ui/core';
// export { TabContainer } from '@material-ui/core';
// export { TabContent } from '@material-ui/core';
// export { TabPane } from '@material-ui/core';
// export { Pagination } from '@material-ui/core';
// export { Pager } from '@material-ui/core';

// Page Layout
// export { Col } from '@material-ui/core';
// export { Row } from '@material-ui/core';
// export { Clearfix } from '@material-ui/core';
// export { Jumbotron } from '@material-ui/core';
// export { PageHeader } from '@material-ui/core';
// export { ListGroup } from '@material-ui/core';
// export { ListGroupItem } from '@material-ui/core';
// export { Table } from '@material-ui/core';
// export { Panel } from '@material-ui/core';
// export { PanelGroup } from '@material-ui/core';
// export { Accordion } from '@material-ui/core';
// export { Well } from '@material-ui/core';

// Forms
// export { Form } from '@material-ui/core';
// export { FormGroup } from '@material-ui/core';
// export { FormControl } from '@material-ui/core';
// export { ControlLabel } from '@material-ui/core';
// export { InputGroup } from '@material-ui/core';
// export { HelpBlock } from '@material-ui/core';
// export { FieldGroup } from '@material-ui/core';
// export { Checkbox } from '@material-ui/core';
// export { Radio } from '@material-ui/core';

// // Media Content
// export { Image } from '@material-ui/core';
// export { Thumbnail } from '@material-ui/core';
// export { ResponsiveEmbed } from '@material-ui/core';
// export { Carousel } from '@material-ui/core';
// export { Media } from '@material-ui/core';

// // Miscellaneous
// export { Glyphicon } from '@material-ui/core';
// export { Label } from '@material-ui/core';
// export { Badge } from '@material-ui/core';
// export { Alert } from '@material-ui/core';
// export { ProgressBar } from '@material-ui/core';

// Utilities
export { Collapse } from '@material-ui/core';
// export { Fade } from '@material-ui/core';
