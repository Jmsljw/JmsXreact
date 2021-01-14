import React from 'react';
import { Page, Table } from '../../Theme-AIA';

//* Should be passed in as props.
import trainingIcon from '../../Assets/schedule_trainings.png';

function SampleTable(props) {
    const tableHeader = {
        id: '#',
        firstName: 'First Name',
        lastName: 'Last Name',
        username: 'Username',
    };
    const tableRows = [
        {
            id: '1',
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
        },
        {
            id: '2',
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
        },
        {
            id: '3',
            firstName: 'Larry the Bird',
            lastName: '',
            username: '@twitter',
        },
        {
            id: '4',
            firstName: 'Abu',
            username: '@abu',
        },
        {
            username: '@messy',
            firstName: 'Satu',
            id: '5',
            lastName: 'Dua',
        },
    ];

    //* Render.
    return (
        <Page
            title={'Sample of Table Listing'}
            icon={trainingIcon}
        >
            <Table
                header={tableHeader}
                rows={tableRows}
            />
        </Page>
    );
}

export default SampleTable;