import React from "react";

function Navigation(props) {
    const tabs = ["bio", "contact", "portfolio", "resume"];
    return (
        <div className="tabs is-centered">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li className={
                        proprs.currentPage === tab ? "nav-item active" ; "nav-item"
                    }
                    key={tab}
                >
                ))}
            </ul>
        </div>
    )
}
// omg what are all these brakets ugghh, FIX