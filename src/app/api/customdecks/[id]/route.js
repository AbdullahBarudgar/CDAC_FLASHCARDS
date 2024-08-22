// src/app/api/decks/[id]/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;
  const deck = await prisma.deck.findUnique({
    where: { id },
    include: { cards: true }, // Include cards in the response
  });

  if (!deck) {
    return new Response('Deck not found', { status: 404 });
  }

  return new Response(JSON.stringify(deck), {
    headers: { 'Content-Type': 'application/json' },
  });
}
