import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";


export default function App() {
    const [images, setImages] = useState([]);

    async function handleSubmit(term) {
        const results = await searchImages(term);
        setImages(results);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}