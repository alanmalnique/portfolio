import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { setActivePage } from "@/app/slices/MenuSlice";

import './App.scss';
import Home from "@/pages/Home/Home";

function App() {

    const activePage = useSelector((state: RootState) => state.menu.activePage);
    const dispatch = useDispatch();

    const changePage = (page: string) => {
        dispatch(setActivePage(page));
    }

    return (
        <React.Fragment>
            <Home />
        </React.Fragment>
    );
}

export default App;
