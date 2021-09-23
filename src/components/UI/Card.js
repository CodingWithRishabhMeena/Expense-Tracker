import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; //space after card is necessary
  return <div className={classes}>{props.children}</div>;
}
export default Card;
