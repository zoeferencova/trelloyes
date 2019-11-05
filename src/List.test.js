import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('List component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<List key='1' header='First List' cards={[<Card />]}/>, div);
		ReactDOM.unmountComponentAtNode(div);
		console.log('first test done')
	})

	it('renders the UI as expected', () => {
		const tree = renderer 
			.create(<List key='2' header='First List' cards={[<Card />]}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	})

	it('renders the UI as expected with no cards', () => {
		const tree = renderer 
			.create(<List key='3' header='First List' cards={[]}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	})
})