import { Card } from "../types/card.ts"

export let cards: Card[] = [{
        "id": "1",
        "title": "sdflmgdhsfjklhСпроектировать структуру доски",
        "isDone": true,
        "isUrgent": false
    }];

    export function getAllCards() {
        return cards;
    }

export function createCard(title: string) {
    const newCard: Card = {
        id: "2",
        title: title,
        isDone: false,
        isUrgent: false
    };

    cards.push(newCard);

    return newCard;
    
}

export function deleteCard(id: string) {
    const newCards = cards.filter(
        card => card.id !== id
    );

    const isDeleted = newCards.length !== cards.length;

    cards = newCards;
    return isDeleted;
}