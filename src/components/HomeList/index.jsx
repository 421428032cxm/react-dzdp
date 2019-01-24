import React, { PureComponent } from 'react';
import Item from './Item';
import './style.css';

class HomeList extends PureComponent {
    render() {
        const { list } = this.props;
        if (list) {
            return (
                <div className="list-container">
                    {
                        list.map((item, index) => {
                            return (
                                <Item key={index} data={item} keyword={this.props.keyword}/>
                            )
                        })
                    }
                </div>
            );
        }else{
            return null;
        }
    }
}

export default HomeList;