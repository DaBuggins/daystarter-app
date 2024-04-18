import Sunrise from "./Sunrise";

export default function Weather() {
  return (
    <>
      <Sunrise />
      <p>      <iframe
        src="https://wttr.in/London?format=2"
        height="44px"
        width="300px"
        style={{ borderWidth: 0, paddingLeft: 50 }}
      ></iframe> </p>
    </>
  );
}
