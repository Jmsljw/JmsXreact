import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

TableGen.propTypes = {
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
};

TableGen.defaultProps = {
    striped: true,
    bordered: false,
    hover: false,
    responsive: false,
}

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
            Object.keys(props.header).map((key) => {
                return (
                    <th key={`header-${key}`}>{props.header[key]}</th>
                );
            })
        );
    }

    const renderItemsInOrder = (row) => {
        let columnOrder = Object.keys(props.header);
        return (
            columnOrder.map((key) => {
                return (
                    <td key={`data-${key}`}>{row[key]}</td>
                );
            })
        );
    }

    const renderRows = () => {
        return (
            props.rows.map((row, index) => {
                return (
                    <tr key={`row-${index}`}>{renderItemsInOrder(row)}</tr>
                );
            })
        );
    }

    return (
        <Table
            striped={props.striped}
            bordered={props.bordered}
            hover={props.hover}
            responsive={props.responsive}
        >
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
