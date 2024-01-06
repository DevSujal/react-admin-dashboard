import "./FeaturedInfo.css";
import FeaturedItem from "./Featureditem/FeaturedItem";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <FeaturedItem money="$2,424" rate="-11.43" title = "Revenue"/>
      <FeaturedItem money="$2,424" rate="+11.43" title = "Sales"/>
      <FeaturedItem money="$2,424" rate="-11.43" title = "Cost"/>
    </div>
  );
};

export default FeaturedInfo;
