import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function TestApi() {
    const { getAccessTokenSilently } = useAuth0();

    async function fetchToken() {
        try {
            const token = await getAccessTokenSilently();
            return token;
        } catch (error) {
            console.error("Could not get token!")
        }
    }
    
    async function testAll() {
        try {
            const token = await fetchToken();
            const response = await axios.get('/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    
    async function testMessages() {
        try {
            const token = await fetchToken();
            const response = await axios.get('/messages', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    async function testApis() {
        await testAll()
        await testMessages()
    }

    return (
        <>
            <button onClick={testApis}>Test api</button>
        </>
    )
}

export default TestApi;
