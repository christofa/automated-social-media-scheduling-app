import "./Preview.scss";
import Navbar from "../../components/NavBar/Nav";

function Preview() {
  return (
    <div className="PreviewPage">
      <Navbar />
      <div className="container">
        <div className="cover1">
          <h2>Post details</h2>
          <p>
            {" "}
            <span>
              <input type="radio" />
            </span>
            Customise post for Facebook and Instagram
          </p>
          <div>
            <p>Text</p>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="btn-sec">
            <div>
              <p>
                <span>
                  <input type="radio" />
                </span>
                Boost
              </p>
            </div>
            <div>
              <button>Cancel</button>
              <button>Finish later</button>
              <button>Publish</button>
            </div>
          </div>
        </div>
        <div className="cover2">
          <h2>Logo</h2>
          <div>
            <input type="file" accept="image/*" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
