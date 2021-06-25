declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

import Text from './components/common/input/text';

const App = () => {
    return (
        <>
            <Text value="123" />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));