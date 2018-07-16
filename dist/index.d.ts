import { ImageStyle, StyleSheet as RNStyleSheet, TextStyle, ViewStyle } from 'react-native';
declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
export declare const StyleSheet: {
    scaleHorizontally(size: number): number;
    scaleVertically(size: number): number;
    scaleWithAverageRatio(size: number): number;
    create<T extends NamedStyles<T>>(styles: T): { [P in keyof T]: import("react-native").RegisteredStyle<T[P]>; };
    setGuidelineBaseDimensions(newWidth?: number, newHeight?: number): void;
    createUnscaled: typeof RNStyleSheet.create;
    flatten<T>(style?: import("react-native").RegisteredStyle<T> | undefined): T;
    flatten(style?: import("react-native").StyleProp<TextStyle>): TextStyle;
    flatten(style?: import("react-native").StyleProp<ImageStyle>): ImageStyle;
    flatten(style?: import("react-native").StyleProp<ViewStyle>): ViewStyle;
    hairlineWidth: number;
    absoluteFillObject: RNStyleSheet.AbsoluteFillStyle;
    absoluteFill: import("react-native").RegisteredStyle<RNStyleSheet.AbsoluteFillStyle>;
};
export {};