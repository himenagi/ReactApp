declare var require: any
var React = require('react');

import TextField from '@material-ui/core/TextField';

// �e�L�X�g�{�b�N�X���ʕ��i
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