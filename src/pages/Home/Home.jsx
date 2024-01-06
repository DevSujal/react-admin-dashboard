import Chart from "../../components/Chart/Chart"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import "./Home.css"
import {data} from '../../components/Chart/data'
import Widgetsm from "../../components/Widgetsm/Widgetsm"
import Widgetlg from "../../components/Widgetlg/Widgetlg"
const Home = () => {
 
  return (
    <div className="home">
     <FeaturedInfo />
     <Chart title = "User Analytics" data = {data} datakey = "Active User" isgreeded = {true}/>
     <div className="homewidgets">
      <Widgetsm />
      <Widgetlg />
     </div>
    </div>
  )
}

export default Home
