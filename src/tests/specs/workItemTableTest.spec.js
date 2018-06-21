"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const planner_1 = require("../page_objects/planner");
const support = require("../support");
describe('Work Item datatable list: ', () => {
    let planner;
    let c = new support.Constants();
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield support.desktopTestSetup();
        planner = new planner_1.PlannerPage(protractor_1.browser.baseUrl);
        yield planner.openInBrowser();
        yield planner.waitUntilUrlContains('typegroup');
    }));
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield planner.ready();
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        yield planner.resetState();
    }));
    it('should open settings button and hide columns', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield planner.workItemList.getDataTableHeaderCellCount()).toBe(9);
        yield planner.settings.clickSettings();
        yield planner.settings.selectAttribute(c.attribute1);
        yield planner.settings.moveToAvailableAttribute();
        expect(yield planner.workItemList.getDataTableHeaderCellCount()).toBe(8);
        yield planner.settings.clickSettings();
        yield planner.settings.selectAttribute(c.attribute1);
        yield planner.settings.moveToDisplayedAttribute();
        expect(yield planner.workItemList.getDataTableHeaderCellCount()).toBe(9);
    }));
    it('quick add should be disable for flat view', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.header.clickShowTree();
        yield protractor_1.browser.sleep(2000);
        yield planner.workItemList.overlay.untilHidden();
        expect(yield planner.workItemList.getInlineQuickAddClass(title)).toContain('disable');
        yield planner.header.clickShowTree();
        yield planner.workItemList.overlay.untilHidden();
    }));
    it('should filter work item by type', () => __awaiter(this, void 0, void 0, function* () {
        let workItemTypeFilter = 'workitemtype: Scenario';
        yield planner.header.selectFilter('Type', ' Scenario');
        expect(yield planner.header.getFilterConditions()).toContain(workItemTypeFilter);
    }));
    it('hideTree and create a work item then work item should be displayed when show tree is selected', () => __awaiter(this, void 0, void 0, function* () {
        let newWorkItem1 = { "title": 'New WorkItem' };
        yield planner.header.clickShowTree();
        yield planner.workItemList.overlay.untilHidden();
        yield planner.createWorkItem(newWorkItem1);
        expect(yield planner.workItemList.hasWorkItem(newWorkItem1.title)).toBeTruthy();
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.header.clickShowTree();
        expect(yield planner.workItemList.hasWorkItem(newWorkItem1.title)).toBeTruthy();
    }));
    it('check show completed and create a work item then update status to closed and uncheck show completed then work item should not visible in list', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.header.clickShowCompleted();
        yield planner.workItemList.overlay.untilHidden();
        let newWorkItem = {
            title: 'Check for show complete work item'
        };
        yield planner.createWorkItem(newWorkItem);
        expect(yield planner.workItemList.hasWorkItem(newWorkItem.title)).toBeTruthy();
        yield planner.workItemList.clickWorkItem(newWorkItem.title);
        yield planner.quickPreview.changeStateTo('closed');
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.quickPreview.close();
        yield planner.header.clickShowCompleted();
        yield planner.workItemList.overlay.untilHidden();
        expect(yield planner.workItemList.hasWorkItem(newWorkItem.title, true)).toBeFalsy();
    }));
    it('work item should show updated title when switching from flat to tree view', () => __awaiter(this, void 0, void 0, function* () {
        let updatedWorkItem = {
            title: 'test show updated work item'
        };
        let title = yield planner.createUniqueWorkItem();
        yield planner.header.clickShowTree();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.titleInput.untilTextIsPresentInValue(title);
        yield planner.quickPreview.updateTitle(updatedWorkItem.title);
        yield planner.quickPreview.titleInput.untilTextIsPresentInValue(updatedWorkItem.title);
        yield planner.quickPreview.close();
        expect(yield planner.workItemList.hasWorkItem(updatedWorkItem.title)).toBeTruthy();
        yield planner.header.clickShowTree();
        yield planner.workItemList.overlay.untilHidden();
        expect(yield planner.workItemList.hasWorkItem(updatedWorkItem.title)).toBeTruthy();
    }));
    it('list should not update when new label is added', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem(), childWorkItem = {
            "title": 'test list is not updated when new label is added',
            "type": 'Experience'
        };
        expect(yield planner.workItemList.hasWorkItem(title)).toBeTruthy();
        yield planner.workItemList.workItem(title).clickInlineQuickAdd();
        yield planner.createInlineWorkItem(childWorkItem);
        yield planner.quickPreview.notificationToast.untilHidden();
        expect(yield planner.workItemList.hasWorkItem(childWorkItem.title)).toBeTruthy();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.createNewLabel(c.newLabel1);
        yield planner.quickPreview.close();
        expect(yield planner.workItemList.hasWorkItem(childWorkItem.title)).toBeTruthy();
    }));
    it('list should not update when new iteration is added', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem(), childWorkItem = {
            "title": 'test list is not updated when new iteration is added',
            "type": 'Experience'
        };
        expect(yield planner.workItemList.hasWorkItem(title)).toBeTruthy();
        yield planner.workItemList.workItem(title).clickInlineQuickAdd();
        yield planner.createInlineWorkItem(childWorkItem);
        yield planner.quickPreview.notificationToast.untilHidden();
        expect(yield planner.workItemList.hasWorkItem(childWorkItem.title)).toBeTruthy();
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.addNewIteration(c.newIteration1, c.iteration3);
        yield planner.iteration.clickCreateIteration();
        expect(yield planner.workItemList.hasWorkItem(childWorkItem.title)).toBeTruthy();
    }));
    it('matching child should be expanded initially', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "child", "type": 'Bug' }, workItemTitle4 = { "title": "Workitem_Title_4" };
        yield planner.sidePanel.clickRequirement();
        yield planner.workItemList.workItem(workItemTitle4.title).clickInlineQuickAdd();
        yield planner.createInlineWorkItem(workitemname);
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.sidePanel.clickScenarios();
        yield planner.waitUntilUrlContains('typegroup.name:Scenarios');
        yield planner.sidePanel.clickRequirement();
        yield planner.waitUntilUrlContains('typegroup.name:Requirements');
        yield planner.workItemList.overlay.untilAbsent();
        expect(yield planner.workItemList.hasWorkItem(workitemname.title)).toBeTruthy();
    }));
    it('clicking on label should filter the workitem list by label', () => __awaiter(this, void 0, void 0, function* () {
        let labelFilter = 'label: ' + c.label, workItemTitle4 = { "title": "Workitem_Title_4" };
        yield planner.sidePanel.clickRequirement();
        yield planner.waitUntilUrlContains('typegroup.name:Requirements');
        yield planner.workItemList.clickWorkItem(workItemTitle4.title);
        yield planner.quickPreview.addLabel(c.label);
        yield planner.quickPreview.close();
        yield planner.workItemList.clickWorkItemLabel(workItemTitle4.title);
        expect(yield planner.header.getFilterConditions()).toContain(labelFilter);
        yield planner.header.clickShowTree();
        expect(yield planner.header.getFilterConditions()).toContain(labelFilter);
    }));
    it('should update the workitem List on workitem edit', () => __awaiter(this, void 0, void 0, function* () {
        let workitem = { 'title': 'TITLE_TEXT' };
        yield planner.header.selectFilter('State', 'new');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.createWorkItem(workitem);
        yield planner.workItemList.clickWorkItem(workitem.title);
        yield planner.quickPreview.changeStateTo('open');
        yield planner.quickPreview.notificationToast.untilCount(1);
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.quickPreview.close();
        expect(yield planner.workItemList.isTitleTextBold(workitem.title)).not.toContain('bold');
    }));
    it('should make the title bold based on filter when adding a new workitem', () => __awaiter(this, void 0, void 0, function* () {
        let workitem = { 'title': 'Scenario' };
        yield planner.header.selectFilter('State', 'new');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.createWorkItem(workitem);
        expect(yield planner.workItemList.hasWorkItem(workitem.title)).toBeTruthy();
        expect(yield planner.workItemList.isTitleTextBold(workitem.title)).toContain('bold');
    }));
    it('should filter the workitem list by Assignee', () => __awaiter(this, void 0, void 0, function* () {
        let labelFilter = 'assignee: Unassigned';
        yield planner.workItemList.overlay.untilHidden();
        let countUnassignedWorkItem = yield planner.workItemList.getUnassignedWorkItemCount(' Unassigned ');
        yield planner.header.selectFilter('Assignee', 'Unassigned');
        yield planner.workItemList.overlay.untilHidden();
        yield protractor_1.browser.sleep(1000);
        expect(yield planner.header.getFilterConditions()).toContain(labelFilter);
        expect(yield planner.workItemList.datatableRow.count()).toEqual(countUnassignedWorkItem);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya0l0ZW1UYWJsZVRlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtJdGVtVGFibGVUZXN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxxREFBc0Q7QUFFdEQsc0NBQXNDO0FBR3RDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLEVBQUU7SUFDMUMsSUFBSSxPQUFvQixDQUFDO0lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWhDLFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDcEIsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEdBQUcsSUFBSSxxQkFBVyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDckIsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBRSxHQUFRLEVBQUU7UUFDbkIsTUFBTSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFTLEVBQUU7UUFDNUQsTUFBTSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxD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