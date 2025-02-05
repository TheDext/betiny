//@ts-nocheck
const CatalogItem = ({ item, setActiveCategoryId, childrenlist }) => {
    return (
        <li onClick={() => !item.parentId && setActiveCategoryId(item.id)}>
            <div>{item.name}</div>

            {childrenlist && (
                <ul>
                    {childrenlist.map((item, index) => (
                        <CatalogItem key={index} item={item} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CatalogItem;
