import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./FeaturedItem.css";

const FeaturedItem = (props) => {
  return (
    <div className="featureditem">
      <span className="featuredtitle">{props.title}</span>
      <div className="featuredmoneycontainer">
        <span className="featuredmoney">{props.money}</span>
        <span className="featuredmoneyrate">
          {props.rate} {props.rate.includes("-") ?<ArrowDownward className="featuredicon negative"/> : <ArrowUpward className="featuredicon"/>}
        </span>
      </div>
      <span className="featuredsub">Compared to last month</span>
    </div>
  );
};

export default FeaturedItem;
