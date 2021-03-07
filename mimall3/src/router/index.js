import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home";
import Index from "../views/index";
import Product from "../views/product";
import Detail from "../views/detail";
import Login from "../views/login";
import Cart from "../views/cart";
import Order from "../views/order";
import OrderList from "../views/orderList";
import OrderConfirm from "../views/orderConfirm";
import OrderPay from "../views/orderPay";
import Alipay from "../views/alipay";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        redirect: "/index",
        children: [
            {
                path: "/index",
                component: Index,
            },
            {
                path: "/product/:id",
                component: Product,
            },
            {
                path: "/detail/:id",
                component: Detail,
            },
        ],
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/order",
        component: Order,
        children: [
            {
                path: "list",
                component: OrderList,
            },
            {
                path: "confirm",
                component: OrderConfirm,
            },
            {
                path: "pay",
                component: OrderPay,
            },
            {
                path: "alipay",
                component: Alipay,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
