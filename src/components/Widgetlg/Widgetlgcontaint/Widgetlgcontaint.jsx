import "./widgetlgcontaint.css"

const Widgetlgcontaint = (props) => {
    const Button = ({type}) => {
        return <button className={"widgetlgbutton " + type}>{type}</button>
      }
  return (
    <tr className="widgetlgtr">
      <td className="widgetlguser">
        <img
          src="https://imgs.search.brave.com/xrbj0UfW2M5aEustBeBhi7iKLXfe8FBNPZTpj4Q4Wp4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg0L2Q2/L2IyLzg0ZDZiMjU0/NmFiOWYxNzVjZWVk/ZGQ2ZGQ3YzUxZTI5/LmpwZw"
          alt="profile photo"
          className="widgetlgimg"
        />
        <span className="widgetlgname">{props.name}</span>
      </td>
      <td className="widgetlgdata">{props.date}</td>
      <td className="widgetlgamount">{props.amount}</td>
      <td className="widgetlgstatus">
        <Button type = {props.type}/>
      </td>
    </tr>
  );
};

export default Widgetlgcontaint;
