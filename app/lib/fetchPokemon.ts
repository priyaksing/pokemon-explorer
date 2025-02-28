import axios from "axios";

export async function fetchPokemonList(page?: number, limit?: number) {
  try {
    if (limit && page) {
      const offset = (page - 1) * limit;
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );
      return data.results;
    }

    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=1300"
    );
    return { pokemonList: data.results, pokemonCount: data.count };
  } catch (e) {
    alert("Error fetching pokemon list. Please check network connection");
    console.log(e);
    return null;
  }
}

export async function fetchPokemon(id: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.data;
  } catch (e) {
    // alert("Error fetching pokemon. Please check network connection.");
    console.log(e);
    return null;
  }
}
