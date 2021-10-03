import { createVNode, render, isVNode, VNode, Component } from "vue";

interface VNodeGroup {
  [propName: string]: VNode;
}

interface UseOSComponentOption<T, U> {
  VNode?: T | U;
  [propName: string]: unknown;
}

interface Instances {
  id: string;
  vm: any;
  close: (type: unknown) => void;
}

let idx = 0;
let incetanceList: Instances[] = [];

function useOSComponent(
  component: Component,
  props = {} as UseOSComponentOption<VNodeGroup, VNode>,
  closeCb?: (type: unknown) => void
): any {
  if (!component) throw new Error("component is not found");
  const id = `conponents-out-${idx++}`;
  const container = document.createElement("div");
  const vm = createVNode(
    component,
    props,
    props.VNode
      ? isVNode(props.VNode)
        ? { default: () => props.VNode }
        : props.VNode
      : null
  );
  function destory(type: unknown) {
    render(null, container);
    incetanceList = incetanceList.filter((item) => item.id !== id);
    closeCb && closeCb(type);
  }
  incetanceList.push({
    id,
    vm,
    close: destory,
  });
  vm.props!.onDestroy = destory;
  render(vm, container);
  container.firstElementChild!.className = id;
  console.log(container.firstElementChild);
  document.body.appendChild(container.firstElementChild as Node);
  return {
    vm,
    destory,
  };
}

export function close(instance: Instances | Instances[]): void {
  let id: string[] = [];
  if (Array.isArray(instance)) {
    id = instance.map((item) => item.id);
  } else {
    id = [instance.id];
  }
  incetanceList = incetanceList.filter((item) => {
    if (id.includes(item.id)) {
      item.close(item.id);
      return false;
    }
    return true;
  });
}

export default useOSComponent;
