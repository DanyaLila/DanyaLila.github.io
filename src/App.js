import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sitebar from "./components/Sitebar/Sitebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Stories from "./components/Stories/Stories";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import FindFriends from "./components/FindFriends/FindFriends";
import Recomend from "./components/Recomend/Recomend";
import Video from "./components/Video/Video";
import Market from "./components/Market/Market";
import Donat from "./components/Donat/Donat";
import Setings from "./components/Setings/Setings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wraper">
                <Header/>
                <Sitebar/>
                <Routes>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dialogs' element={<Dialogs />}/>
                    <Route path='/stories' element={<Stories />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/searchFriend' element={<FindFriends />}/>
                    <Route path='/recomend' element={<Recomend />}/>
                    <Route path='/video' element={<Video />}/>
                    <Route path='/marketplace' element={<Market />}/>
                    <Route path='/donat' element={<Donat />}/>
                    <Route path='/setings' element={<Setings />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
