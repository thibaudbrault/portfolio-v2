import React from 'react';
import { StackContainer, StackGrid, StackSection } from './Styled.Stack';

import LgReact from '@meronex/icons/lg/LgReact';
import SiStyledComponents from '@meronex/icons/si/SiStyledComponents';
import LgNextjs from '@meronex/icons/lg/LgNextjs';
import LgTypescriptIcon from '@meronex/icons/lg/LgTypescriptIcon';

import LgHtml5 from '@meronex/icons/lg/LgHtml5';
import LgCss3 from '@meronex/icons/lg/LgCss3';
import LgSass from '@meronex/icons/lg/LgSass';
import LgJavascript from '@meronex/icons/lg/LgJavascript';

import LgExpress from '@meronex/icons/lg/LgExpress';
import LgMysql from '@meronex/icons/lg/LgMysql';
import LgFirebase from '@meronex/icons/lg/LgFirebase';

import LgGitIcon from '@meronex/icons/lg/LgGitIcon';
import MdcMicrosoftVisualStudioCode from '@meronex/icons/mdc/MdcMicrosoftVisualStudioCode';
import LgGoogleIcon from '@meronex/icons/lg/LgGoogleIcon';

import GiFireflake from '@meronex/icons/gi/GiFireflake';

function Stack() {
	return (
		<StackSection id='stack'>
			<h2>Technologies</h2>
			<StackGrid>
				<StackContainer>
					<h3>
						<GiFireflake /> Principales <GiFireflake />
					</h3>
					<ul>
						<li>
							<LgReact />
							<span>React</span>
						</li>
						<li>
							<SiStyledComponents />
							<span>Styled-Components</span>
						</li>
						<li>
							<LgNextjs />
							<span>Next</span>
						</li>
						<li>
							<LgTypescriptIcon />
							<span>Typescript</span>
						</li>
					</ul>
				</StackContainer>
				<StackContainer>
					<h3>Front</h3>
					<ul>
						<li>
							<LgHtml5 />
							<span>HTML</span>
						</li>
						<li>
							<LgCss3 />
							<span>CSS</span>
						</li>
						<li>
							<LgSass />
							<span>Sass</span>
						</li>
						<li>
							<LgJavascript />
							<span>JS</span>
						</li>
					</ul>
				</StackContainer>
				<StackContainer>
					<h3>Back & Base de données</h3>
					<ul>
						<li>
							<LgExpress />
							<span>Express</span>
						</li>
						<li>
							<LgMysql />
							<span>MySQL</span>
						</li>
						<li>
							<LgFirebase />
							<span>Firebase</span>
						</li>
					</ul>
				</StackContainer>
				<StackContainer>
					<h3>Outils</h3>
					<ul>
						<li>
							<LgGitIcon />
							<span>Git</span>
						</li>
						<li>
							<MdcMicrosoftVisualStudioCode />
							<span>VSCode</span>
						</li>
						<li>
							<LgGoogleIcon />
							<span>Google :)</span>
						</li>
					</ul>
				</StackContainer>
			</StackGrid>
		</StackSection>
	);
}

export default Stack;