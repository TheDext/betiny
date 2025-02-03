import { PrismaClient } from '@prisma/client'; // Импортируем PrismaClient
import { Catalog, catalog } from './constants'; // Убедитесь, что типы экспортируются правильно

const prisma = new PrismaClient();

type CatalogTree = Catalog & {
    children?: CatalogTree[];
};

async function createCatalogItem(
    item: CatalogTree,
    parentId: number | null = null
): Promise<void> {
    const createdItem = await prisma.catalog.create({
        data: {
            name: item.name,
            seo: item.seo,
            slug: item.slug,
            svg: item.svg,
            parentId: parentId,
        },
    });

    if (item.children && item.children.length > 0) {
        for (const child of item.children) {
            await createCatalogItem(child, createdItem.id);
        }
    }
}

async function main(): Promise<void> {
    console.log('Начало заполнения базы данных...');

    await prisma.catalog.deleteMany({});

    for (const item of catalog) {
        await createCatalogItem(item);
    }

    console.log('База данных успешно заполнена!');
}

main()
    .catch((e) => {
        console.error('Ошибка при заполнении базы данных:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
