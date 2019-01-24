import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';
import './style.css';

class Header extends PureComponent {
    render() {
        // 当前城市
        const { currentCity } = this.props;
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                      <span>{currentCity}</span>
                      &nbsp;
                      <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to='/user'>
                      <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-search">
                    <i className="icon-search"></i>
                    <SearchInput enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    }

    enterHandle(value) {
        this.props.inputSearchResult(value);
    }
}

const mapStateToProps = (state) => ({
    currentCity: state.cityData.cityName
})

const mapDispatchToProps = () => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);