import "./App.css";
import NavigationBar, { HOME_PATH, LEADER_BOARD_PATH, LOGIN_PATH, NEW_PATH, NOT_FOUND_WILDCARD, QUESTION_PATH, QUESTION_PATH_PARAM } from "./components/nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import NotFound from "./components/note-found";
import LeaderBoard from "./components/leader-board";
import New from "./components/new";
import { useEffect } from "react";
import Question from "./components/question";

function App() {
    
    const location = useLocation();

    useEffect(() => {
        document.body.classList.add('h-full');
        document.body.classList.add('bg-gray-50');
    }, []);

    function isNavigationBarShow() {
        const pathName = location.pathname;
        return [HOME_PATH, LEADER_BOARD_PATH, NEW_PATH].includes(pathName) ||
                pathName.includes(QUESTION_PATH_PARAM)
    }

    return (
        <div className="h-full">
            {
                isNavigationBarShow() &&
                <NavigationBar />
            }

            <Routes>
                <Route exact path={HOME_PATH} element={<Home />} />
                <Route path={QUESTION_PATH} element={<Question />} />
                <Route path={LEADER_BOARD_PATH} element={<LeaderBoard />} />
                <Route path={NEW_PATH} element={<New />} />
                <Route path={LOGIN_PATH} element={<Login />} />

                <Route path={NOT_FOUND_WILDCARD} element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
