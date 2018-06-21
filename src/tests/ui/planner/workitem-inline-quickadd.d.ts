import { BaseElement } from './../base.element';
import { ElementFinder } from 'protractor';
import { WorkItem } from './index';
import { TextInput, Dropdown, Button } from '../../ui';
export declare class WorkItemInlineQuickAdd extends BaseElement {
    titleTextInlineInput: TextInput;
    buttonsDiv: ElementFinder;
    addInlineQuickAddButton: Button;
    workItemTypeDropdown: Dropdown;
    constructor(el: ElementFinder, name?: string);
    ready(): Promise<void>;
    addInlineWorkItem({title, description, type}: WorkItem): Promise<void>;
    workItemTypes(): Promise<string[]>;
}
