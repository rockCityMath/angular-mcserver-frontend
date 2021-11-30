export interface FeatureSupportMatrix {
    js?: boolean;
    flexGap?: boolean;
}
declare class BrowserFeatures {
    supports: {
        js: boolean;
        flexGap: boolean;
    };
    constructor();
}
export declare const browserFeatures: BrowserFeatures;
export {};
