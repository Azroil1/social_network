import {Routes,Route} from "react-router-dom";
// @ts-ignore
import Header from "./Componets/Header/Header";
// @ts-ignore
import Content from "./Componets/Profile/Content";
// @ts-ignore
import Navbar from "./Componets/Navbar/Navbar";
import './App.css'
// @ts-ignore
import Dialog from "./Componets/Dialogs/Dialog"

function App () {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/dialog" element={<Dialog/>}/>
                <Route path="/profile" element={<Content/>}/>
            </Routes>
        </div>
    )
}
export default App;