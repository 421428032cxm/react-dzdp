import React, { PureComponent } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage';
import './style.css';

class Search extends PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div id="search-wrap">
                <SearchHeader keyword={params.keyword} inputSearchResult={this.inputSearchResult.bind(this)}/>
                <div className="interval"></div>
                <SearchList type={params.type} keyword={params.keyword} />
            </div>
        );
    }

    inputSearchResult(value) {
        this.props.history.push('/search/all/' + value);
    }
}

export default Search;