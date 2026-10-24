import express from 'express';
import { createCard, deleteCard, getAllCards } from './services/cards.service.ts';
const app = express();



app.get("/cards", (req, res) => {
    res.json(getAllCards());
}); 

app.post('/cards', (req,res) => {
    const title = req.body;
    const newCard = createCard(title);

    res.status(201).json(newCard);
});

app.delete('/cards', (req, res) => {
    const id = req.query.id?.toString();
    if (!id) {
        res.sendStatus(404);
        return;
}
    const isDeleted = deleteCard(id);

    if (!isDeleted){
        res.sendStatus(404);
        return;
    }

    res.sendStatus(200);


})

app.listen(3001, () => {
    console.log('Сервер запущен');
});