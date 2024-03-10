import {Routes, Route} from 'react-router-dom';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import {Home} from './root/pages';
import  RootLayout from './root/RootLayout';
import AuthLayout from './auth/AuthLayout';
const App = () => {
    return (
        <main className = 'flex h-screen'>
            <Routes>
            <Route element = {<AuthLayout/>}>
                    <Route path = '/sign-up' element = {<SignUpForm/>}/>
                    <Route path = '/sign-in' element = {<SignInForm/>}/>
                    <Route element = {<RootLayout/>}>
                        <Route index element = {<Home/>}/>
                    </Route>
            </Route>
            </Routes>
        </main>
    )
}
export default App;
