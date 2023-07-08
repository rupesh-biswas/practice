import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

export default function PhotosList({ album }) {
    const { data, isFetching, error } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotosResults] = useAddPhotoMutation();

    function handleAddPhoto() {
        addPhoto(album);
    }

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />
    } else if (error) {
        content = <div>Error fetching photos...</div>
    } else {
        content = data.map(photo => {
            return <PhotosListItem key={photo.id} photo={photo} />
        })
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold"> Photos In {album.title}</h3>
                <Button loading={addPhotosResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
}