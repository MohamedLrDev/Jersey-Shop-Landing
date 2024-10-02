interface Info {
    imageSrc: string;
    title: string;
}

const CardComp = ({ imageSrc, title }: Info) => {
    return (
        <div className="card glass text-[#1D3557] mx-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl pt-4 my-6 md:mx-2 lg:mx-8">
            <figure className="px-4">
                <img
                    src={imageSrc}
                    alt={title}
                    className="xl:w-[200px] max-w-full h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105" // Ensures the full logo is visible
                />
            </figure>
            <div className="card-body text-center"> {/* Center text in the card body */}
                <h2 className="card-title text-lg xl:text-xl md:text-xl lg:text-base line-clamp-1">{title}</h2>
                {/* <p className="text-sm md:text-base lg:text-base line-clamp-1">{description}</p> */}
            </div>
        </div>
    );
};

export default CardComp;
