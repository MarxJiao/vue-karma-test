/**
 * @file 入口JS，一个目录下同名的HTML,JS会被自动关联
 * @author jiaojian04
 */

// LIB
import Vue from 'vue';

import app from './app.vue';

new Vue({
    el: '#app',
    render(h) {
        return h(app);
    }
});