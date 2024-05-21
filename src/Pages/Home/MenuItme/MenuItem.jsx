import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../../components/SectionTitle/MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";

const MenuItem = () => {
    const  [menuItem] = useMenu()
    const popular = menuItem.filter(d => d.category === 'popular')
    
    return (
        <div className="my-20 space-y-10">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'} />
            <div className=" grid md:grid-cols-2 gap-6 ">
                {
                    popular.map(item=><MenuCard key={item._id} item={item}/>)
                }
            </div>
            <div className="mx-auto  w-32">
             <button className="btn btn-outline  border-0 border-b-4 ">VIEW MORE</button>
            </div>

        </div>
    );
};

export default MenuItem;