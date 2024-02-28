import React, { useState } from 'react';
import bio from "./bio";

fuction Header() {
    const [currentPage, handlePageChange] = useState("bio");

    const renderPage = () => {
        switch (currentPage) {
            case "bio":
                return <bio />;

                default:
                    return <bio />
        }
    };

    // finish adding pages to renderPage as they are made, 
}

export default header;