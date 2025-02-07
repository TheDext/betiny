import CatalogButton from '@/components/actionBar/components/catalogButton/catalogButton';
import CatalogBody from '@/components/actionBar/components/catalogBody/catalogBody';
import classes from './catalog.module.scss';
import { catalogService } from '@/services/catalog.service';

export const Catalog = async () => {
    const { catalog } = await catalogService.get();
    console.log('catalog', catalog);
    return (
        <div className={classes.catalog}>
            <CatalogButton />
            <CatalogBody catalog={catalog} />
        </div>
    );
};
