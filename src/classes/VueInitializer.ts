import Vue, {VueConstructor} from 'vue';
import Utils from './Utils';

export default class VueInitializer {

    public static createComponent(containerQuerySelector: string, classAttr: string, ComponentClass: VueConstructor, props: Array<any> = null, createAfter?: boolean) {
        return VueInitializer._initComponent(containerQuerySelector, classAttr, ComponentClass, props, createAfter);
    }

    public static reinitComponent(vueComponent: Vue) {
        if (document.getElementById(vueComponent.$el.id) == null) {
            let container = document.querySelector(vueComponent.$el.dataset.fndParent);
            let firstChild = container.firstChild;
            container.insertBefore(vueComponent.$el, firstChild);
        }
    }

    private static _initComponent(containerQuerySelector: string, classAttr: string, ComponentClass: VueConstructor, props: Array<any> = null, createAfter?: boolean): Vue {
        let id = `fndComp_${Utils.generateUUID()}`;
        let container = document.querySelector(containerQuerySelector);
        if (container) {
            let firstChild = container.firstChild;
            let newElement = document.createElement('span') as HTMLDivElement;
            newElement.setAttribute('id', id);
            newElement.setAttribute('class', classAttr);
            newElement.setAttribute('data-fnd-parent', containerQuerySelector);
            if (!createAfter) container.insertBefore(newElement, firstChild);
            else container.appendChild(newElement);

            return new Vue({
                el: `#${id}`,
                data: {},
                mounted() {
                    let VueComponentClass = Vue.extend(ComponentClass);
                    let instance = new VueComponentClass();

                    for (let prop in props) {
                        instance.$props[prop] = props[prop];

                    }
                    instance.$mount();
                    this.$el.appendChild(instance.$el);
                }
            });
        } else {
            return null;
        }
    }
}