import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
        <>
        <container>
        <hearder> 
          <div><img src="./planet.png" width="40px"/></div>
          <h1>Space Traveler's Hub</h1>
        <nav>
        <ul>
          <li>
            <Link to="/">Rocket</Link>
          </li>
          <li>
            <Link to="/mission">Mission</Link>
          </li>
          <li>
            <Link to="/profile">MyProfile</Link>
          </li>
        </ul>
      </nav>
      </hearder>
      </container>
<hr></hr>
      <Outlet />
    </>
  )
};

export default Layout;