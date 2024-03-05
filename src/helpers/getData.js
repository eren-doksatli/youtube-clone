import axios from "axios";

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "e82d60d14emshac33eedaf2a1be0p18ddb9jsn6b6da6aff6bd",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (path) => {
  try {
    return await axios.get(path, options);
  } catch (err) {
    console.log("hata oluştu");
  }
};
