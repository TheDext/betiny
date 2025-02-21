//@ts-nocheck
export default async function Page({ params }) {
    const { subCategory } = await params;
    console.log('subCategory', subCategory);
    return subCategory;
}
