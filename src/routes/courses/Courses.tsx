import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Layout = styled('div')`
    display: flex;
    min-height: 100vh;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;



const Content = styled('div')`
    background: yellow;
    flex-grow: 1;
`;

const Header = styled('div')`
    background: blue;
    height: 100px;
`;

export default function Courses() {
    return (
        <Layout>
            <Sidebar/>
            <Content>
                <Header/>
            </Content>
        </Layout>
    );
}