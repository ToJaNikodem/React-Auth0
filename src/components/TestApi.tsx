import axios from "axios";
import { useState } from "react";

function TestApi() {
   const [token] = useState('');

   async function TestAll() {
      try {
         const response = await axios.get('http://localhost:5062/api/all', {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         })
         console.log(response.data)
      } catch (error) {
         console.error(error)
      }
   }

   async function TestMessages() {
      try {
         const response = await axios.get('http://localhost:5062/api/messages', {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         })
         console.log(response.data)
      } catch (error) {
         console.error(error)
      }
   }

   async function TestApis() {
      TestAll()
      TestMessages()
   }

   return (
      <>
         <button onClick={TestApis}>Test api</button>
      </>
   )
}

export default TestApi;
