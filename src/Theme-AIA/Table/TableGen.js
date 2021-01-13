import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

//* Header's keys must be match to Row's keys.
function TableGen(props) {

    useEffect(() => {
        //* componentDidMount & componentDidUpdate

        //* componentWillUnmount
        return (() => {

        });
    });

    const renderHeader = () => {
        return (
            Object.values(props.header).map((title) => {
                return (
                    <th>{title}</th>
                );
            })
        );
    }

    const renderItemsInOrder = (row) => {
        let columnOrder = Object.keys(props.header);
        return (
            columnOrder.map((key) => {
                return (
                    <td>{row[key]}</td>
                );
            })
        );
    }

    const renderRows = () => {
        return (
            props.rows.map((row) => {
                return (
                    <tr>{renderItemsInOrder(row)}</tr>
                );
            })
        );
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    );
}

export default TableGen;
