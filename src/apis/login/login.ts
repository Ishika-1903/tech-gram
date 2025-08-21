import ApiClient from "..";
import axios from "axios";

export const fetchCampaign = async () => {
  try {
    const response = await ApiClient.get('/api/campaign/latest');
    return response.data;
  } catch (error) {
    console.error('Error fetching campaign image:', error);
    throw error;
  }
};

export const fetchDeals = async () => {
  try {
    const response = await axios.get(
      'https://889dc93edbe2.ngrok-free.app/api/loyalty/deals',
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching campaign dealss:', error);
    throw error;
  }
};