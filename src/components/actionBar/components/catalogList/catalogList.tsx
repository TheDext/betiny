//@ts-nocheck
import classNames from '@/shared/lib/classNames';
import classes from './catalogList.module.scss';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import useUiActions from '@/store/uiActions';

const CatalogList = () => {
    const data = ['Категория1', 'Категория2'];
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
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default CatalogList;
