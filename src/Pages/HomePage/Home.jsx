import NavBar from "../../components/NavBar/Nav";
import SideBar from "../../components/SideBar/SideBar";
import Calender from "../../components/Calender/Calender";
import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="cover">
        <div className="side">
          <SideBar />
        </div>
        <div className="calender">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default Home;
