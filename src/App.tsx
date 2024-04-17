import LoginButton from "./components/LoginButton"
import Profile from "./components/Profile"
import LogoutButton from "./components/LogoutButton"
import GetToken from "./components/GetToken"
import TestApi from "./components/TestApi"

function App() {
    return (
        <>
            <p>Auth0</p>
            <LoginButton></LoginButton>
            <LogoutButton></LogoutButton>
            <GetToken></GetToken>
            <Profile></Profile>
            <TestApi></TestApi>
        </>
    )
}

export default App
