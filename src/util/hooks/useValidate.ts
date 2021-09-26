import Validate from "../validate";
import { Ref } from "vue";
import { ElForm } from "element-plus";

const valid = new Validate();

export interface UseValidate {
  valid: InstanceType<typeof Validate>;
  reset: () => void;
  validate: () => Promise<boolean | undefined>;
}

function useValidate(
  ref: Ref<InstanceType<typeof ElForm> | undefined>
): UseValidate {
  function verify(): Promise<boolean | undefined> {
    return new Promise((rs) => {
      if (ref.value === undefined)
        throw new Error("ElForm Constuctor is Not Found");
      ref.value.validate((v?: boolean) => rs(v));
    });
  }

  return {
    valid,
    reset(): void {
      (ref.value as InstanceType<typeof ElForm>).resetFields();
    },
    async validate(): Promise<boolean | undefined> {
      const token: boolean | undefined = await verify();
      return token;
    },
  };
}
export default useValidate;
