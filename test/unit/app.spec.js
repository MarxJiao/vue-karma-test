/**
 * @file app.vue测试用例
 * @author MarxJiao
 */

import Vue from 'vue';
import app from '../../src/app.vue';

describe('test app.vue', () => {
    
    it('组件加载后，title应该是Holle world', () => {
        let vm = new Vue(app).$mount();
        expect(vm.title).toEqual('Hello world');
    });
        
});
    