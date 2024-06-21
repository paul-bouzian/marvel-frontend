import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ProfilePicture = ({ profilePicture, setProfilePicture }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setProfilePicture(acceptedFiles[0]);
    },
    [setProfilePicture],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Image de profil
      </label>
      <div
        className={`mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5 ${
          isDragActive ? "border-red-600" : ""
        }`}
        {...getRootProps()}
      >
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H17a2 2 0 00-2 2zm10 32V16m-6 16h12"
            ></path>
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
            >
              {profilePicture ? (
                <span>{profilePicture.name}</span>
              ) : (
                <span>Téléchargez une image</span>
              )}
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                {...getInputProps()}
              />
            </label>
            <p className="pl-1">ou glissez et déposez</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
