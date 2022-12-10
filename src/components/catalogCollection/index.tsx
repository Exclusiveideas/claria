import './catalogCollection.css';

const CatalogCollection = ({ activeCollection, changeActiveCollection }: any) => {
    return (
        <div className="collection_container">
            <div className="collection_wrapper">
                <div
                    className={`coll_el ${activeCollection == "women's clothing" && "active_coll"} `}
                    onClick={() => changeActiveCollection("women's clothing")}
                >
                    Women's clothing
                </div>
                <div
                    className={`coll_el ${activeCollection == "men's clothing" && "active_coll"} `}
                    onClick={() => changeActiveCollection("men's clothing")}
                >
                    Men's clothing
                </div>
                <div
                    className={`coll_el ${activeCollection == "clothes" && "active_coll"} `}
                    onClick={() => changeActiveCollection("clothes")}
                >
                    Dual clothing
                </div>
                <div
                    className={`coll_el ${activeCollection == "shoes" && "active_coll"} `}
                    onClick={() => changeActiveCollection("shoes")}
                >
                    Shoes
                </div>
                <div
                    className={`coll_el ${activeCollection == "jewelery" && "active_coll"} `}
                    onClick={() => changeActiveCollection("jewelery")}
                >
                    Jewellery
                </div>
            </div>

        </div>
    )
}

export default CatalogCollection;