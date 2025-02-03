//@ts-nocheck
'use client';
import classNames from '@/shared/lib/classNames';
import classes from './catalogList.module.scss';
import { useClickAway } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import useUiActions from '@/store/uiActions';
import CatalogItem from '@/components/actionBar/components/catalogItem/catalogItem';

const CatalogList = ({ catalog }) => {
    const [activeCategoryId, setActiveCategoryId] = useState('');
    console.log('catalog', catalog);
    const { isOpenCatalog, setOpenCatalog } = useUiActions();
    const ref = useRef();

    useClickAway(ref, () => {
        if (isOpenCatalog) {
            setOpenCatalog(!isOpenCatalog);
        }
    });

    return (
        <ul
            ref={ref}
            className={classNames(
                classes.catalogList,
                { [classes._active]: isOpenCatalog },
                []
            )}
        >
            {catalog.map((item, index) => (
                <CatalogItem key={index} item={item} />
            ))}
        </ul>

        // <ul
        //     ref={ref}
        //     className={classNames(
        //         classes.catalogList,
        //         { [classes._active]: isOpenCatalog },
        //         []
        //     )}
        // >
        //     <li>Catalog</li>
        //     {data.map(({ id, name, categories }) => (
        //         <li
        //             onMouseEnter={() => setActiveCategoryId(id)}
        //             onMouseLeave={() => setActiveCategoryId('')}
        //             key={id}
        //         >
        //             {name}
        //         </li>
        //     ))}
        // </ul>
    );
};

export default CatalogList;
