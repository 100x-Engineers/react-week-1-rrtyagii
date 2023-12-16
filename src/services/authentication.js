const BASE_URL = 'https://one00x-react-backend.onrender.com'

export const login = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        console.log("response in authentication.js", response); 
        return response;
    } catch (error) {
        console.log(error); 
        throw error;
    }
};
