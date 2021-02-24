import { Divider } from 'antd';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Button } from 'antd';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home | Patrick van der Bijl</title>
                </Helmet>

                <h1>My portfolio</h1>

                <Button type="primary">Click Here!</Button>
            </div>
        )
    }
}

export default Home;