import ReactDOM from 'react-dom';
import React from 'react';
import JabberwockyCalendar from './jabberwockyCalendar.js';
import JabberwockyCreation from './jabberwockyCreation.js';
import JabberwockySummary from './jabberwockySummary.js';
import ExclusionToolBar from './exclusionBar.js';
import AppHeader from './AppHeader.js';

import cx from 'classnames';

require('../less/app.less');


class App extends React.Component {
	render() {

		var jabberwockies = [
			{name:"Trust me I'm a dolphin", type:"DestinationConfiguration", activationDate:"04/01/2017", deactivationDate:"06/31/2017"},
			{name:"Trust me I'm also a dolphin", type:"Exclusion", activationDate:"07/01/2017", deactivationDate:"09/31/2017"},
			{name:"Don't trust me I'm a tuna", type:"Exclusion", activationDate:"08/01/2017", deactivationDate:"12/31/2017"},
			{name:"Trust me I'm an anteater", type:"Exclusion", activationDate:"10/01/2017", deactivationDate:"12/31/2017"}
		];

		return (
		<div>
			<AppHeader appName="Exam Destinations" />
			<JabberwockyCreation />

			<hr />

			<JabberwockySummary name="Rule Name #20" activationDate="04/01/2017" deactivationDate="05/31/2017" />
			<JabberwockySummary name="Rule Name #21" activationDate="06/01/2017" deactivationDate="08/01/2017" />
			<JabberwockySummary name="Rule Name #22" activationDate="08/01/2017" deactivationDate="11/31/2017" selected="true" />
			<JabberwockySummary name="Rule Name #23" activationDate="12/01/2017" deactivationDate="02/01/2018" />

			<hr />

			<ExclusionToolBar />

			<hr />

			<JabberwockyCalendar jabberwockies={jabberwockies}/>
		</div>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
);
