import classes from './actionsBar.module.scss';
import { Search } from '@/components/actionBar/components/search';
import { Actions } from '@/components/actionBar/components/actions';
import { Catalog } from '@/components/actionBar/components/catalog';

const ActionsBar = () => {
    return (
        <div className={classes.actionsBar}>
            <Catalog />
            <Search />
            <Actions />
        </div>
    );
};

export default ActionsBar;
