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
const planner_1 = require("../../page_objects/planner");
const support = require("../../support");
/* Smoke Tests */
describe('Planner Smoke Tests:', () => {
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
    it('create a work item and add/remove assignee', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.createWorkItem(c.newWorkItem1);
        expect(yield planner.workItemList.hasWorkItem(c.newWorkItem1.title)).toBeTruthy();
        yield planner.workItemList.clickWorkItem(c.newWorkItem1.title);
        yield planner.quickPreview.addAssignee(c.user1 + " (me)");
        expect(yield planner.quickPreview.getAssignees()).toContain(c.user1);
        yield planner.quickPreview.close();
        yield planner.workItemList.clickWorkItem(c.newWorkItem1.title);
        yield protractor_1.browser.sleep(2000);
        yield planner.quickPreview.removeAssignee(c.user1 + " (me)");
        expect(yield planner.quickPreview.getAssignees()).not.toContain(c.user1);
        yield planner.quickPreview.close();
    }));
    it('update workitem title/description', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.createWorkItem(c.newWorkItem2);
        expect(yield planner.workItemList.hasWorkItem(c.newWorkItem2.title)).toBeTruthy();
        yield planner.workItemList.clickWorkItem(c.newWorkItem2.title);
        yield planner.quickPreview.updateTitle(c.updatedWorkItem.title);
        yield planner.quickPreview.close();
        yield planner.workItemList.clickWorkItem(c.updatedWorkItem.title);
        yield planner.quickPreview.updateDescription(c.updatedWorkItem.description);
        expect(yield planner.quickPreview.getDescription()).toBe(c.updatedWorkItem.description);
        yield planner.quickPreview.close();
        expect(yield planner.workItemList.hasWorkItem(c.newWorkItem2.title, true)).toBeFalsy();
        expect(yield planner.workItemList.hasWorkItem(c.updatedWorkItem.title)).toBeTruthy();
    }));
    it('update of empty workitem title is not allowed', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.updateTitle('');
        expect(yield planner.quickPreview.getTitleError()).toBe('Empty title not allowed');
    }));
    it('Check WorkItem creator name and image is reflected', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.clickWorkItem(c.workItemTitle2);
        yield planner.quickPreview.ready();
        expect(yield planner.quickPreview.getCreator()).toBe(c.user1);
        expect(yield planner.quickPreview.getCreatorAvatar()).toBe(c.user_avatar);
        yield planner.quickPreview.close();
    }));
    it('Associate workitem with an Area', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.addArea(c.dropdownareaTitle1);
        expect(yield planner.quickPreview.getArea()).toBe(c.areaTitle1);
        yield planner.quickPreview.close();
        yield planner.workItemList.clickWorkItem(title);
        expect(yield planner.quickPreview.getArea()).toBe(c.areaTitle1);
        yield planner.quickPreview.addArea(c.dropdownareaTitle2);
        expect(yield planner.quickPreview.getArea()).not.toBe(c.areaTitle1);
        expect(yield planner.quickPreview.getArea()).toBe(c.areaTitle2);
        yield planner.quickPreview.close();
    }));
    it('Associate/Re-associate workitem with an Iteration', () => __awaiter(this, void 0, void 0, function* () {
        //add new iteration
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.addIteration(c.dropdownIteration1);
        expect(yield planner.quickPreview.getIteration()).toBe(c.iteration1);
        yield planner.quickPreview.close();
        //update iteration
        yield planner.workItemList.clickWorkItem(title);
        expect(yield planner.quickPreview.getIteration()).toBe(c.iteration1);
        yield planner.quickPreview.addIteration(c.dropdownIteration_2);
        expect(yield planner.quickPreview.getIteration()).toBe(c.iteration2);
        //search iteration
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.typeaHeadSearch(c.randomText);
        expect(yield planner.quickPreview.iterationDropdown.menu.getTextWhenReady()).toBe('No matches found.');
        yield planner.quickPreview.iterationDropdownCloseButton.clickWhenReady();
        yield planner.quickPreview.iterationDropdown.clickWhenReady();
        expect(yield planner.quickPreview.iterationDropdown.menu.getTextWhenReady()).not.toBe('No matches found.');
    }));
    it('Scenario-Quick Add should support Scenario, papercuts and fundamentals', () => __awaiter(this, void 0, void 0, function* () {
        let wiTypes = yield planner.quickAdd.workItemTypes();
        expect(wiTypes.length).toBe(3);
        expect(wiTypes[0]).toBe('Scenario');
        expect(wiTypes[1]).toBe('Fundamental');
        expect(wiTypes[2]).toBe('Papercuts');
    }));
    it('Experiences-Quick Add should support Experience and Value proposition', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.sidePanel.clickExperience();
        let wiTypes = yield planner.quickAdd.workItemTypes();
        expect(wiTypes.length).toBe(2);
        expect(wiTypes[0]).toBe('Experience');
        expect(wiTypes[1]).toBe('Value Proposition');
    }));
    it('Requirement-Quick Add should support Feature and Bug', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.sidePanel.clickRequirement();
        let wiTypes = yield planner.quickAdd.workItemTypes();
        expect(wiTypes.length).toBe(2);
        expect(wiTypes[0]).toBe('Feature');
        expect(wiTypes[1]).toBe('Bug');
    }));
    it('Edit Comment and Save', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.createWorkItem(c.newWorkItem3);
        expect(yield planner.workItemList.hasWorkItem(c.newWorkItem3.title)).toBeTruthy();
        yield planner.workItemList.clickWorkItem(c.newWorkItem3.title);
        yield planner.quickPreview.addCommentAndSave(c.comment);
        expect(yield planner.quickPreview.getComments()).toContain(c.comment);
    }));
    it('Edit Comment and Cancel', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.addCommentAndCancel(c.comment);
        expect(yield planner.quickPreview.getComments()).not.toContain('new comment');
    }));
    it('Create custom query', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.sidePanel.clickRequirement();
        yield planner.workItemList.overlay.untilHidden();
        yield planner.header.selectFilter('State', 'in progress');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.header.saveFilters('Query 1');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.sidePanel.customQuery.untilTextIsPresent('Query 1');
        expect(yield planner.sidePanel.getMyFiltersList()).toContain('Query 1');
    }));
    it('Delete custom query', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.sidePanel.clickRequirement();
        yield planner.workItemList.overlay.untilHidden();
        yield planner.header.selectFilter('State', 'resolved');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.header.saveFilters('My filter');
        yield planner.workItemList.overlay.untilHidden();
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.sidePanel.customQuery.untilTextIsPresent('My filter');
        expect(yield planner.sidePanel.getMyFiltersList()).toContain('My filter');
        yield planner.sidePanel.selectcustomFilterKebab('My filter');
        yield planner.sidePanel.deleteCustomQuery.clickWhenReady();
        yield planner.confirmModalButton.clickWhenReady();
        yield protractor_1.browser.sleep(1000);
        expect(yield planner.sidePanel.getMyFiltersList()).not.toContain('My filter');
    }));
    it('Update work item with a label and validate description', () => __awaiter(this, void 0, void 0, function* () {
        let title = yield planner.createUniqueWorkItem();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.updateDescription("My new description");
        yield planner.quickPreview.createNewLabel("Validate description label");
        expect(yield planner.quickPreview.getLabels()).toContain("Validate description label");
        yield planner.quickPreview.close();
        yield planner.workItemList.clickWorkItem(title);
        yield planner.quickPreview.addLabel("Validate description label", true);
        expect(yield planner.quickPreview.getDescription()).toBe("My new description");
        yield planner.quickPreview.close();
    }));
    it('Create a work item and Open detail page', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.quickAdd.addAndOpenWorkItem('new detail workItem', 'Scenario');
        yield planner.quickPreview.notificationToast.untilCount(1);
        yield planner.quickPreview.notificationToast.untilHidden();
        yield planner.detailPage.closeButton.ready();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue('new detail workItem');
        yield planner.detailPage.close();
        yield planner.waitUntilUrlContains('typegroup');
        expect(yield planner.workItemList.hasWorkItem('new detail workItem')).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21va2VUZXN0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbW9rZVRlc3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUF5RDtBQUN6RCx5Q0FBeUM7QUFFekMsaUJBQWlCO0FBRWpCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsSUFBSSxPQUFvQixDQUFDO0lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWhDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDbkIsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEdBQUcsSUFBSSxxQkFBVyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDckIsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBRSxHQUFRLEVBQUU7UUFDbkIsTUFBTSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7UUFDMUQsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEYsTUFBTSxP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