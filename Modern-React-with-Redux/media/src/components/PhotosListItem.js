import { GoSync, GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

export default function PhotosListItem({ photo }) {
    const [removePhoto, results] = useRemovePhotoMutation();

    function handleRemovePhoto() {
        removePhoto(photo);
    }

    return (
        <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
            <img className="h-20 w-20" src={photo.url} alt={photo.id} loading="lazy" />
            <div className="
            absolute
             inset-0 
             flex 
             items-center 
             justify-center 
             hover:bg-gray-200 
             hover:opacity-80
             group" >
                {results.isLoading
                    ? <GoSync className="text-3xl animate-spin" />
                    : <GoTrash className="text-3xl opacity-0 group-hover:opacity-80" />
                }
            </div>
        </div>
    );
}