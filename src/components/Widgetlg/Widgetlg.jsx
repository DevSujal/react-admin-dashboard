import "./Wdgetlg.css";
import Widgetlgcontaint from "./Widgetlgcontaint/Widgetlgcontaint";

const Widgetlg = () => {


  return (
    <div className="widgetlg">
      <span className="widgetlgtitle">Latest Transactions</span>
      <table className="widgetlgtable">
        <tbody>
          <tr className="widgetlgtr">
            <th className="widgetlgth">Customer</th>
            <th className="widgetlgth">Dates</th>
            <th className="widgetlgth">Amount</th>
            <th className="widgetlgth">Status</th>
          </tr>
          <Widgetlgcontaint name = "Sujal Nimje" date = "5 Jan 2023" amount = "$122.00" type = "Approved"/>
          <Widgetlgcontaint name = "Sujal Nimje" date = "5 Jan 2023" amount = "$122.00" type = "Declined"/>
          <Widgetlgcontaint name = "Sujal Nimje" date = "5 Jan 2023" amount = "$122.00" type = "Pending"/>
          <Widgetlgcontaint name = "Sujal Nimje" date = "5 Jan 2023" amount = "$122.00" type = "Approved"/>
        </tbody>
      </table>
    </div>
  );
};

export default Widgetlg;
