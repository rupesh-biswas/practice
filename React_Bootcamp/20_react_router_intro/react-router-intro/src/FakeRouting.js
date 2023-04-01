import { useState } from "react";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

function FakeRouting(props) {
    const [page, setPage] = useState("about");


    function changePage(newPage) {
        setPage(newPage);
    }

    function renderPage() {
        if (page === "about") return <About />;
        else if (page === "dog") return <Dog name="pug" />;
        else if (page === "contact") return <Contact />;
    }

    return (
        <div className='App'>
            <nav className='App-nav'>
                <a onClick={() => changePage("about")}><button>About</button></a>
                <a onClick={() => changePage("dog")}><button>Dog</button></a>
                <a onClick={() => changePage("contact")}><button>Contact</button></a>
            </nav>
            <div>{renderPage()}</div>
        </div>
    )
}

export default FakeRouting;