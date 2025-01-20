import icon from '../../../../assets/icons/point.svg';
import classes from './location.module.scss';
import Image from 'next/image';

export const Location = () => (
    <div className={classes.location}>
        <div className={classes.location__icon}>
            <Image width={30} src={icon} alt="location" />
        </div>
        <div className={classes.location__city}>г. Москва</div>
    </div>
);
