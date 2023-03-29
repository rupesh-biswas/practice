import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

function Deck(props) {
    const [deckId, setDeckId] = useState('');
    const [cardsremaing, setCardsremaing] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchDeckID() {
            const response = (await axios.get(`${API_BASE_URL}/new/shuffle/`)).data;
            setDeckId(response.deck_id);
            setCardsremaing(response.remaining);
        }
        fetchDeckID();
    }, [])

    async function handleClick() {
        try {
            let cardURL = `${API_BASE_URL}/${deckId}/draw/`
            const response = (await axios.get(cardURL)).data;
            let card = response.cards[0];

            setCardsremaing(response.remaining);
            console.log(cardsremaing)
            if (response.success === false) {
                throw new Error("No Card remaining");
            }
            setCards([
                ...cards,
                {
                    id: card.code,
                    image: card.image,
                    value: card.value,
                    suit: card.suit,
                    name: `${card.value} of ${card.suit}`
                }
            ]);
        } catch (err) {
            alert(err);
        }
    };
    console.log(cards);
    return (
        <div className="Deck">
            <h1 className="Deck-title">♦️ Card Dealer ♦️</h1>
            <h2 className="Deck-title subtitle">♦️ A little demo made with React ♦️</h2>
            <button className="Deck-btn"
                onClick={handleClick}>
                Get Card!</button>
            <div className="Deck-cardarea">
                {cards.map(card =>
                    <Card
                        key={card.id}
                        image={card.image}
                        name={card.name}
                    />
                )}
            </div>
        </div>
    )
};

export default Deck;