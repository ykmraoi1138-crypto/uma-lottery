import { useEffect, useState } from "react";
import { Character } from "../types";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const endpoint = process.env.MICROCMS_ENDPOINT;
      const apiKey = process.env.MICROCMS_API_KEY;
      const res = await fetch(endpoint, {
        headers: { "X-API-KEY": apiKey },
      });
      const json = await res.json();
      setCharacters(json.contents || []);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return { characters, loading };
}