import classes from './catalogButton.module.scss';
import useUiActions from '@/store/uiActions';
import { FC } from 'react';

const CatalogButton: FC = () => {
    const { isOpenCatalog, setOpenCatalog } = useUiActions();
    return (
        <div
            onClick={() => setOpenCatalog(!isOpenCatalog)}
            className={classes.catalogButton}
        >
            <div className={classes.catalogButton__btn}>
                <span></span>
            </div>

            <div className={classes.catalogButton__text}>Каталог</div>
        </div>
    );
};

export default CatalogButton;
