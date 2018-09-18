import './styles/fdns-ui-react.css';

// Import third party libs' css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import 'flexbox/css/grid.min.css';
import 'flexbox/css/media-object.min.css';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';


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

// Buttons
export { Button } from 'react-bootstrap';
export { ButtonGroup } from 'react-bootstrap';
export { ButtonToolbar } from 'react-bootstrap';
export { DropdownButton } from 'react-bootstrap';
export { SplitButton } from 'react-bootstrap';
export { Dropdown } from 'react-bootstrap';
export { MenuItem } from 'react-bootstrap';

// Overlays
export { Modal } from 'react-bootstrap';
export { Tooltip } from 'react-bootstrap';
export { OverlayTrigger } from 'react-bootstrap';
export { Popover } from 'react-bootstrap';

// Navigation
export { Nav } from 'react-bootstrap';
export { NavItem } from 'react-bootstrap';
export { NavDropdown } from 'react-bootstrap';
export { Navbar } from 'react-bootstrap';
export { Breadcrumb } from 'react-bootstrap';
export { Tabs } from 'react-bootstrap';
export { Tab } from 'react-bootstrap';
export { TabContainer } from 'react-bootstrap';
export { TabContent } from 'react-bootstrap';
export { TabPane } from 'react-bootstrap';
export { Pagination } from 'react-bootstrap';
export { Pager } from 'react-bootstrap';

// Page Layout
export { Grid } from 'react-bootstrap';
export { Col } from 'react-bootstrap';
export { Row } from 'react-bootstrap';
export { Clearfix } from 'react-bootstrap';
export { Jumbotron } from 'react-bootstrap';
export { PageHeader } from 'react-bootstrap';
export { ListGroup } from 'react-bootstrap';
export { ListGroupItem } from 'react-bootstrap';
export { Table } from 'react-bootstrap';
export { Panel } from 'react-bootstrap';
export { PanelGroup } from 'react-bootstrap';
export { Accordion } from 'react-bootstrap';
export { Well } from 'react-bootstrap';

// Forms
export { Form } from 'react-bootstrap';
export { FormGroup } from 'react-bootstrap';
export { FormControl } from 'react-bootstrap';
export { ControlLabel } from 'react-bootstrap';
export { InputGroup } from 'react-bootstrap';
export { HelpBlock } from 'react-bootstrap';
export { FieldGroup } from 'react-bootstrap';
export { Checkbox } from 'react-bootstrap';
export { Radio } from 'react-bootstrap';

// Media Content
export { Image } from 'react-bootstrap';
export { Thumbnail } from 'react-bootstrap';
export { ResponsiveEmbed } from 'react-bootstrap';
export { Carousel } from 'react-bootstrap';
export { Media } from 'react-bootstrap';

// Miscellaneous
export { Glyphicon } from 'react-bootstrap';
export { Label } from 'react-bootstrap';
export { Badge } from 'react-bootstrap';
export { Alert } from 'react-bootstrap';
export { ProgressBar } from 'react-bootstrap';

// Utilities
export { Collapse } from 'react-bootstrap';
export { Fade } from 'react-bootstrap';
