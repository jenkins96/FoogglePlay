import React from "react";

const Books = _ => {
	return (
		<div className="books-wrapper">
			<div className="books l-content l-content-constrained">
				<ul>
					<li className="thumb">
						<a className="thumb-link" href="#">
							<span className="overlay" />
							<img
								src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyfHxwZW9wbGV8ZW58MHx8fHwxNjE2MTg0Njc0&ixlib=rb-1.2.1&q=80&w=1080"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Books;
