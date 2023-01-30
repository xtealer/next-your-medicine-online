/* eslint-disable import/no-anonymous-default-export */
import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";

import { firebaseAuth } from "@/lib/initFirebase";

export default () => {
  const [firebaseUser, setFirebaseUser] = useState<undefined | null | User>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (u) => {
      setFirebaseUser(u);
    });

    return unsubscribe;
  }, []);

  return firebaseUser;
};
