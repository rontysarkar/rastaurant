import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import MenuItem from "../MenuItme/MenuItem";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <MenuItem/>
            <Featured/>
            <TestiMonials/>
        </div>
    );
};

export default Home;