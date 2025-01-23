'use client';
import CatalogButton from '@/components/actionBar/components/catalogButton/catalogButton';
import CatalogList from '@/components/actionBar/components/catalogList/catalogList';
import classes from './catalog.module.scss';

export const Catalog = () => {
    return (
        <div className={classes.catalog}>
            <CatalogButton />
            <CatalogList />
        </div>
    );
};
