import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const PhotoGalleryComponent =
  systemSettings.photoGallery.status &&
  (systemSettings.photoGallery.template == 1
    ? lazy(() => import("./PhotoGalleryT1"))
    : systemSettings.photoGallery.template == 2 &&
      lazy(() => import("./PhotoGalleryT2")));
const PhotoGallery = () => {
  return (
    PhotoGalleryComponent && (
      <div id="gallery">
        <PhotoGalleryComponent />
      </div>
    )
  );
};

export default PhotoGallery;
