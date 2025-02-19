import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";

interface GeneralStoreFunctions {
  setEmail: (email: string) => void;
}

interface GeneralStoreState extends GeneralStoreFunctions {
  email: string | null;
  units: number;
}

const useGeneralStore = create<GeneralStoreState>()(
  devtools(
    persist(
      (set) => ({
        email: null,
        units: 1,
        setEmail: (email) => {
          // * Update value
          set((state) => {
            return { email };
          });
        },
      }),
      {
        name: "general-storage",
      }
    )
  )
);

export default useGeneralStore;
