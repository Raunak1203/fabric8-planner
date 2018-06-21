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
describe('Iteration test', () => {
    let planner;
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
    it('should create a new iteration', () => __awaiter(this, void 0, void 0, function* () {
        let newIteration = 'new Iteration';
        let iteration3 = '/' + process.env.SPACE_NAME;
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.addNewIteration(newIteration, null, true);
        let month = yield planner.iteration.getMonth();
        let year = yield planner.iteration.getYear();
        let lastDayOfMonth = yield planner.iteration.getLastDayOfMonth();
        yield planner.iteration.clickCreateIteration();
        expect(yield planner.sidePanel.getIterationDate()).toContain('new Iteration [Active]', 'Active test failed');
        expect(yield planner.sidePanel.getIterationDate()).toContain(`${month} 1, ${year}`);
        expect(yield planner.sidePanel.getIterationDate()).toContain(`${month} ${lastDayOfMonth}, ${year}`);
    }));
    it('should create a new child iteration', () => __awaiter(this, void 0, void 0, function* () {
        let newIteration = 'new Iteration1';
        let parentIteration = '/' + process.env.SPACE_NAME + '/Iteration_2';
        let iteration = 'Iteration_2';
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.addNewIteration(newIteration, parentIteration);
        yield planner.iteration.clickCreateIteration();
        yield planner.sidePanel.clickExpander(iteration);
        expect(yield planner.sidePanel.getIterationList()).toContain(newIteration);
    }));
    it('updating iteration should update workitem associated to iteration', () => __awaiter(this, void 0, void 0, function* () {
        let dropdownIteration1 = 'new Iteration2', updateIteration = 'Iteration 0123', workItemTitle1 = 'Workitem_Title_2';
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.addNewIteration(dropdownIteration1);
        yield planner.iteration.clickCreateIteration();
        yield planner.workItemList.workItem(workItemTitle1).openQuickPreview();
        yield planner.quickPreview.addIteration(dropdownIteration1);
        yield planner.quickPreview.close();
        expect(yield planner.workItemList.iterationText(workItemTitle1)).toBe(dropdownIteration1);
        yield planner.sidePanel.selectIterationKebab(dropdownIteration1);
        yield planner.sidePanel.openIterationDialogue();
        yield planner.iteration.editIteration(updateIteration);
        yield planner.quickPreview.notificationToast.untilCount(1);
        expect(yield planner.workItemList.iterationText(workItemTitle1)).toBe(updateIteration);
    }));
    // Regression test for https://github.com/openshiftio/openshift.io/issues/3318
    it('Iteration modal should have sane values', () => __awaiter(this, void 0, void 0, function* () {
        let iterationName = "issue-3318";
        // Create iteration "issue-3318"
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.addNewIteration(iterationName);
        yield planner.iteration.clickCreateIteration();
        yield protractor_1.browser.sleep(1000);
        // Ensure dropdown list has only 1 "issue-3318"
        yield planner.sidePanel.createNewIteration();
        yield planner.iteration.parentIteration.enterText(iterationName);
        let val = yield planner.iteration.parentDropdownList.getTextWhenReady();
        // Ensure val is exactly the value we expect it to be
        expect(val).toBe('/' + process.env.SPACE_NAME + '/' + iterationName);
        yield planner.iteration.clickCancel();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmF0aW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVyYXRpb24uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHFEQUFzRDtBQUN0RCxzQ0FBc0M7QUFHdEMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5QixJQUFJLE9BQW9CLENBQUM7SUFFekIsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QixNQUFNLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNyQixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFFLEdBQVEsRUFBRTtRQUNuQixNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFLEdBQVMsRUFBRTtRQUM3QyxJQUFJLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQzlDLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLElBQUksY0FBYyxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdHLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtRQUNuRCxJQUFJLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxJQUFJLGVBQWUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO1FBQ3BFLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUM5QixNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN2RSxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMvQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1FQUFtRSxFQUFFLEdBQVEsRUFBRTtRQUNoRixJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixFQUN2QyxlQUFlLEdBQUcsZ0JBQWdCLEVBQ2xDLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztRQUV0QyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUQsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFL0MsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3ZFLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRixNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRSxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRCxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILDhFQUE4RTtJQUM5RSxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBUSxFQUFFO1FBQ3RELElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNqQyxnQ0FBZ0M7UUFDaEMsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0MsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMvQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLCtDQUErQztRQUMvQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4RSxxREFBcUQ7UUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUEifQ==