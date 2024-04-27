export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1001',
                code: 'Inventory on hold Value ($)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1002',
                code: 'Total SKU Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1003',
                code: 'Stock on Hand (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1004',
                code: 'Stock on Hand Value ($)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1005',
                code: 'On hold SKU count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1006',
                code: 'Inventory CBM (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1007',
                code: 'Space Utilisation',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1008',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1009',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1010',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1010',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            {
                id: '1010',
                code: 'Inventory on Hold Count (#)',
                name: '10,032',
                quantity: 24,
            },
            
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getProductsMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getProductsLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getProductsXLarge() {
        return Promise.resolve(this.getData());
    },







    // getProductsMini() {
    //     return Promise.resolve(this.getProductsData().slice(0, 5));
    // },

    // getProductsSmall() {
    //     return Promise.resolve(this.getProductsData().slice(0, 10));
    // },

    // getProducts() {
    //     return Promise.resolve(this.getProductsData());
    // },

    // getProductsWithOrdersSmall() {
    //     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 5));
    // },

    // getProductsWithOrders() {
    //     return Promise.resolve(this.getProductsWithOrdersData());
    // }
};