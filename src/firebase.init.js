import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMiwJW1qzmwScH5_yzMh03yYgHWUlSk8I",
  authDomain: "hike-server.firebaseapp.com",
  projectId: "hike-server",
  storageBucket: "hike-server.appspot.com",
  messagingSenderId: "585207812127",
  appId: "1:585207812127:web:7491ad8efd7a302f98c52a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;