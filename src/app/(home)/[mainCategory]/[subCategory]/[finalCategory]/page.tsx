export default async function Page({
    params,
}: {
    params: { finalCategory: string };
}) {
    const { finalCategory } = await params;
    console.log('finalCategory', finalCategory);
    return finalCategory;
}
