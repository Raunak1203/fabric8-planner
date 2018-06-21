import { AppPage } from '../app.page';
import { WorkItemList, WorkItemInlineQuickAdd, SidePanel, WorkItemQuickPreview, ToolbarHeader, Settings, Iteration, WorkItemDetailPage, WorkItem } from './../../ui/planner';
import { WorkItemQuickAdd } from './../../ui/planner';
export declare class PlannerPage extends AppPage {
    workItemList: WorkItemList;
    quickAdd: WorkItemQuickAdd;
    inlineQuickAdd: WorkItemInlineQuickAdd;
    sidePanel: SidePanel;
    quickPreview: WorkItemQuickPreview;
    header: ToolbarHeader;
    settings: Settings;
    iteration: Iteration;
    detailPage: WorkItemDetailPage;
    confirmModalButton: WorkItemList;
    constructor(url?: string);
    ready(): Promise<void>;
    createWorkItem(item: WorkItem): Promise<void>;
    createUniqueWorkItem(): Promise<string>;
    createInlineWorkItem(item: WorkItem): Promise<void>;
    resetState(): Promise<void>;
}
