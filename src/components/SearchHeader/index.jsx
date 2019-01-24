import React, { PureComponent } from 'react';
import SearchInput from '../SearchInput';
import './style.css';

class SearchHeader extends PureComponent {
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.goBackClick}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    }

    goBackClick() {
        window.history.back();
    }

    enterHandle(value) {
        this.props.inputSearchResult(value);
    }
}

export default SearchHeader;