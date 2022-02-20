import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import CategoryView from "./pages/setting/CategoryView";
import EditFeedView from "./pages/setting/EditFeedView";
import EditProfileView from "./pages/setting/EditProfileView";
import CardSettingView from "./pages/businessCard/CardSettingVeiw";

export default function App() {
	return (
		// <div>
		// 	<Input defaultValue="@probablyup" type="text" />
		// 	<Button primary>Button</Button>
		// 	<SettingsWrapper></SettingsWrapper>
		// </div>
		<BrowserRouter>
			<nav>
				<Link to="/">Main</Link>
				<Link to="/home">Home</Link>
				<Link to="/setting/category">Category</Link>
				<Link to="/businesscard/setting">명함 설정</Link>
			</nav>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/home" element={<HomeView />} />
				<Route path="/setting/category" element={<CategoryView />} />
				<Route path="/setting/category/editfeed" element={<EditFeedView />} />
				<Route path="/setting/category/editprofile" element={<EditProfileView />} />
				<Route path="/businesscard/setting" element={<CardSettingView />} />
			</Routes>
		</BrowserRouter>
	);
}
