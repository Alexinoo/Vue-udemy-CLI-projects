
/* Main entry point for JS

-Importing vue - don't need to specify the path since vue is a package we have imported in package.json

-When importing a custom component - We need to specify the path ./ or ../

- Use {} for a named export

-Or just App for a default export by using the name - could be anything , Hello/ShakeandBake but a good practice is to name it as the component object etc

-Then we pass it into createApp() method

*/

import { createApp } from 'vue';

import App from './App.vue'

createApp(App).mount('#app');
