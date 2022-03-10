import Jgline from './packages/line';

const components = [Jgline];

function install(_Vue) {
  components.forEach((comp) => {
    _Vue.component(comp.name, comp);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: process.env.VERSION,
  install,
  ...components,
};
