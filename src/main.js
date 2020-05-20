import YButton from './components/button/Button';
import Toggle from './toggle';
// const Toggle = require('./toggle')

console.log('Toggle', Toggle)
console.log('YButton', YButton)
Vue.createApp({
    // template: `        
    //     <toggle></toggle>
    // `,
    template: `        
        <y-button></y-button>
    `,
    setup() {

    },
    components: {
        Toggle,
        'y-button': YButton
    }
})
.mount('#app')