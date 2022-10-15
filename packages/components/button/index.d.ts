declare const Button: import("@litchi-design/utils/withInstall").withInstallSFC<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export default Button;
export type { ButtonProps } from './src/button';
declare module 'vue' {
    interface GlobalComponents {
        LButton: typeof Button;
    }
}
