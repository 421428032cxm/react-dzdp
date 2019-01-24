import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cityActionCreators from './store/actionCreators';
import CommonHeader from '../../components/CommonHeader';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends Component {

    render() {
        const { cityInfo } = this.props;
        return (
            <div id="city-wraper">
                <CommonHeader title="当前城市"/>
                <CurrentCity cityName={cityInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        );
    }

    changeCity(newCity) {
        if(newCity == null){
            return;
        }else{
            this.props.dispatchUpdateCity(newCity);

            // 只要组件最外层使用了BrowserRouter/HashRouter，那每个组件内部就可以通过 this.props.history.push 来进行路由跳转。
            this.props.history.push('/');
        } 
    }
}

const mapStateToProps = (state) => ({
    cityInfo: state.cityData
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateCity(cityName) {
            dispatch(cityActionCreators.update(cityName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);