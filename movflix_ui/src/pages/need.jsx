export function Header(){
    return (
        <div className="header">
            <div>
                <img src="movies.jpeg" alt="" />
                <p>movflix</p>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
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
