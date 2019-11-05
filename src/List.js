import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
	const cards = props.cards.map((card) => (
		<Card key={card.id} title={card.title} content={card.content} />
	))

	return (
		<section className="List">
	        <header className="List-header">
	          <h2>{props.header}</h2>
	        </header>
	        <div className="List-cards">
	        	{cards}
	        </div>
      	</section>
	);
}

export default List;