import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    function handleAddAlbum() {
        addAlbum(user);
    }

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />;
    } else if (error) {
        content = <div>Error Loading Albums</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album} />;
        })
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}