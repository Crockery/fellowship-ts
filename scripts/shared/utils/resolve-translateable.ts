import { Translateable } from "../../../src/types";
import { FSTranslateable, FSTransObj } from "../types";

const isTranslateable = (
  to_translate: FSTransObj,
): to_translate is FSTranslateable => {
  return (to_translate as FSTranslateable)["SourceString"] !== undefined;
};

export const resolveTranslateable = (
  to_translate: FSTransObj | undefined,
): Translateable => {
  if (!!to_translate && isTranslateable(to_translate)) {
    return {
      key: to_translate.Key,
      default: to_translate.SourceString,
    };
  }

  return {
    key: "",
    default: "",
  };
};
