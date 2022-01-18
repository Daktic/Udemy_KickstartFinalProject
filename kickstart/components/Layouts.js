import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head'
import Header from './Header';


const layout = (props) => {
    return (
        <Container>
            <Head>
            <link
                async
                rel='stylesheet'
                href='https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css'
            />
            </Head>
            <Header>Im a header</Header>
            {props.children}
        </Container>
    );
};
export default layout;
