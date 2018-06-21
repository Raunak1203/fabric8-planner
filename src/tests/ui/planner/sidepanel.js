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
const support = require("../../support");
const ui_1 = require("./../../ui");
class SidePanel extends ui_1.BaseElement {
    constructor(ele, name = 'WorkItem List page Side Panel') {
        super(ele, name);
        this.showHideSidePanelButton = new ui_1.Button(this.$('.f8-sidepanel--toggle'), 'show/hide side panel button');
        this.scenarioButton = new ui_1.Clickable(this.element(protractor_1.by.cssContainingText('.f8-group-filter__type', ' Scenarios')), 'Side panel Scenario button');
        this.experienceButton = new ui_1.Clickable(this.element(protractor_1.by.cssContainingText('.f8-group-filter__type', ' Experiences')), 'Side panel Experiences button');
        this.requirementsButton = new ui_1.Clickable(this.element(protractor_1.by.cssContainingText('.f8-group-filter__type .dib', ' Requirements')), 'Side panel Requirements button');
        this.iterationDiv = new ui_1.BaseElement(this.$('.f8-itr'), 'Iteration div');
        this.createIterationButton = new ui_1.Button(this.iterationDiv.$('#add-iteration-icon'), 'Side panel Add Iteration Button');
        this.iterationList = new ui_1.BaseElementArray(this.$$('.f8-itr__tree .f8-itr-name'), 'Iteration list');
        this.iterationKebab = new ui_1.Button(this.$('.dropdown-toggle'), 'Side panel Iteration Kebab Dropdown');
        this.editIteration = new ui_1.Clickable(this.element(protractor_1.by.cssContainingText('.f8-itr .dropdown.open ul>li', 'Edit')), 'Iteration Dropdown Edit Option');
        this.iterationHeader = new ui_1.BaseElementArray(this.$$('.f8-itr__header'), 'iteration header');
        this.customQuery = new ui_1.BaseElement(this.$('custom-query'), 'My filters');
        this.customQueryList = new ui_1.BaseElementArray(this.$$('.f8-cf__list-type'), ' My filters list');
        this.deleteCustomQuery = new ui_1.Clickable(this.element(protractor_1.by.cssContainingText('.f8-cf-kebab.dropdown.open ul>li', 'Delete')), 'Custom query Dropdown Delete Option');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            support.debug('... check if Side panel is Ready');
            yield _super("ready").call(this);
            yield this.showHideSidePanelButton.ready();
            yield this.scenarioButton.ready();
            yield this.experienceButton.ready();
            yield this.requirementsButton.ready();
            yield this.createIterationButton.ready();
            support.debug('... check if Side panel is Ready - OK');
        });
    }
    clickScenarios() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scenarioButton.clickWhenReady();
        });
    }
    clickExperience() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.experienceButton.clickWhenReady();
        });
    }
    clickRequirement() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.requirementsButton.clickWhenReady();
        });
    }
    createNewIteration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createIterationButton.clickWhenReady();
        });
    }
    getIterationList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            let iterationString = yield this.iterationList.getTextWhenReady();
            let iterationList = iterationString.toString().split(",");
            this.debug('iterationList : ' + iterationList);
            return iterationList;
        });
    }
    selectIterationKebab(iterationName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.element(protractor_1.by.xpath("//iteration-list-entry[.//span[text()='" + iterationName + "']]")).$('.dropdown-toggle').click();
        });
    }
    openIterationDialogue() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.editIteration.clickWhenReady();
        });
    }
    getIterationDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            let iterationList = yield this.iterationHeader.getTextWhenReady();
            let iterationList1 = iterationList.toString().replace("\n", "");
            return iterationList1;
        });
    }
    clickExpander(iterationName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.element(protractor_1.by.xpath("//iteration-list-entry[.//span[text()='" + iterationName + "']]")).$('.fa-angle-right').click();
        });
    }
    getMyFiltersList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customQuery.ready();
            let myFilterString = yield this.customQueryList.getTextWhenReady();
            let myFilterList = myFilterString.toString().split(",");
            yield this.debug('My Query list : ' + myFilterList);
            return myFilterList;
        });
    }
    selectcustomFilterKebab(queryName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.element(protractor_1.by.xpath("//li[contains(@class,'f8-cf__list-type')][.//span[text()='" + queryName + "']]")).$('.dropdown-toggle').click();
        });
    }
}
exports.SidePanel = SidePanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXBhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFFakQseUNBQXlDO0FBQ3pDLG1DQUE2RTtBQUc3RSxlQUF1QixTQUFRLGdCQUFXO0lBZXhDLFlBQVksR0FBa0IsRUFBRSxPQUFlLCtCQUErQjtRQUM1RSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZm5CLDRCQUF1QixHQUFHLElBQUksV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3JHLG1CQUFjLEdBQUcsSUFBSSxjQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3hJLHFCQUFnQixHQUFHLElBQUksY0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUMsK0JBQStCLENBQUMsQ0FBQztRQUMvSSx1QkFBa0IsR0FBRyxJQUFJLGNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEosaUJBQVksR0FBRyxJQUFJLGdCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSwwQkFBcUIsR0FBRyxJQUFJLFdBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDbEgsa0JBQWEsR0FB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