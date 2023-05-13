import { useState } from "react";

const useSetGroupVolume = () => {
  const [groupVolume, setGroupVolume] = useState(1);
  return [groupVolume, setGroupVolume];
};

export { useSetGroupVolume };
