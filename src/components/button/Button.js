require('./style/button.less');



// 错误写法，不能有空格, 比如 props.disabled ? "y-button-disabledd" : "" 中间就有了空格隔开
let template = `
    <div class="y-button" 
        :class={
            props.type==="primary"? "y-button-primary":"y-button-default",
            props.disabled ? "y-button-disabledd" : ""
        }>
    </div>
`;
// 错误写法，class 写法错误，请看下面一个的写法
template = `
<div class="y-button" 
     :class={type==="primary"?"y-button-primary":"y-button-default",disabled?"y-button-disabledd":""}
>
</div>
`

template = `
<div class="y-button" :class={"y-button-primary":type==="primary","y-button-disabled":disabled} @click="handleClick">
{{ name }}
</div>
`
// :class={type==="primary"?"y-button-primary":"y-button-default",disabled?"y-button-disabledd":""}
let { reactive, ref, toRefs } = Vue
let YButton = {
    template: template,
    props: {
        type: {
            default: 'default',
            type: String
        },
        disabled: {
            default: false,
            type: Boolean
        }
    },
    setup(props, context) {
        let state = reactive({
            name
        })
        let label = ref(111);
        state.name = '张三'

        const handleClick = () => {
            alert('你点击了按钮')
        }

        return {
            ...toRefs(state),
            label,
            handleClick
        }
    }
}

export default YButton