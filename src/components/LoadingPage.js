import React from 'react';

const LoadingPage = () => {
	return (
		<>
			<div className="container-fluid fill d-flex justify-content-center align-items-center">
				<div className="spinner spinner-border text-warning" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
};

export default LoadingPage;
