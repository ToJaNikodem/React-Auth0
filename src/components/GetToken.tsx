import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function GetToken() {
   const { getAccessTokenSilently } = useAuth0();
   const [token, setToken] = useState('');

   async function fetchToken() {
      try {
         const token = await getAccessTokenSilently();
         setToken(token);
      } catch (error) {
         console.error("Could not get token!")
      }
   }

   return (
      <>
         <button onClick={fetchToken}>Get Access Token</button>
         <p>{token}</p>
      </>
   )
}

export default GetToken;
