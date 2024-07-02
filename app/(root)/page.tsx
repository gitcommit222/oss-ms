import React from "react";

const Home = () => {
	const user = "Marnel";
	return (
		<div>
			<h2 className="font-medium font-mono text-[30px] text-gray-500">
				Welcome, <span className="font-bold text-gray-700">{user}!</span>
			</h2>
		</div>
	);
};

export default Home;
