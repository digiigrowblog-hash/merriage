import axios from "axios";

const API_BASE_URL = "/api/auth";

export const getMembershipDetails = async (userId: string) => {
   try {
     const response = await axios.get(`${API_BASE_URL}/membership?userId=${userId}`,{
         withCredentials: true,
     })
    return response.data;
   } catch (error) {
     console.error("Error fetching membership details:", error);
    
   }
}

export const createMembership = async (userId: string, planId: number) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/membership`, {
            userId,
            planId,
        }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error creating membership:", error);
        throw error;
    }
}