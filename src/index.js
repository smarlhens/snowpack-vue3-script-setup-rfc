import {createApp} from 'vue';
// import App from './AppOptions.vue'; // This is working w/ defineComponent
// import App from './AppComposition.vue'; // This is working w/ defineComponent
import App from './AppCompositionSetup.vue'; // This is not working /w script setup

const app = createApp(App);
app.mount('#app');

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
