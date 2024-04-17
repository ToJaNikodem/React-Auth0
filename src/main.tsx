import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios';

axios.interceptors.request.use(
    config => {
        // You can modify the request config here (e.g., adding headers)
        console.log('Request sent:', config);
        return config;
    },
    error => {
        // Handle request error
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
axios.interceptors.response.use(
    response => {
        // You can modify the response data here
        console.log('Response received:', response);
        return response;
    },
    error => {
        // Handle response error
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

axios.defaults.baseURL = 'http://localhost:5062/api/';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-cy4goo12hi3sqc3t.eu.auth0.com"
            clientId="AbNrvLrrwLwRtjyCZBl2M1OpiidcEk00"
            authorizationParams={{
                audience: "http://localhost:5062/",
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>
)
