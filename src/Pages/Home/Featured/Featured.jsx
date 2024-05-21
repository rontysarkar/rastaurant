import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Feature.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white ">
            <div className="bg-black bg-opacity-35 pt-10">
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'} />
            <div className="md:flex justify-center items-center py-20 px-36 gap-4  ">
                <img className="w-[600px]" src={featuredImg} alt="" />
                <div  className="space-y-2" >
                    <p>May 20, 2024</p>
                    <h1 className="uppercase">ware can get some ?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis esse nihil eveniet accusantium rerum est et cumque fugit illo aperiam possimus, totam architecto aut hic ipsam nemo culpa nostrum!</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">READ MORE</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Featured;