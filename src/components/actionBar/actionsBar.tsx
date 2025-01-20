import classes from './actionsBar.module.scss';
import { Search } from '@/components/actionBar/components/search';
import { Actions } from '@/components/actionBar/components/actions';
import CatalogButton from '@/components/actionBar/components/catalogButton/catalogButton';
// import dynamic from 'next/dynamic';

// const CatalogButton = dynamic(
//     () =>
//         import('@/components/actionBar/components/catalogButton/catalogButton'),
//     {
//         loading: () => <p>Loading...</p>,
//     }
// );

const ActionsBar = () => {
    return (
        <div className={classes.actionsBar}>
            <CatalogButton />
            <Search />
            <Actions />
        </div>
    );
};

export default ActionsBar;
