import React from 'react';
import { Page, Form } from '../../Theme-AIA';

//* Assets
import pageIcon from '../../Assets/training_venues.png';

function SampleForm() {
    return (
        <Page
            icon={pageIcon}
            title={'Sample of FormGen'}
        >
            <Form />
        </Page>
    );
}

export default SampleForm;
