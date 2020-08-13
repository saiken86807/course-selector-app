import React from 'react';

const SuccessMessage = (props) => {
	return (
		<div className="successMessage">
			<h4>Your Course Selection Form has successfully submitted!</h4>
			<p>
				{' '}
				You will receive an email from your Academic Advisor with further instructions within the next few
				weeks.
			</p>
		</div>
	);
};

export default SuccessMessage;
