import { Button } from "flowbite-react";
import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../services/firebase";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false); // Track authentication state

  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    // Prevent additional requests if already authenticating
    if (isAuthenticating) return;

    setIsAuthenticating(true); // Set authenticating state to true
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsfromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsfromGoogle);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsfromGoogle.user.displayName,
          email: resultsfromGoogle.user.email,
          googlePhotoUrl: resultsfromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        // dispatch your action here if needed
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAuthenticating(false); // Re-enable button after completion
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
      disabled={isAuthenticating} // Disable button while authenticating
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Sign in with Google
    </Button>
  );
};

export default OAuth;
