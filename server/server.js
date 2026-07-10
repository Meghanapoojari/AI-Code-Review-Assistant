import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-code-review-assistant-8btc.onrender.com/api",
});

export const reviewCode = async (code, language) => {
  const response = await API.post("/review", {
    code,
    language,
  });

  return response.data;
};