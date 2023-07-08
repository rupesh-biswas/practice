import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePannel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

export default function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    function handleClick() {
        removeAlbum(album);
    }

    const header = (
        <>
            <Button className="mr-4" loading={results.isLoading} onClick={handleClick}>
                <GoTrash />
            </Button>
            <h4>{album.title}</h4>
        </>
    );

    return (
        <ExpandablePannel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePannel>
    )
}