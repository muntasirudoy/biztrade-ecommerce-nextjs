import React from "react";
import { CSSProperties } from "react";

interface ArrowProps {
    onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    const style: CSSProperties = {
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
    };

    return (
        <div style={style} onClick={onClick}>
            ▶
        </div>
    );
};

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    const style: CSSProperties = {
        position: "absolute",
        left: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
    };

    return (
        <div style={style} onClick={onClick}>
            ◀
        </div>
    );
};
