import React, { PureComponent, PropTypes } from "react";
import Datetime from 'react-datetime/DateTime';
require('react-datetime');


const DateComponent = (props) => {

    return (
        <Datetime defaultValue={new Date()}
            value={props.value}
            {...props}
            style={{ width: '150%' }} />
    );

};

export default DateComponent