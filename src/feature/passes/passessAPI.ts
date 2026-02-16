import axios from "axios";

const API_BASE_URL_CREATE = "/api/festival-pass/create";
const API_BASE_URL_USE_ID = "/api/festival-pass/use";
const API_BASE_URL_MY = "/api/festival-pass/my";



// GET MY WEEKLY PASS
export const getMyFestivalPassApi = async () => {
  const res = await axios.get(`${API_BASE_URL_MY}`, {
    withCredentials: true,
  });
  return res.data;
};


// CREATE PASS (purchase or free)
export const createFestivalPassApi = async (payload?: { isFree?: boolean }) => {
  const res = await axios.post(`${API_BASE_URL_CREATE}`, payload, {
    withCredentials: true,
  });
  return res.data;
};


// USE SCAN PASS
export const useFestivalPassApi = async (id: number) => {
  const res = await axios.patch(`${API_BASE_URL_USE_ID}/${id}`, {
    withCredentials: true,
  });
  return res.data;
};
