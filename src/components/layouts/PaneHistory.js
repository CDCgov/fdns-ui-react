import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Pane from './Pane';
import { _history } from '../../fixtures/shapes';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** An object that contains history shapes */
  history: _history,
  /** The title of the overall PaneHistory pane */
  mainTitle: PropTypes.string,
  /** The subtitle of the overall PaneHistory pane */
  mainSubtitle: PropTypes.string,
  /** onCollapse event of the overall PaneHistory pane */
  onCollapse: PropTypes.func,
  /** onReset event of the overall PaneHistory pane */
  onReset: PropTypes.func,
};

// set the defaults
const defaultProps = {
  history: {},
  mainTitle: 'All Results',
  mainSubtitle: '100 Results',
  onCollapse() {},
  onReset() {},
};

// define the class
class PaneHistory extends Component {

  // a pane has been collapsed
  handleCollapse = (groupIndex, itemIndex) => {
    this.props.onCollapse(groupIndex, itemIndex);
  }

  // reset the history
  handleReset = (e) => {
    this.props.onReset();
  }

  // render an item
  renderItem = (item, groupIndex, itemIndex) => {
    return (
      <Pane title={item.title} subtitle={item.subtitle} key={itemIndex} />
    );
  }

  // render a group
  renderGroup = (groupName, i) => {
    const { history } = this.props;
    const group = history[groupName];
    const items = group.map((item, j) => {
      return this.renderItem(item, i, j);
    });

    return (
      <div className="history-group" key={i}>
        <h3>{groupName}</h3>
        {items}
      </div>
    );
  }

  // main render method
  render() {
    const { history, mainTitle, mainSubtitle } = this.props;
    return (
      <div className="pane-history">
        <Pane
          title={mainTitle}
          subtitle={mainSubtitle}
        >
          {Object.keys(history).map(this.renderGroup)}
        </Pane>
        <Button className="reset-history" onClick={this.handleReset}>
          Clear History
        </Button>
      </div>
    )
  }
}

// set the props, defaults and export
PaneHistory.propTypes = propTypes;
PaneHistory.defaultProps = defaultProps;

export default PaneHistory;
