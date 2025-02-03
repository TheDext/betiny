//@ts-nocheck

const CatalogItem = ({ item }) => {
    return (
        <li>
            {item.name}
            {item?.children && (
                <ul>
                    <CatalogItem item={item} />
                </ul>
            )}
        </li>
    );
};

export default CatalogItem;
