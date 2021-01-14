import React from 'react';
import { Container } from 'react-bootstrap';

//* Page Layout Container
function AiaContainer(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default AiaContainer;
