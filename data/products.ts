export type Product = {
    id: string,
    name: string,
    price: number,
    image?: string;
    description?: string;
};

export const PRODUCTS: Product[] = [
    {
        id: '1', name: 'Sneakers Alpha', price: 499000, image: '', description: 'Ringan & nyaman untuk harian.'
    },
    {
        id: '2', name: 'Sneakers Beta', price: 559000, image: '', description: 'Sol empuk, cocok lari santai.'
    },
    {
        id: '3', name: 'Sneakers Gamma', price: 629000, image: '', description: 'Desain trendi, bahan breathable.'
    },
];