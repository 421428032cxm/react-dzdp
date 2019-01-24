import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FoodList from './foodList';
import "react-tabs/style/react-tabs.css";
import './style.css';

class Info extends Component {
    render() {
        return (
            <div className="detail-info">
                <div className="header"></div>
                <Tabs>
                    <TabList>
                        <Tab><span>点菜</span></Tab>
                        <Tab><span>评价</span></Tab>
                        <Tab><span>商家</span></Tab>
                    </TabList>
                    <TabPanel>
                        <FoodList />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Info;