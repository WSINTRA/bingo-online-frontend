import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from '../App.js';

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("welcomes the logged in user", ()=>{
	const {welcomeText} = render(<App/>);
	const welcomeHeader = getTestById('welcome-header');
	expect(welcomeHeader.includes())
})