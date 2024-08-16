export const products = localStorage.getItem("products")  ?  JSON.parse(localStorage.getItem("products")) : 
 [
    {
        id: 1,
        img: "./img/product-1.png",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 7000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Popular"]
    },
    {
        id: 2,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Expensive", "Quality"]
    },
    {
        id: 3,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular","Quality"]
    },
    {
        id: 4,
        img: "./img/product-1.png",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 2000,
        olPrice: 5000,
        addBassket: false,
        categories: ["Chip"]
    },
    {
        id: 5,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 65000,
        olPrice: 75000,
        addBassket: false,
        categories: ["Expensive"]
    },
    {
        id: 6,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 15000,
        addBassket: false,
        categories: ["Quality"]
    },
    {
        id: 7,
        img: "https://images.uzum.uz/cqdkm6ssslotj05l8vn0/original.jpg",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 5000,
        olPrice: 6000,
        addBassket: false,
        categories: ["Chip"]
    },
    {
        id: 8,
        img: "https://images.uzum.uz/cqdoekksslotj05labcg/t_product_540_high.jpg#1723722215820",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 83000,
        olPrice: 96000,
        addBassket: false,
        categories: ["Expensive", "Quality"]
    },
    {
        id: 9,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 20000,
        olPrice: 32000,
        addBassket: false,
        categories: ["Quality"]
    },
    {
        id: 10,
        img: "https://images.uzum.uz/cqdkm6ssslotj05l8vn0/original.jpg",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 6000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Popular", "Chip"]
    },
    {
        id: 11,
        img: "https://images.uzum.uz/cqdoekksslotj05labcg/t_product_540_high.jpg#1723722215820",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Popular","Quality"]
    },
    {
        id: 12,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular"]
    },
    {
        id: 13,
        img: "https://images.uzum.uz/cqecl7sqvss6ad8j0drg/original.jpg",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 7000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Popular", "Chip"]
    },
    {
        id: 14,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Expensive", "Quality"]
    },
    {
        id: 15,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular"]
    },
    {
        id: 16,
        img: "./img/product-1.png",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 7000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Chip"]
    },
    {
        id: 17,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Expensive", "Quality"]
    },
    {
        id: 18,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular", "Chip","Quality"]
    },
    {
        id: 19,
        img: "./img/product-1.png",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 7000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Popular", "Chip"]
    },
    {
        id: 20,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Popular"]
    },
    {
        id: 21,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular", "Chip", "Expensive", "Quality"]
    },
    {
        id: 22,
        img: "./img/product-1.png",
        title: "Вариативный замок Golden Soft для отеля",
        newPrice: 7000,
        olPrice: 8000,
        addBassket: false,
        categories: ["Popular"]
    },
    {
        id: 23,
        img: "./img/product-2.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 33000,
        olPrice: 39000,
        addBassket: false,
        categories: ["Expensive", "Quality"]
    },
    {
        id: 24,
        img: "./img/product-3.png",
        title: "Дверной Замок Golden Soft для офиса",
        newPrice: 9000,
        olPrice: 12000,
        addBassket: false,
        categories: ["Popular", "Chip"]
    }
];