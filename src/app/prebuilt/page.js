"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrebuiltDecks() {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/decks")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched decks:", data);
        // Assuming prebuilt decks are those without a `userId` or with a specific `type`
        const prebuiltDecks = data.filter((deck) => !deck.userId || deck.type === "PREBUILT");
        setDecks(prebuiltDecks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching decks:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Prebuilt Decks
        </h1>
        {decks.length === 0 ? (
          <p className="text-center text-gray-600">
            No prebuilt decks found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
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
