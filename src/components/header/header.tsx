import classes from './header.module.scss';
import { HeaderLogo } from '@/components/header/components/logo';
import { HeaderList } from '@/components/header/components/list';
import { Location } from '@/components/header/components/location';
import { Socials } from '@/components/header/components/socials';

const Header = () => {
    return (
        <header className={classes.header}>
            <HeaderLogo />
            <HeaderList />
            <Location />
            <Socials />
        </header>
    );
};

export default Header;
