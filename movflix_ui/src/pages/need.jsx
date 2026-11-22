import { Link } from "react-router-dom"

export function Header(){
    return (
        <div className="header">
            <div>
                <img src="movies.jpeg" alt="" />
                <p>movflix</p>
            </div>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/rules">Rules</a> */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Footer(){
    return(
        <div className="footer">
            <p>copyright @ movflix {2020 + 6}</p>
        </div>
    )
}
