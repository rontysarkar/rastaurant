
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto text-center w-3/12 space-y-4">
            <p className="text-yellow-500 ">---{subHeading}---</p>
            <h1 className="uppercase text-4xl border-y-2 py-2">{heading}</h1>
            
            
        </div>
    );
};

export default SectionTitle;