//@ts-nocheck
'use client';
import classes from './catalogButton.module.scss';

const CatalogButton = () => {
    return (
        <div
            onClick={() => console.log('click')}
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
