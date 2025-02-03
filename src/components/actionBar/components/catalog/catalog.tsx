import CatalogButton from '@/components/actionBar/components/catalogButton/catalogButton';
import CatalogList from '@/components/actionBar/components/catalogList/catalogList';
import classes from './catalog.module.scss';
import { catalogService } from '@/services/catalog.service';

export const Catalog = async () => {
    const { catalog } = await catalogService.get();

    return (
        <div className={classes.catalog}>
            <CatalogButton />
            <CatalogList catalog={catalog} />
        </div>
    );
};
