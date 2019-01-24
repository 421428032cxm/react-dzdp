import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cityActionCreators from '../City/store/actionCreators';
import * as homeActionCreators from './store/actionCreators';
import Header from '../../components/Header';
import Category from '../../components/Category';
import Advertising from '../../components/Advertising';
import HomeList from '../../components/HomeList';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header inputSearchResult={this.inputSearchResult.bind(this)}/>
                <Category />
                <Advertising />
                <h2 className="list-title">猜你喜欢</h2>
                <HomeList list={this.props.prevList}/>
                {
                    this.props.page <= this.props.totalPage - 1 ? 
                        <button className="load-more" onClick={this.loadMoreClick.bind(this)}>加载更多</button> : ""
                }
            </div>
        );
    }

    componentDidMount() {
        let { cityName, prevList, page, totalPage, remainder } = this.props;
        if(cityName == null){
            cityName = '北京';
        }
        this.props.getCurrentCity(cityName);
        this.props.dispatchHomeAdData();
        this.props.dispatchHomeListData(cityName, page, totalPage, remainder, prevList);
    }

    loadMoreClick() {
        let { cityName, prevList, page, totalPage, remainder } = this.props;
        page = page + 1;
        if (page <= totalPage - 1) {
            this.props.dispatchHomeListData(cityName, page, totalPage, remainder, prevList);
        }
    }

    inputSearchResult(value) {
        this.props.history.push('/search/all/' + value);
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,    // 用户信息
    cityName: state.cityData.cityName,  // 当前所在城市
    prevList: state.homeData.list,  // 列表
    page: state.homeData.page,   // 当前页
    totalPage: state.homeData.totalPage,  //总页数
    remainder: state.homeData.remainder  // 
})

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取当前城市
        getCurrentCity(cityName) {
            dispatch(cityActionCreators.update(cityName));
        },
        // 派发广告模块Action给store
        dispatchHomeAdData() {
            dispatch(homeActionCreators.getHomeAdData());
        },
        // 派发分页加载列表Action给store
        dispatchHomeListData(cityName, page, totalPage, remainder, prevList) {
            dispatch(homeActionCreators.getHomeListData(cityName, page, totalPage, remainder, prevList));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);