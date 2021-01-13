import React from 'react';
import { Container } from 'react-bootstrap';

//* CSS
import './css/Page.css';

//* Page Layout Container
function Page(props) {
    return (
        <div className='page-container'>
            <div className='page-header'>
                <Container>
                    <div className='title-container'>
                        <div className='title-item'>
                            <img className='title-icon' src={props.icon} alt='page-icon' />
                        </div>
                        <div className='title-item'>
                            <span className='title-text'>{props.title}</span>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='page-content'>
                <Container>
                    {props.children}
                </Container>
            </div>
        </div>
    );
}

export default Page;
