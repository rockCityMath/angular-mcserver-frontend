export interface FocusTrapElement extends HTMLElement {
    topReboundElement: HTMLElement | undefined;
    bottomReboundElement: HTMLElement | undefined;
    focusTrapId: string;
}
export declare function refocusIfOutsideFocusTrapElement(focusedElement: HTMLElement, focusTrapElement: FocusTrapElement, elementToRefocus?: HTMLElement): void;
export declare function elementIsOutsideFocusTrapElement(focusedElement: HTMLElement, focusTrapElement: FocusTrapElement): boolean;
export declare function createFocusTrapReboundElement(): HTMLSpanElement;
export declare function addReboundElementsToFocusTrapElement(focusTrapElement: FocusTrapElement): void;
export declare function removeReboundElementsFromFocusTrapElement(focusTrapElement: FocusTrapElement): void;
export declare function castHtmlElementToFocusTrapElement(el: HTMLElement): FocusTrapElement;
export declare class FocusTrap {
    focusTrapElement: FocusTrapElement;
    private previousFocus;
    private onFocusInEvent;
    firstFocusElement: HTMLElement | FocusTrapElement;
    active: boolean;
    constructor(hostElement: FocusTrapElement);
    enableFocusTrap(): void;
    removeFocusTrap(): void;
    private onFocusIn;
}
