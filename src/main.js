let { ref } = Vue

const Toggle  = {
    name: 'toggle',
    template: `
        <div id="test"><transition><div v-if="toggle" class="test">content</div></transition></div>
        <button @click="handleClick">button</button>
    `,
    setup: () => {
        const toggle = ref(true);
        const handleClick = () => toggle.value = !toggle.value;

        return {
            toggle,
            handleClick
        }
    }
}


Vue.createApp({
    template: `
        <toggle></toggle>
    `,
    setup() {

    },
    components: {
        Toggle
    }
})
.mount('#app')