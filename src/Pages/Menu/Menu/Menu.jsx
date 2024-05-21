import { Helmet } from "react-helmet-async";
import img from '../../../assets/menu/banner3.jpg'
import Cover from "../../Sherd/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menuItem] = useMenu()
    const salad = menuItem.filter(d => d.category === 'salad')
    const offered = menuItem.filter(d => d.category === 'offered')
    const soup = menuItem.filter(d => d.category === 'soup')
    const pizza = menuItem.filter(d => d.category === 'pizza')
    const dessert = menuItem.filter(d => d.category === 'dessert')
    return (
        <div >
            <Helmet>
                <title>Cafe | Menu</title>
            </Helmet>
            <Cover img={img} title='our menu' details={'Would you like to try a dish?'}/>
            <MenuCategory/>
            <SectionTitle subHeading="Don't miss " heading={"TODAY'S OFFER"} />
            <MenuCategory  items={offered} />
            <MenuCategory title={'dessert'} img={dessertImg} items={dessert} />
            <MenuCategory title={'pizza'} img={pizzaImg} items={pizza} />
            <MenuCategory title={'salad'} img={saladImg} items={salad} />
            <MenuCategory title={'soup'} img={soupImg} items={soup} />

        </div>
    );
};

export default Menu;