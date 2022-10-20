import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./Rating.module.scss";
import classNames from "classnames";

const ratingInicialValue = (0);

export default function Rating(props: any) {

  const [rating, setRating] = useState(ratingInicialValue);
  
  useEffect(() => {
    props.handleRating(rating);
  }, [rating]);

  const teamsSelected = props.content;

  useEffect(() => {
    if (rating !== 0 && teamsSelected.length == 0){
      setRating(ratingInicialValue);
    }
  },[teamsSelected]);

  const [hover, setHover] = useState(0);

  return (

    <div className={style.team__data}>
      <div className={style.star__rating}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={classNames({
                [index <= (hover || rating) ? style.on : style.off]: true,
                [style.button]: true
              })}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(0)}
            >
              <span className={style.star}><FaStar /></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}