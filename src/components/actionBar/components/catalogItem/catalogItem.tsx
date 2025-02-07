//@ts-nocheck
import classes from './catalogItem.module.scss';
import Link from 'next/link';

const CatalogItem = ({ item, setActiveCategoryId, childrenlist }) => {
    const mouseEnter = () => {
        if (!item.parentId) {
            setActiveCategoryId(item.id);
        }
    };

    return (
        <li className={classes.catalogItem}>
            <Link className={classes.catalogItem__name} href={item.slug}>
                <div
                    className={classes.catalogItem__name}
                    onMouseEnter={mouseEnter}
                >
                    {item.name}
                </div>
            </Link>

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
