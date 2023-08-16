import axios from "axios";
import page from "../src/index";
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "38869730-11eaccfd36e9480f0aa153a8d";

export async function fetchImages(query, page) { 
    const searchParams = new URLSearchParams({
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      per_page: 40
  });
      const resp = await axios
      .get(`${BASE_URL}?key=${API_KEY}&q="${query}"&${searchParams.toString()}&page=${page}`);
    return resp;
}