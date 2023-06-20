### 安装pina
```javascript
npm i pina
```
### 父子传值
```javascript
// 父组件发送
<script setup>
 {/* defineEmits,defineProps无需导入，直接使用 */}

  const props = defineProps({
    title: String,
  })
</script>
// <!-- 或者 -->
<script setup lang="ts"> 
    import { ref,defineProps } from 'vue';
    
    type Props={ 
        msg:string 
    }
    defineProps<Props>(); 
</script>
```

```javascript
// 子组件接收
<script setup>
 {/* defineEmits,defineProps无需导入，直接使用 */}
const emit = defineEmits(['change', 'delete'])
  
</script>
```

### 组件暴露出自己的属性和方法

//子组件
<template>
  <!--  <p>子</p>-->
  <button @click="butFn">改变page值: {{ page }} </button>

</template>

<script setup>
// defineEmits,defineProps无需导入，直接使用
const props = defineProps({
  page: Number
}); //接收父组件传来的值
const emit = defineEmits(["pageFn"]);   //定义一个变量来接收父组件传来的方法

const butFn = () => {
  emit("pageFn", props.page)
}

function doSth() {

  console.log(333,'defineExpose');

}

defineExpose({ doSth });

// 获取父组件传递过来的数据
console.log(props.page, "parent value"); // parent value

</script>
<style scoped>
button {
  margin: 20px;
}
</style>


### 父组件直接使用doSth
//父组件
<template>
  <div class="wrapper">
    <Child :page="page"
           @pageFn="pageFn"
           ref="childRef"
    />
    <button @click="doSth1"> defineExpose</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Child from './Child.vue'

const childRef = ref();
const page = ref(1)
const pageFn = (num) => {
  page.value += num
}

function doSth1() {
  console.log(childRef.value)
  childRef.value.doSth();
}
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>





