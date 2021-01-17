import {
  ImageUploadButton,
  RefreshButton,
  ImageGrid
} from "../components"

export const HomePage = function () {
  return (
    <div className="HomePage">
      <ImageUploadButton />
      <RefreshButton />
      <ImageGrid />
    </div>
  );
}

