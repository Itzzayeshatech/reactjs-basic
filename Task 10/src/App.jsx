import React, { useState, useEffect } from "react";

function App() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontFamily: "Arial, sans-serif",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
        }}>
            <h1>Window Size</h1>
            <div style={{
                padding: "20px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}>
                <p>Width: <strong>{windowSize.width}</strong>px</p>
                <p>Height: <strong>{windowSize.height}</strong>px</p>
            </div>
            <p style={{
                marginTop: "20px",
                fontSize: "14px",
                opacity: "0.8",
            }}>
                Try resizing your browser window!
            </p>
        </div>
    );
}

export default App;
