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
describe('Quick preview tests: ', () => {
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
    it('should open quickpreview and apply label', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.clickWorkItem(c.workItemTitle2);
        yield planner.quickPreview.addLabel(c.label2);
        expect(yield planner.quickPreview.getLabels()).toContain(c.label2);
    }));
    it('should open quickpreview and create new label', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "test labels" };
        yield planner.createWorkItem(workitemname);
        yield planner.workItemList.clickWorkItem(workitemname.title);
        yield planner.quickPreview.createNewLabel(c.newLabel);
        yield planner.quickPreview.notificationToast.untilHidden();
        expect(yield planner.quickPreview.getLabels()).toContain(c.newLabel);
    }));
    it('should link a workitem', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "link test" }, linkType = 'blocks', searchWorkItem = '3-Workitem_Title_4', workItemTitle17 = 'Workitem_Title_4';
        yield planner.createWorkItem(workitemname);
        yield planner.workItemList.clickWorkItem(workitemname.title);
        yield planner.quickPreview.addLink(linkType, searchWorkItem, workItemTitle17);
        yield planner.quickPreview.linklistItem.untilTextIsPresent(workItemTitle17);
        expect(yield planner.quickPreview.getLinkedItems()).toContain(workItemTitle17);
    }));
    it('should open quick preview and edit the title', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.updateTitle(c.editWorkItemTitle1);
        yield planner.quickPreview.notificationToast.untilHidden();
        expect(yield planner.quickPreview.titleInput.getAttribute('value')).toBe('Title Text "<0>"');
    }));
    it('description box should not be open for wis', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "quickpreview test" };
        yield planner.createWorkItem(workitemname);
        yield planner.workItemList.clickWorkItem(workitemname.title);
        yield planner.quickPreview.openDescriptionBox();
        expect(yield planner.quickPreview.isSaveButtonDisplayed()).toBeTruthy();
        // Open another WI(Note: the description box is still in edit mode)
        yield planner.workItemList.clickWorkItem(c.workItemTitle2);
        // The description box should not be in edit mode
        expect(yield planner.quickPreview.isSaveButtonDisplayed()).toBeFalsy();
    }));
    it('should close assignee dropdown when clicked outside', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.clickWorkItem(c.workItemTitle2);
        yield planner.quickPreview.assigneeDropdown.clickWhenReady();
        expect(yield planner.quickPreview.assigneeDropdownMenu.getAttribute('className')).toContain('show');
        yield planner.quickPreview.titleInput.clickWhenReady();
        expect(yield planner.quickPreview.assigneeDropdownMenu.getAttribute('className')).not.toContain('show');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tQcmV2aWV3LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWlja1ByZXZpZXcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHFEQUFzRDtBQUN0RCxzQ0FBc0M7QUFHdEMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUNyQyxJQUFJLE9BQW9CLENBQUM7SUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFaEMsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QixNQUFNLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNyQixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEdBQVMsRUFBRTtRQUN4RCxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFB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