import ImageShow from "./ImageShow";
import "./ImageList.css";


export default function ImageList({ images }) {
    return (
        <div className="image-list">
            {images.map((image) => {
                return <ImageShow key={image.id} src={image.urls.small} alt={image.alt_description} />
            })}
        </div>
    )
}