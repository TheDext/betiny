//@ts-nocheck
export default async function Page({ params }) {
    const { mainCategory } = await params;
    console.log('mainCategory', mainCategory);
    return mainCategory;
}
