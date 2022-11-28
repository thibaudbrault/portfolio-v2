import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';

export const MainPage = styled.main`
	height: 90vh;
	overflow: hidden;
`;

export const MainProject = styled.main`
	position: relative;
	width: 90%;
	min-height: 90vh;
	margin: 0 auto;
`;

function IndexPage() {
	return (
		<Layout>
			<MainPage>
				<Header />
				<Projects />
			</MainPage>
		</Layout>
	);
}

export default IndexPage;
