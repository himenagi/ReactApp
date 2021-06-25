declare var require: any
var React = require('react');

// テキストボックス
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