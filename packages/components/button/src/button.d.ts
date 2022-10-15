import { ExtractPropTypes, PropType } from 'vue';
export declare const buttonProps: {
    readonly size: PropType<string | number>;
    readonly color: StringConstructor;
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
