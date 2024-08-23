// src/app/api/decks/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const decks = await prisma.deck.findMany({
    include: {
      cards: true, // Include cards if needed
    },
  });
  return new Response(JSON.stringify(decks), {
    headers: { 'Content-Type': 'application/json' },
  });
}
