/**
=========================================================
* Vue Soft UI Dashboard - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-soft-ui-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import './ccmp/gdialog/style.css'
import { GDialog } from './ccmp/gdialog/index'
import { plugin as dialogPlugin } from './ccmp/gdialog/index'
import VueSSE from 'vue-sse';

import "jquery.fancytree/dist/modules/jquery.fancytree.ui-deps.js" ;
import "jquery.fancytree/dist/modules/jquery.fancytree.js";
import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';
import "jquery.fancytree/dist/modules/jquery.fancytree.ariagrid.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.clones.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.dnd5.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.edit.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.filter.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.grid.js";
import "jquery.fancytree/dist/modules/jquery.fancytree.logger.js";


const appInstance = createApp(App);



appInstance.component('GDialog', GDialog)
appInstance.use(dialogPlugin, {
    // options
})
appInstance.use(VueSSE);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.use(VueAxios,axios);
appInstance.mount("#app");
