import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTabs = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                item.map(salad => <FoodCard key={salad._id} items={salad} />)
            }
        </div>
    );
};

export default OrderTabs;