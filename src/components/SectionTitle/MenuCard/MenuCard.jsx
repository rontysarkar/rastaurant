
const MenuCard = ({item}) => {
    return (
        <div className="flex items-center space-x-4">
            <img style={{
                borderRadius: '0 200px 200px 200px'
            }} className="w-[100px]" src={item.image} alt="" />
            <div>
                <h1 className="uppercase text-xl">{item.name}</h1>
                <p>{item.recipe}</p>
            </div>
            <p className="text-yellow-300">{item.price}</p>
        </div>
    );
};

export default MenuCard;