import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div
                style={{
                    marginTop: "5%",
                    display: "flex",
                    justifyContent: "flex-start",
                }}>
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <Outlet />
                </div>
            </div>
            <div className="content"></div>
        </div>
    );
};

export default MainLayout;
