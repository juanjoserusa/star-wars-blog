import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "/workspace/react-flask-hello/src/front/js/pages/home.js";
import { Demo } from "/workspace/react-flask-hello/src/front/js/pages/demo.js";
import { Single } from "/workspace/react-flask-hello/src/front/js/pages/single.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "/workspace/react-flask-hello/src/front/js/pages/details.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
							<Footer />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/info/:type/:id">
							<Details />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);