import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import ExploreIcon from "@mui/icons-material/Explore";
import { Link, NavLink } from "react-router-dom";
function Main(props) {
	const [state] = useState({
		title: "Finace Manager",
		titleTwo: "Effecient way to record your finance history",
		titleThree: "Ease your work by signing in!",
	});
	let history = useHistory();
	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		website: "",
	});
	const onClick = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3003/users", user);
		history.push("/home");
	};
	return (
		<div className="main">
			<div className="home_intro">
				<h2>
					<div className="title">{state.title}</div>
					<div className="titleTwo">{state.titleTwo}</div>
					<div className="titleThree">{state.titleThree}</div>
				</h2>
				<div className="text">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							delay: 40,
							strings: [
								"Add expenses",
								"Edit and update expenses",
								"View it in a neat tabular form ",
							],
						}}
					/>
				</div>

				<div className="button" onClick={(e) => onClick(e)}>
					Explore!
					<ExploreIcon />
				</div>
			</div>
		</div>
	);
}

export default Main;
