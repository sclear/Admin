import Validate from "../validate";
import { Ref } from "vue";
import { ElForm } from "element-plus";

const valid = new Validate();

export interface UseValidate {
  valid: InstanceType<typeof Validate>;
  validate: () => Promise<boolean | undefined>;
}

function useValidate(
  ref: Ref<InstanceType<typeof ElForm> | undefined>
): UseValidate {
  function verify(): Promise<boolean | undefined> {
    return new Promise((rs) => {
      if (ref.value === undefined)
        throw new Error("ElForm constuctor is Not Found");
      ref.value.validate((v?: boolean) => rs(v));
    });
  }

  return {
    valid,
    async validate(): Promise<boolean | undefined> {
      const boo: boolean | undefined = await verify();
      return boo;
    },
  };
}
export default useValidate;