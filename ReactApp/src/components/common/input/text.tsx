declare var require: any
var React = require('react');

// �e�L�X�g�{�b�N�X
export default (props: PropsObject) => {
    return (
        <input
            type="text"
            value={props.value}
        />
    );
}

interface PropsObject {
    value?: string,
}