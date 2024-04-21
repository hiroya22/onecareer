import PHOTO1 from "./lecture.jpg"; 

const Card = () => {
  return (
    <li class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href="#">
        <div class="mt-3">
            <img src={PHOTO1} class="w-full aspect-square object-cover rounded-2xl"
            alt="sample"></img>
        </div>
      </a>
    </li>
  );
};

export default Card;