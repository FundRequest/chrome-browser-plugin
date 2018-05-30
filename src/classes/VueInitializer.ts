import Vue, {VueConstructor} from 'vue';
import Utils from './Utils';

export default class VueInitializer {

    public static createComponent(containerElement: HTMLElement, classAttr: string, ComponentClass: VueConstructor, props: Array<any> = null) {
        let vueInstance = VueInitializer._initComponent(containerElement, classAttr, ComponentClass, props);

        document.addEventListener('pjax:complete', () => {
            if (vueInstance) {
                vueInstance.$destroy();
            }
        });
    }

    private static _initComponent(containerElement: HTMLElement, classAttr: string, ComponentClass: VueConstructor, props: Array<any> = null): Vue {
        let id = `a${Utils.generateUUID()}`;

        if (containerElement) {
            let firstChild = containerElement.firstChild;
            let newElement = document.createElement('span') as HTMLDivElement;
            newElement.setAttribute('id', id);
            newElement.setAttribute('class', classAttr);
            containerElement.insertBefore(newElement, firstChild);

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