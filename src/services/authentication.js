const BASE_URL = 'https://one00x-react-backend.onrender.com/'

export const login = async (email, password) => {
    try{
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          }); 

          const data = await response.json(); 
          console.log(data); 
          return data; 

    } catch (error) {
        
        console.log(error); 
        return error;
    }
}; 