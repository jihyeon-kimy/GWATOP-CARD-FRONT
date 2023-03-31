import axios from "axios";

const BASE_URL = "https://poten-back.herokuapp.com";

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const uploadPDF = async (formData: FormData) => {
  return await axios.post(
    `${BASE_URL}/quiz/card/upload/`,
    { formData },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

export const getCardDeckList = async () => {
  return await customAxios.get(`/quiz/card/get/deck_list/`);
};

export const getCardList = async (deck_id: string) => {
  return await customAxios.get(`/quiz/card/${deck_id}/`);
};

export const deleteCardDeck = async (deck_id: string) => {
  return await customAxios.delete(`/quiz/card/delete/${deck_id}/`);
};
