import { createVNode, render, isVNode, VNode, Component } from "vue";

interface VNodeGroup {
  [propName: string]: VNode;
}

interface UseOSComponentOption<T> {
  VNode?: T | VNode;
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
  option = {} as UseOSComponentOption<VNodeGroup>,
  closeCb?: (type: unknown) => void
): any {
  if (!component) throw new Error("component is not found");
  const id = `conponents-out-${idx++}`;
  const container = document.createElement("div");
  container.className = id;
  const vm = createVNode(
    component,
    option,
    option.VNode
      ? isVNode(option.VNode)
        ? { default: () => option.VNode }
        : option.VNode
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
  document.body.appendChild(container.firstElementChild as Node);
  return {
    vm,
    destory,
  };
}

export function close(incetance: Instances | Instances[]): void {
  let id: string[] = [];
  if (Array.isArray(incetance)) {
    id = incetance.map((item) => item.id);
  } else {
    id = [incetance.id];
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
