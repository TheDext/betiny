import classes from './actions.module.scss';
import userIcon from '@/assets/icons/user.svg';
import favoriteIcon from '@/assets/icons/favorite.svg';
import cartIcon from '@/assets/icons/cart.svg';
import Image from 'next/image';

export const Actions = () => {
    return (
        <div className={classes.actions}>
            <div className={classes.actions__user}>
                <Image width={30} src={userIcon} alt="userIcon" />
            </div>
            <span className={classes.actions__divider}></span>
            <Image width={30} src={favoriteIcon} alt="favoriteIcon" />
            <Image width={30} src={cartIcon} alt="cartIcon" />
        </div>
    );
};
