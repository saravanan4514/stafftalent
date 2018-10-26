import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchContainer from './components/search';
import ManageJobs from './manage-jobs';
import { Layout, Menu, Breadcrumb, Icon, Row, Col  } from 'antd';

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
  componentWillUnmount () {
    this.props.dispatch(actions.getSettings());
  }
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <div className="logo" />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">HOW IT WORKS</Menu.Item>
              <Menu.Item key="2">BROWSE</Menu.Item>
              <Menu.Item key="3">SEARCH</Menu.Item>
              <Menu.Item key="4">My Account</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Row gutter={16}><Col span={1}>&nbsp;</Col></Row>
            <Row gutter={16}>
              <Col span={1}></Col>
                <Col span={22}>
                  <SearchContainer />
                  <Row gutter={16}><Col span={1}>&nbsp;</Col></Row>
                  <ManageJobs />
                </Col>
              </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

function select (state) {
  return {
    settings: state
  };
}

export default connect(select)(Home);
