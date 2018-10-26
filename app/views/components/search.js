import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Input } from 'antd';

const Search = Input.Search;

class SearchContainer extends Component {
  constructor () {
    super();
    this.onSearch = (value) => this._onSearch(value);
  }

  _onSearch (value) {
    console.log(value);
    this.props.dispatch(actions.getJobResults(value));
  }
  render() {
    return (
      <div>
        <Search
          placeholder="Search by keywords (PHP, .NET, graphic design, etc.)"
          onSearch={this.onSearch}
          enterButton="Search"
          size="large"
          />
      </div>
    );
  }
}

function select (state) {
  return {
    settings: state
  };
}

export default connect(select)(SearchContainer);
