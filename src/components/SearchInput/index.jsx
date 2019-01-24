import React, { PureComponent } from 'react';
import './style.css'

class SearchInput extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
                <input
                    className="search-input"
                    type="text"
                    placeholder="请输入关键字"
                    value = {this.state.inputValue}
                    onChange={this.onChangeHandle.bind(this)}
                    onKeyUp={this.KeyUpHandle.bind(this)}/>
        );
    }

    componentDidMount() {
        this.setState({
            inputValue: this.props.value || ''
        })
    }

    onChangeHandle(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    KeyUpHandle(e) {
        if (e.keyCode === 13) {
            this.props.enterHandle(e.target.value);
        }else{
            return;
        }
    }
}

export default SearchInput;