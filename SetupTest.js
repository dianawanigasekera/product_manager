// This file is called by Create React App default config

const Enzyme        = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()});


class SVGPathElement extends HTMLElement {
	// JSDom still does not implement SVG, but we can mock them for amCharts as a simple HTMLElement
}

window.SVGPathElement = SVGPathElement;

// setup body
document.body.innerHTML = '<div id="root"></div>';