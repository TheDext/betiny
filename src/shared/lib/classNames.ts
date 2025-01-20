type Mods = Record<string, boolean | string>;

export default function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([key, value]) => {
                console.log(key);
                return Boolean(value);
            })
            .map(([classNames]) => classNames),
    ].join(' ');
}
