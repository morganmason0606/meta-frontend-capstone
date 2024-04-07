import foodImage from "../../../assets/food/food4.webp";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={foodImage}
        alt="platter of food"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
}
