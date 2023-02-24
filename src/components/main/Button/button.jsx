import React from "react";

function Button ({content, onClick, link}) {
    return (
        <button onClick={onClick}  className="button">
            {content}
        </button>
    );
}

export default Button;
