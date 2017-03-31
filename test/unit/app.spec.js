/**
 * @file app.vue测试用例
 * @author MarxJiao
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import app from '../../src/app.vue';

// 描述要测试的内容
describe('test app.vue', () => {
    
    // 描述要测试的最小单元
    it('组件加载后，title应该是Holle world', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();
        // 断言组件的title是否变为了'Hello world'
        expect(vm.title).toEqual('Hello world');
    });

    // 描述要测试的最小单元
    it('设置message为『你好世界』', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();

        // 执行setMessage方法
        vm.setMessage('你好世界');

        // 断言组件的message是否变为了'你好世界'
        expect(vm.message).toEqual('你好世界');
    });


    it('upperCase过滤器能把app转换为APP', () => {

        // vue 组件export出来的是个对象，我们直接用这个对象的属性和方发就能调用到要测试的filter
        let appStr =  app.filters.upperCase('app');

        // 断言组件的appStr是为'APP'
        expect(appStr).toEqual('APP');
    });

    // 异步数据更新
    it('数据更新后，视图应该改变', done => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let Cor = Vue.extend(app);
        let vm = new Cor().$mount();

        // 挂载后改变title
        vm.title = 'APP';
        Vue.nextTick(() => {
            let title = vm.$el.getElementsByTagName('h1')[0]
            expect(title.textContent).toEqual('APP')
            done();
        })
    });
});
    