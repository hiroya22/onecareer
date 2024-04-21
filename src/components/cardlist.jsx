import Card from "./card";

const CardList = () => {
  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <Card />
    </ul>
  );
};

export default CardList;