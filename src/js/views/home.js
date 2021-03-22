import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import SideBar from "../component/sideBar.js";
import Books from "../component/books.js";

export const Home = () => (
	<div>
		<SideBar />
		<Books />
	</div>
);
