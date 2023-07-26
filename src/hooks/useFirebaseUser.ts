/* eslint-disable import/no-anonymous-default-export */
import { onAuthStateChanged, Unsubscribe, User } from "firebase/auth";
import { useState, useEffect } from "react";

export default () => {
  const [firebaseUser, setFirebaseUser] = useState<undefined | null | User>(
    undefined
  );

  useEffect(() => {
    let stale = false;
    let unsubscribe: Unsubscribe = () => {};

    import("@/lib/initFirebase").then((m) => {
      if (stale) {
        return;
      }

      unsubscribe = onAuthStateChanged(m.firebaseAuth, (u) => {
        setFirebaseUser(u);
      });
    });

    return () => {
      unsubscribe();
      stale = true;
    };
  }, []);

  return firebaseUser;
};
