/**
 * A property decorator which accesses a set of string values for use
 * inside the element's template. The values can be overridden at runtime
 * by changing the property value that's reflected through the attribute value.
 *
 * @example
 *
 *     class MyElement {
 *       @i18n()
 *       i18n = {
 *         "open" : "Open my element",
 *         "close" : "Close my element"
 *       };
 *     }
 *
 */
export declare function i18n(): (protoOrDescriptor: any, name: string) => any;
