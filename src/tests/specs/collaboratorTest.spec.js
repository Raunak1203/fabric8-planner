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
describe('Planner Collaborator Tests:', () => {
    let planner;
    let planner1;
    let c = new support.Constants();
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield support.desktopTestSetup();
        planner = new planner_1.PlannerPage(protractor_1.browser.baseUrl);
        yield planner.openInBrowser();
        let url = yield protractor_1.browser.getCurrentUrl();
        let urlPathName = yield protractor_1.browser.executeScript('return document.location.pathname');
        let URL = url.replace(urlPathName, '/rbajpai-test-preview/DO_NOT_DELETE/plan');
        planner1 = new planner_1.PlannerPage(URL);
        yield protractor_1.browser.get(URL);
        yield planner.waitUntilUrlContains('typegroup');
        yield planner.ready();
    }));
    it('Non Collaborator should not be able edit a workItem title', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 5');
        expect(yield planner1.quickPreview.titleInput.getAttribute('disabled')).toBe('true');
    }));
    it('Non Collaborator should not be able edit state of a workitem', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 4');
        expect(yield planner1.quickPreview.stateDiv.getAttribute('disabled')).toBe('true');
    }));
    it('Non collaborator should not be able to add assignee', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 4');
        expect(yield planner1.quickPreview.assigneeDropdownSelector.getTextWhenReady()).not.toBe(' Add Assignee ');
    }));
    it('Non collaborator should Comment and Save', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 4');
        yield planner1.quickPreview.addCommentAndSave(c.comment);
        expect(yield planner1.quickPreview.getComments()).toContain(c.comment);
    }));
    it('Non collaborator should not be able to update Area ', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 3');
        yield planner1.quickPreview.areaDropdown.clickWhenReady();
        expect(yield planner1.quickPreview.areaDropdown.getAttribute('class')).not.toContain('show');
    }));
    it('Non collaborator should not be able to update Iteration ', () => __awaiter(this, void 0, void 0, function* () {
        yield planner1.workItemList.clickWorkItem('Work Item 3');
        yield planner1.quickPreview.iterationDropdown.clickWhenReady();
        expect(yield planner1.quickPreview.iterationDropdown.getAttribute('class')).not.toContain('show');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFib3JhdG9yVGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sbGFib3JhdG9yVGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMscURBQXNEO0FBQ3RELHNDQUFzQztBQUd0QyxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBQzNDLElBQUksT0FBb0IsQ0FBQztJQUN6QixJQUFJLFFBQXFCLENBQUM7SUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFaEMsU0FBUyxDQUFDLEdBQVMsRUFBRTtRQUNuQixNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBRyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDdkMsSUFBSSxXQUFXLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDOUUsUUFBUSxHQUFHLElBQUkscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkRBQTJELEVBQUUsR0FBUSxFQUFFO1FBQ3hFLE1BQU0s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