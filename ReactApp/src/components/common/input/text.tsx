declare var require: any
var React = require('react');

import TextField from '@material-ui/core/TextField';

// テキストボックス共通部品
export default (props: PropsObject) => {
    return (
        <TextField
            variant="outlined"
            value={props.value}
        />
    );
}

interface PropsObject {
    value?: string,
}