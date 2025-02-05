//@ts-nocheck

import classes from './catalogSublist.module.scss';
import CatalogItem from '@/components/actionBar/components/catalogItem/catalogItem';

const CatalogSublist = ({ list }) => {
    return (
        <ul className={classes.catalogSublist}>
            {list.map((item) => (
                <CatalogItem
                    key={item.id}
                    item={item}
                    childrenlist={item.children}
                />
            ))}
        </ul>
    );
};

export default CatalogSublist;
