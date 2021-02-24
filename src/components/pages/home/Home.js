import { Divider } from 'antd';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home | Patrick van der Bijl</title>
                </Helmet>

                <h1>My portfolio</h1>
            </div>
        )
    }
}

export default Home;