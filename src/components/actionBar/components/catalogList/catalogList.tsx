//@ts-nocheck
import CatalogItem from '@/components/actionBar/components/catalogItem/catalogItem';
import { X } from 'lucide-react';
import classes from '@/components/actionBar/components/catalogList/catalogList.module.scss';
import CatalogSublist from '@/components/actionBar/components/catalogSublist/catalogSublist';

const CatalogList = ({
    catalog,
    setActiveCategoryId,
    activeCategoryId,
    setOpenCatalog,
}) => {
    return (
        <ul className={classes.catalogList}>
            <X
                onClick={() => {
                    setActiveCategoryId('');
                    setOpenCatalog(false);
                }}
                className={classes.catalogList__close}
            />
            {catalog.map((item, index) => (
                <CatalogItem
                    key={index}
                    item={item}
                    setActiveCategoryId={setActiveCategoryId}
                    activeCategoryId={activeCategoryId}
                />
            ))}
        </ul>
    );
};

export default CatalogList;
