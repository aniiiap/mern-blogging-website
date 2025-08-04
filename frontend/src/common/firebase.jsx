import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCAlZ39uoBTYRNsxJikGykidoHjUTmHKkE",
  authDomain: "react-js-blog-website-edaf6.firebaseapp.com",
  projectId: "react-js-blog-website-edaf6",
  storageBucket: "react-js-blog-website-edaf6.appspot.com",
  messagingSenderId: "35770653423",
  appId: "1:35770653423:web:73bcd751b97db1caf8591a"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;

}