declare var require: any
var React = require('react');

import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

// テキストボックス共通部品
export default (props: PropsObject) => {
    const [value, setValue] = useState(props.value || "");

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    return (
        <TextField
            variant="outlined"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
}

interface PropsObject {
    value?: string,
}