import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get("http://localhost:3003/users");
		setUser(result.data.reverse());
	};

	const deleteUser = async (id) => {
		await axios.delete(`http://localhost:3003/users/${id}`);
		loadUsers();
	};

	return (
		<div className="container">
			<div className="head">
				<h1 className="thead">Finance Manager</h1>
				<table class="table border shadow">
					<thead class="thead-dark">
						<tr>
							<th scope="col">S.No</th>
							<th scope="col">Title</th>
							<th scope="col">Date</th>
							<th scope="col">Amount</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>
									<Link class="btn view" to={`/users/${user.id}`}>
										<VisibilityIcon />
									</Link>
									<Link class="btn  edit" to={`/users/edit/${user.id}`}>
										<BorderColorIcon />
									</Link>
									<Link class="btn delete" onClick={() => deleteUser(user.id)}>
										<DeleteIcon />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
