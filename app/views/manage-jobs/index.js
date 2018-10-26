import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination, Row, Col, Menu, Dropdown, Button, Icon } from 'antd';
import Job from '../components/job';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />Relevance</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />Time Posted</Menu.Item>
  </Menu>
);

class ManageJobs extends Component {
  constructor () {
    super ();
    this.state = {
      current: 1
    };
    this.onPageChange = (value) => this._onPageChange(value);
  }

  _onPageChange (value) {
    console.log(value);
    this.setState({
      current: value
    }); 
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            Filters
          </Col>
          <Col span={12}>
            <div className="results-container">
              <Row>
                <Col span={6}>
                  <h2>Results ()</h2>
                </Col>
                <Col span={12}>&nbsp;</Col>
                <Col span={6}>
                <Dropdown overlay={menu}>
                  <Button style={{ marginLeft: 8 }}>
                    Button <Icon type="down" />
                  </Button>
                </Dropdown>
                </Col>
              </Row>
              <Job searchJobs={this.props.searchJobs} />
            </div>
            <Pagination defaultCurrent={this.state.current} total={50} />
          </Col>
          <Col span={6}>
            Track time
          </Col>
        </Row>
      </div>
    );
  }
}

ManageJobs.displayName = 'ManageJobs';

ManageJobs.defaultProps = {
  searchJobs: []
};

function select (state) {
  return {
    searchJobs: state.searchJob
  };
}

export default connect(select)(ManageJobs);
