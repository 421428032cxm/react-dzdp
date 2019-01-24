import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as searchActionCreators from '../store/actionCreators';
import HomeList from '../../../components/HomeList';

class SearchList extends PureComponent {
    render() {
        console.log("重新渲染");
        const { searchList } = this.props;
        return (
            <div>
                {
                    searchList.length ? <HomeList list={searchList} keyword={this.props.keyword}/> : null
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatchSearchResult();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.keyword);
        console.log(this.props.keyword);
        const type = this.props.type;
        const keyword = this.props.keyword;
        if (type === prevProps.type && keyword === prevProps.keyword) {
            return;
        }else{
            console.log('重新搜索');
            this.props.dispatchSearchResult();
        }
    }
}


const mapStateToProps = (state) => ({
    searchList: state.searchData.data
})

const mapDispatchToProps = (dispatch) => {
    return {
        // 派发搜索Action给store
        dispatchSearchResult(page, cityName, type, keyword) {
            dispatch(searchActionCreators.getSearchResult(page, cityName, type, keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);