import { RuleItem } from "async-validator";

interface IRrules extends RuleItem {
  trigger: string;
}

export default class validate {
  public must(message: string, trigger?: IRrules["trigger"]): IRrules {
    return {
      required: true,
      message: message || "该项为必填项",
      trigger: trigger || "blur",
    };
  }
  public phone(required: true, message?: string): IRrules | IRrules[] {
    const phoneRule = [];
    if (required) {
      phoneRule.push(this.must("请填写联系电话"));
    }
    phoneRule.push({
      pattern:
        "^(((\\+\\d{2}-)?0\\d{2,3}-\\d{7,8})|((\\+\\d{2}-)?(\\d{2,3}-)?([1][3,4,5,6,7,8,9][0-9]\\d{8})))$",
      message: message || "请填写正确的联系电话",
      trigger: "blur",
    });
    return phoneRule;
  }
  public idCard(required = true, message?: string): IRrules[] {
    const idCard = [];
    if (required) {
      idCard.push(this.must("请填写身份证号码"));
    }
    idCard.push({
      pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      message: message || "请填写正确的身份证号码",
      trigger: "blur",
    });
    return idCard;
  }
  public email(required = true, message?: string): IRrules[] {
    const emailRule = [];
    if (required) {
      emailRule.push(this.must("请填写邮箱"));
    }
    emailRule.push({
      pattern:
        // eslint-disable-next-line no-useless-escape
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      message: message || "请填写正确的邮箱",
      trigger: "blur",
    });
    return emailRule;
  }
  public length(min = 1, max = 70, message?: string): IRrules[] {
    const lengthRule = [];
    lengthRule.push({
      min: min,
      max: max,
      message: message || `长度在${min}到${max}个字符`,
      trigger: "change",
    });
    return lengthRule;
  }
}
