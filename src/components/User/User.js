import React, {useContext} from "react";
import { UserContext } from "../../contexts/userContext";
import sqrl from "../../images/SqueakerIcon.png";
import "./User.css";
import { Squeak } from "../Squeak/Squeak";
import { NewSqueak } from "../NewSqueak/NewSqueak";
import { GetSqueaks } from "../../queries/getSqueaks";

//import Navbar from "../Navigation/Navbar";

export const User = ({ isAdminTabClicked }) => {
  const [user] = useContext(UserContext);
  // const { username, id, isAdmin } = user;
  const { loading, error, data } = GetSqueaks();
  // const [userData, setUserData] = useState()

  // useEffect(()=> {
  //   const getUserData = async() => {
  //     const result = await user
  //     await setUserData("")
  //   }
  //   getUserData()
  // },[user])
  
  // console.log(userData);

  if (error) return <p>Error : {error.message}</p>;
  if (loading) return <p>Loading...</p>;
  const displaySqueaks = data.allSqueaks.map((squeak) => {
    return (
      <Squeak
        id={squeak.id}
        content={squeak.content}
        key={squeak.id}
        isAdminTabClicked={isAdminTabClicked}
        data={data}
      />
    );
  });

  return (
    <main>
      {/* {isAdmin && <Navbar />} */}
      <header className="row center">
        <h1>SQUEAKR</h1>
        <div className="main-image-container">
          <img src={sqrl} alt="alt text" />
        </div>
      </header>

      <NewSqueak />
      <button>💬</button>
      <section className="main-content-squeaks column center">
        {displaySqueaks}
      </section>
    </main>
  );
};
