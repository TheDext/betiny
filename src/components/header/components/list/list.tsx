import { headerList } from '@/shared/constants';
import classes from './list.module.scss';

export const HeaderList = () => {
    return (
        <ul className={classes.list}>
            {headerList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};
