import { Watch } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className=" flex mx-auto" >
        <Watch
  visible={true}
  height="100"
  width="100"
  radius="48"
  color=" #1c7f83"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=" mx-auto"
  />

        </div>
    );
};

export default Loader;