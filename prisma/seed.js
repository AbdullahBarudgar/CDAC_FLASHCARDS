// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const decks = [
        {
            title: "Huzaif",
            type: "CUSTOM",
            cards: [
                { front: 'What is React?', back: 'A JavaScript library for building user interfaces' },
                { front: 'Who developed React?', back: 'Facebook' },
                { front: 'What is the latest version of React?', back: '17' },
            ],
        }
    ];

    for (const deck of decks) {
        await prisma.deck.create({
            data: {
                title: deck.title,
                type: deck.type,
                cards: {
                    create: deck.cards.map(card => ({
                        front: card.front,
                        back: card.back,
                    })),
                },
            },
        });
    }
    console.log('Decks and cards have been inserted.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
