// src/app/api/decks/route.js

import { PrismaClient } from "@prisma/client";
import { getAuth } from "@clerk/nextjs/server";
const prisma = new PrismaClient();

export async function GET(request) {
  const { userId } = getAuth(request);

  let decks;

  try {
    if (userId) {
      decks = await prisma.deck.findMany({
        where: {
          OR: [{ userId: userId }, { type: "PREBUILT" }],
        },
        include: {
          cards: true,
        },
      });
    } else {
      decks = await prisma.deck.findMany({
        where: {
          type: "PREBUILT",
        },
        include: {
          cards: true,
        },
      });
    }

    return new Response(JSON.stringify(decks), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return new Response(JSON.stringify({ error: "Error fetching decks" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
