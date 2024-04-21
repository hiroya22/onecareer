import "../styles/card.css"

const Card = ({ image }) => {
  return (
    <div>
      <a href="#">
        <div>
          <img src={image} alt="sample" />
          </div>
      </a>
    </div>
  );
};

export default Card;