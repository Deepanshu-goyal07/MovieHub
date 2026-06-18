import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("selectedTheme") || "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("selectedTheme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                checked={theme === "light"}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                {/* Sun Icon */}
                <svg
                    className="sun_icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <title>Sun</title>
                    <path fill="#ffe400" d="M16 9c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM16 21c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zM16 6c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.448 0.448 1 1 1zM16 26c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.448-0.448-1-1-1zM23.071 8.929c0.391 0.391 1.024 0.391 1.414 0l1.414-1.414c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.024 0 1.414zM6.101 25.899c0.391 0.391 1.024 0.391 1.414 0l1.414-1.414c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.024 0 1.414zM26 16c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM2 16c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM23.071 23.071c-0.391 0.391-0.391 1.024 0 1.414l1.414 1.414c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.414-1.414c-0.391-0.391-1.024-0.391-1.414 0zM6.101 6.101c-0.391 0.391-0.391 1.024 0 1.414l1.414 1.414c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.414-1.414c-0.391-0.391-1.024-0.391-1.414 0z" />
                </svg>
                {/* Moon Icon */}
                <svg
                    className="moon_icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <title>Moon</title>
                    <path fill="#a0a0a0" d="M22.502 22.01c-5.83 0-10.574-4.744-10.574-10.573 0-2.825 1.118-5.393 2.934-7.299-6.39 0.722-11.362 6.158-11.362 12.724 0 7.082 5.74 12.822 12.82 12.822 6.567 0 12.001-4.972 12.723-11.362-1.906 1.816-4.474 2.934-7.299 2.934zM16.32 27.684c-5.967 0-10.82-4.854-10.82-10.82 0-5.111 3.553-9.4 8.358-10.542-1.127 1.637-1.79 3.623-1.79 5.766 0 5.679 4.622 10.3 10.3 10.3 2.143 0 4.129-0.663 5.767-1.79-1.142 4.805-5.431 8.358-10.542 8.358z" />
                </svg>
            </label>
        </div>
    );
};

export default DarkMode;
