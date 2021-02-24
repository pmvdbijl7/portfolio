import { Divider } from 'antd';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Typography, Button } from 'antd';

const { Title } = Typography;

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home - Patrick van der Bijl</title>
                </Helmet>

                <Title>My Portfolio</Title>
                <Title level={2}>My Portfolio</Title>
                <Title level={3}>My Portfolio</Title>
                <Title level={4}>My Portfolio</Title>
                <Title level={5}>My Portfolio</Title>

                <Button type="primary">Click Here!</Button>
                <Button type="default">Click Here!</Button>
                <Button type="dashed">Click Here!</Button>
                <Button type="text">Click Here!</Button>
                <Button type="link">Click Here!</Button>
            </div>
        )
    }
}

export default Home;