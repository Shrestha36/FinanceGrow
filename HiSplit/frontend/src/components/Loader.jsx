import {
  LoaderOverlay,
  LoaderBox,
  Spinner,
  LoaderText,
} from "../styles/loader.style";

function Loader({ text = "Loading…" }) {
  return (
    <LoaderOverlay>
      <LoaderBox>
        <Spinner />
        <LoaderText>{text}</LoaderText>
      </LoaderBox>
    </LoaderOverlay>
  );
}

export default Loader;
