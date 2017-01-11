/**
 * @file child.vue测试用例
 * @author MarxJiao
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import child from '../../src/components/child.vue';

/**
 * 获取生成的vm
 *
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}

// 描述要测试的内容
describe('test child.vue', () => {
    
    // 描述要测试的最小单元
    it('组件加载后，child组件的message应该是「这是子组件」', () => {
        let childvm = getRenderedVm(child, {
            message: '这是message'
        })

        // 断言组件的child组件的props是否生效
        expect(childvm.message).toEqual('这是message');
    });
});
    