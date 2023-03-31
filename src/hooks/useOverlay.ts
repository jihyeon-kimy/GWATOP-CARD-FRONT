import { useState } from "react";

const useOverlay = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const openOverlay = () => setOverlayVisible(true);
  const closeOverlay = () => setOverlayVisible(false);

  return { overlayVisible, openOverlay, closeOverlay };
};

export default useOverlay;
