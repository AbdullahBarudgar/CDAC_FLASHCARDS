import { PrismaClient } from "@prisma/client";
import { getAuth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const decks = await prisma.deck.findMany({
      where: {
        userId: userId,
      },
      include: {
        cards: true,
      },
    });

    console.log("Fetched decks:", decks);

    return new Response(JSON.stringify(decks), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/userdecks:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  const { title, type, cards } = await request.json();

  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const newDeck = await prisma.deck.create({
      data: {
        title,
        type: type || "CUSTOM",
        userId,
        cards: {
          create: cards.map((card) => ({
            front: card.front,
            back: card.back,
          })),
        },
      },
      include: {
        cards: true,
      },
    });

    return new Response(JSON.stringify(newDeck), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating deck:", error);
    return new Response(JSON.stringify({ error: "Error creating deck" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}