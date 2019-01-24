import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Goods from '../../../components/Goods';

class FoodList extends Component {
    render() {
        const {sellerInfo} = this.props;
        if (sellerInfo) {
            return (
                <Fragment>
                    {
                        sellerInfo.categoryList ? <Goods categoryList={sellerInfo.categoryList}/> : null
                    }
                </Fragment>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    sellerInfo: state.sellerData.sellerInfo
})

export default connect(mapStateToProps, null)(FoodList);