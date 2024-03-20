import Main from "../../components/Main/Main"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"

import "./Home.scss"

const Home = () => {
  return (
    <div>

      <Navbar/>
      
      <div className="main-content">

        <Sidebar/>

        <Main/>


      </div>


    </div>
  )
}

export default Home