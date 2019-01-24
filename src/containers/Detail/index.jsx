import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../../components/CommonHeader';
import Info from './subpage/info';
import * as sellerInfoCreators from './store/actionCreators';

class Detail extends Component {
    render() {
        return (
            <div className="detail-wrap">
                <CommonHeader title="商户详情"/>
                <Info />
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatchSellerInfo();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取商家信息
        dispatchSellerInfo() {
            dispatch(sellerInfoCreators.getSellerInfo());
        }
    }
}

export default connect(null, mapDispatchToProps)(Detail);