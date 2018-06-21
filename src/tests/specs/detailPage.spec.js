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
describe('Detail View test: ', () => {
    let planner;
    let c = new support.Constants();
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield support.desktopTestSetup();
        planner = new planner_1.PlannerPage(protractor_1.browser.baseUrl);
        yield planner.openInBrowser();
        yield planner.waitUntilUrlContains('typegroup');
        yield planner.ready();
    }));
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield planner.waitUntilUrlContains('typegroup');
        yield planner.ready();
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("document.getElementsByClassName('f8-detail--close')[0].click()");
        yield planner.quickPreview.notificationToast.untilHidden();
    }));
    it('should open detail view and apply label', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "detail page test" };
        yield planner.createWorkItem(workitemname);
        yield planner.workItemList.openDetailPage(workitemname.title);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(workitemname.title);
        yield planner.detailPage.addLabel(c.label);
        expect(yield planner.detailPage.getLabels()).toContain(c.label);
    }));
    it('should update title and description', () => __awaiter(this, void 0, void 0, function* () {
        let workitemname = { "title": "detail page title test" }, updatedWorkItem = {
            title: "detail page title updated",
            description: 'New WorkItem Description'
        };
        yield planner.createWorkItem(workitemname);
        yield planner.workItemList.openDetailPage(workitemname.title);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(workitemname.title);
        yield planner.detailPage.updateTitle(updatedWorkItem.title);
        yield planner.detailPage.updateDescription(updatedWorkItem.description);
        expect(yield planner.detailPage.titleInput.getAttribute('value')).toBe(updatedWorkItem.title);
        expect(yield planner.detailPage.getDescription()).toBe(updatedWorkItem.description);
    }));
    it('should associate workitem with an Area', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.openDetailPage(c.workItemTitle2);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(c.workItemTitle2);
        yield planner.detailPage.addArea(c.dropdownareaTitle1);
        expect(yield planner.detailPage.getArea()).toBe(c.areaTitle1);
    }));
    it('should associate workitem with an Iteration', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.openDetailPage(c.workItemTitle2);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(c.workItemTitle2);
        yield planner.detailPage.addIteration(c.dropdownIteration1);
        expect(yield planner.detailPage.getIteration()).toBe(c.iteration1);
    }));
    it('should add comment', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.openDetailPage(c.workItemTitle2);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(c.workItemTitle2);
        yield planner.detailPage.addCommentAndSave(c.comment);
        expect(yield planner.detailPage.getComments()).toContain(c.comment);
    }));
    it('should link a workitem', () => __awaiter(this, void 0, void 0, function* () {
        let linkType = 'blocks', searchWorkItem = '2-Workitem_Title_3', Workitem_Title_3 = 'Workitem_Title_3';
        yield planner.workItemList.openDetailPage(c.workItemTitle2);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(c.workItemTitle2);
        yield planner.detailPage.addLink(linkType, searchWorkItem, Workitem_Title_3);
        expect(yield planner.detailPage.getLinkedItems()).toContain(Workitem_Title_3);
    }));
    it('should change the state of workitem', () => __awaiter(this, void 0, void 0, function* () {
        yield planner.workItemList.openDetailPage(c.workItemTitle2);
        yield planner.waitUntilUrlContains('detail');
        yield planner.detailPage.titleInput.untilTextIsPresentInValue(c.workItemTitle2);
        yield planner.detailPage.changeState('open');
        yield planner.detailPage.stateToggle.untilTextIsPresent('open');
        expect(planner.detailPage.stateToggle.getTextWhenReady()).toContain('open');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsUGFnZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsUGFnZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMscURBQXNEO0FBQ3RELHNDQUFzQztBQUd0QyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2xDLElBQUksT0FBb0IsQ0FBQztJQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoQyxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakMsT0FBTyxHQUFHLElBQUkscUJBQVcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE1BQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlCLE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUUsR0FBUyxFQUFFO1FBQ3JCLE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUM5RixNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFTLEVBQUU7UUFDdkQsSUFBSSxZQUFZLEdBQUcsRUFBQyxPQUFP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