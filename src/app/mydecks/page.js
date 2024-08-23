"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function MyDecks() {
  const { user, isLoaded } = useUser();
  const [decks, setDecks] = useState([]);
  const [filter, setFilter] = useState("CUSTOM");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      fetch("/api/decks")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched decks:", data);
          setDecks(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching decks:", error);
          setIsLoading(false);
        });
    }
  }, [isLoaded]);

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>;
  }

  const filteredDecks = decks.filter(
    (deck) => user && deck.userId === user.id
  );

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          My Decks
        </h1>
        <div className="mb-6 flex justify-center">
          <Link href="/customcard">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
              + Add New Deck
            </button>
          </Link>
        </div>
        {filteredDecks.length === 0 ? (
          <p className="text-center text-gray-600">
            No decks found. Create a new deck to get started!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredDecks.map((deck) => (
              <div
                key={deck.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {deck.title}
                </h2>
                <p className="text-gray-600 mb-4">Type: {deck.type}</p>
                <Link
                  href={`/decks/${deck.id}`}
                  className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out"
                >
                  View Deck
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
