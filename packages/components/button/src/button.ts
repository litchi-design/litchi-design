import { ExtractPropTypes, PropType } from 'vue';

export const buttonProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
