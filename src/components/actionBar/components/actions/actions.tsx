'use client';
import classes from './actions.module.scss';
import userIcon from '@/assets/icons/user.svg';
import favoriteIcon from '@/assets/icons/favorite.svg';
import cartIcon from '@/assets/icons/cart.svg';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Actions: FC = () => {
    const pathname = usePathname();
    const isAuthPage = pathname === '/auth';

    return (
        <div className={classes.actions}>
            <Link
                href={'/auth'}
                onClick={(e) => isAuthPage && e.preventDefault()}
                className={classes.actions__user}
            >
                <Image width={30} src={userIcon} alt="userIcon" />
            </Link>
            <span className={classes.actions__divider}></span>
            <Image width={30} src={favoriteIcon} alt="favoriteIcon" />
            <Image width={30} src={cartIcon} alt="cartIcon" />
        </div>
    );
};
