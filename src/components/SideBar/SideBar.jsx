import "./SideBar.scss"
import { FaRegCalendar } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <h3>Menu</h3>
      </div> */}
      <ul className="sidebar-list">
        <Link to="/preview">
        <li> <span> <IoIosCreate size={27} /> Create</span> <MdOutlineCreate size={25}/></li>
        </Link>
        <li> <span><FaRegCalendar size={25}/> Calender</span></li>
      </ul>
    </div>
  );
}

export default SideBar;
