import { useEffect, useState } from "react";

const useDidHydrate = () => {
  const [didHydrate, setDidHydrate] = useState(false);

  useEffect(() => {
    setDidHydrate(true);
  }, []);

  return { didHydrate };
};

export default useDidHydrate;
