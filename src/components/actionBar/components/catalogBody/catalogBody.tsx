//@ts-nocheck
'use client';
import classNames from '@/shared/lib/classNames';
import classes from './catalogBody.module.scss';
import { useClickAway } from 'react-use';
import { useRef, useState } from 'react';
import useUiActions from '@/store/uiActions';
import CatalogSublist from '@/components/actionBar/components/catalogSublist/catalogSublist';
import CatalogList from '@/components/actionBar/components/catalogList/catalogList';
import { X } from 'lucide-react';

const CatalogBody = ({ catalog }) => {
    const [activeCategoryId, setActiveCategoryId] = useState('');
    const { isOpenCatalog, setOpenCatalog } = useUiActions();
    const ref = useRef();

    useClickAway(ref, () => {
        if (isOpenCatalog) {
            setOpenCatalog(false);
        }
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.catalogBody,
                { [classes._active]: isOpenCatalog },
                []
            )}
        >
            <X
                onClick={() => {
                    setActiveCategoryId('');
                    setOpenCatalog(false);
                }}
                className={classes.catalogBody__close}
            />
            <CatalogList
                catalog={catalog}
                setActiveCategoryId={setActiveCategoryId}
                activeCategoryId={activeCategoryId}
                setOpenCatalog={setOpenCatalog}
            />
            {activeCategoryId && (
                <CatalogSublist
                    list={
                        catalog.find(({ id }) => id === activeCategoryId)
                            .children
                    }
                />
            )}
        </div>
    );
};

export default CatalogBody;
