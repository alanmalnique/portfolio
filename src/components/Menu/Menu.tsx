import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setActivePage } from "@/app/slices/MenuSlice";

import './Menu.scss';

function Menu(): React.JSX.Element {

    const activePage = useSelector((state: RootState) => state.menu.activePage);

    const dispatch = useDispatch();

    const changePage = (page: string) => {
        dispatch(setActivePage(page));
    }

    return (
        <section className={'container'}>
            <menu>
                <li className={activePage === 'home' ? 'active' : ''} onClick={() => {
                    changePage('home')
                }}>Hi! I'm Alan :)
                </li>
                <li className={activePage === 'about' ? 'active' : ''} onClick={() => {
                    changePage('about')
                }}>About me
                </li>
                <li className={activePage === 'skills' ? 'active' : ''} onClick={() => {
                    changePage('skills')
                }}>My Skills
                </li>
                <li className={activePage === 'contact' ? 'active' : ''} onClick={() => {
                    changePage('contact')
                }}>Let's talk
                </li>
            </menu>
        </section>
    );
}

export default Menu;