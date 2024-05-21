import { Link } from "react-router-dom";
import MenuCard from "../../../components/SectionTitle/MenuCard/MenuCard";
import Cover from "../../Sherd/Cover/Cover";

const MenuCategory = ({items,img,title}) => {
    

    return (
        <div >
           {title && <Cover img={img} title={title} /> } 
            <div className=" grid md:grid-cols-2 gap-6 py-16 ">
                {
                    items?.map(item=><MenuCard key={item._id} item={item}/>)
                }
            </div>
            {title && <div className=" card-actions justify-center my-8">
            <Link to={`/order/${title}`}><button className="btn btn-outline  border-0 border-b-4 bg-slate-100 ">Order Now</button></Link>
            </div>}

        </div>
    );
};

export default MenuCategory;