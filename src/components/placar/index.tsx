import style from "./Placar.module.scss";

export default function Placar(props: any) {

  const firstTeam = props.pointsfirst;
  const secondTeam = props.pointssecond;

  const sumPoints = Math.abs(firstTeam - secondTeam);

  console.log(sumPoints);

  console.log(Math.floor(Math.random() * (3 - 0 + 1)) + 0);

  //  function randomNumberInRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  return (
    <div>
      {firstTeam}...{secondTeam}
    </div>
  );
}