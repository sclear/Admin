<template>
  <Container>
    <template #header>
      <ElCard>
        <h3 class="title-color">
          useOSComponent
          <ElButton @click="renderOSComponent" title="代码示例在下方"
            >尝试一下</ElButton
          >
        </h3>
      </ElCard>
    </template>
    <ElCard>
      <template #header>
        <h4 class="title-color">简介</h4>
        <div class="des-color fs14 mt">
          应用于方法调用组件实例并渲染至页面,例如{elementui中的message('这是消息')},快尝试一下吧
          <h4>
            这属于一个比较特殊的组件,虽然3.0已经废弃了$destroy,但是我依然为你绑定了destroy方法来帮助你摧毁组件,在使用emit调用destroy时
            允许携带内容,内容将会反馈在回调(onClose)内
          </h4>
        </div>
      </template>
      <ElDescriptions direction="vertical" :column="4" border>
        <ElDescriptionsItem :span="6" label="hook"
          >useOSComponent</ElDescriptionsItem
        >

        <ElDescriptionsItem :span="18" label="参数（component,props,onClose）">
          <p>component: 这是很好理解的,就是需要渲染的组件</p>
          <h4>
            props：这里的参数是比较复杂的可以理解成组件的Props &&
            VNode,这里可以直接传入对象,对象将会穿透hooks为你植入到component的props内。
            当然同时你可以传入VNode进入你的组件,你需要在形参(props)内声明VNode,既{
            VNode: VNode },VNode可以是一个VNode或者是一个对象内全是存储的VNode。
          </h4>
          <p>
            onClose：这是当组件被销毁时为你准备的回调,它也会在参数中返回你销毁时携带的内容
          </p>
          <h4>
            在次基础上也完全能够使用一个Promise调起组件并实现resolve|reject实现点击的结果
          </h4>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="返回值（vm）" :span="12"
          >组件实例,不建议操作,因为会带来风险
        </ElDescriptionsItem>
        <ElDescriptionsItem label="返回值（destroy）" :span="12"
          >调用其会主动摧毁组件,同时也能携带内容反馈在onClose内
        </ElDescriptionsItem>
      </ElDescriptions>
      <img src="./../../assets/images/1633337884(1).jpg" alt="" />
    </ElCard>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/common/Container.vue";
import {
  ElCard,
  ElButton,
  ElDescriptions,
  ElDescriptionsItem,
} from "element-plus";
import message from "@/components/common/message.vue";
import { useOSComponent } from "@/util/hooks";
import { h } from "@vue/runtime-core";

/* eslint-disable @typescript-eslint/no-unused-vars */
function renderOSComponent() {
  const { destroy, vm } = useOSComponent(
    message,
    {
      title: "点我关闭",
      VNode: h("img", {
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      }),
    },
    (onCloseType) => {
      console.log(onCloseType);
    }
  );
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
