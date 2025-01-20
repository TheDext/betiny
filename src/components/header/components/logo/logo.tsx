import classes from './logo.module.scss';
import Link from 'next/link';

export const HeaderLogo = () => {
    return (
        <Link href="/" className={classes.logo}>
            betiny
        </Link>
    );
};
