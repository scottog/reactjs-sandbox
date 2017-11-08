import ReactDOM from 'react-dom';
import React from 'react';

import cx from 'classnames';

require('../less/app.less');

class App extends React.Component {
	render() {
		return (
				<div>
					<h3>{this.props.message}</h3>
				</div>
		)
	}
}

ReactDOM.render(
		<App message="OH HAI MARK!"/>,
		document.getElementById('react')
);