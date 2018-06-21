import { ElementFinder } from 'protractor';
import { BaseElement } from './base.element';
export declare class ModalDialog extends BaseElement {
    content: BaseElement;
    footer: BaseElement;
    constructor(element: ElementFinder, name?: string);
    ready(): Promise<void>;
    open(): Promise<any>;
}
