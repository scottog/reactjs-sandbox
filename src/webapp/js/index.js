import ReactDOM from 'react-dom';
import React from 'react';
import JabberwockyCreation from './jabberwockyCreation.js';
import JabberwockySummary from './jabberwockySummary.js';
import ExclusionToolBar from './exclusionBar.js';

import cx from 'classnames';

require('../less/app.less');


class App extends React.Component {
	render() {
		return (
		<div>
			<JabberwockyCreation />

			<hr />

			<JabberwockySummary name="Rule Name #23" activationDate="Today" deactivationDate="Tomorrow" />

			<hr />

			<ExclusionToolBar />
		</div>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
);
