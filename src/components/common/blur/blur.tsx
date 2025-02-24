'use client';
import classes from './blur.module.scss';
import useUiActions from '@/store/uiActions';
import { FC } from 'react';
import BlurTypes from '@/components/common/blur/blur.types';
import classNames from '@/shared/lib/classNames';

const Blur: FC = () => {
    const { isBlured } = useUiActions() as BlurTypes;

    return (
        <div
            className={classNames(
                classes.blur,
                { [classes._active]: isBlured },
                []
            )}
        ></div>
    );
    // return isBlured && <div className={classes.blur}></div>;
};
export default Blur;
