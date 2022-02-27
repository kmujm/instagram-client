import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/businessCard/SideBar";
import ModalHeader from "../../components/businessCard/ModalHeader";
import CardMain from "../../components/businessCard/CardMain";

const CardSettingsModal = styled.div`
	position: fixed;
	top: 40px;
	left: 363px;
	width: 1250px;
	height: 800px;
	border-radius: 16px;
	border: 1px solid beige;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: row;
	width: 1250px;
	height: 740px;
`;

export default function ImageSettingView() {
	const [state, setState] = useState("");

	const getPalette = (color: string) => {
		console.log(color);
		setState(color);
	};

	return (
		<>
			<CardSettingsModal>
				<ModalHeader headerTitle={"사진 선택"} />
				<ModalBody>
					<CardMain>
					</CardMain>
					<SideBar getPalette={getPalette}/>
				</ModalBody>
			</CardSettingsModal>
		</>
	);
}
