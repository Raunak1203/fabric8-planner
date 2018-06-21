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
const ui = require("../../ui");
class Iteration extends ui.BaseElement {
    constructor() {
        super(...arguments);
        this.iterationDialog = new ui.BaseElement(this.$('.modal-content'), 'iteration Dialog');
        this.iterationName = new ui.TextInput(this.iterationDialog.$('#iteration-name'), 'Iteration text input');
        this.parentIteration = new ui.TextInput(this.iterationDialog.$('#parent-iteration'), 'parent iteration');
        this.parentDropdownList = new ui.DropdownMenu(this.iterationDialog.$('.f8-iteration-modal-list'));
        this.parentDropdown = new ui.Dropdown(this.parentIteration, this.parentDropdownList, 'parent iteration dropdown');
        this.createIterationButton = new ui.Button(this.iterationDialog.$('#create-iteration-button'), 'Create Iteration button');
        this.datePickerDiv = new ui.BaseElement(this.$('.datepicker-container'), 'date picker div');
        this.showStartDateCalendar = new ui.Clickable(this.datePickerDiv.$$('.selection.inputnoteditable').first(), 'start date calendar');
        this.showEndDateCalendar = new ui.Clickable(this.datePickerDiv.$$('.selection.inputnoteditable').last(), 'End date calendar');
        this.calendarDiv = new ui.BaseElement(this.$('.selector.selectorarrow.selectorarrowleft'), '');
        this.selectStartdate = new ui.Clickable(this.$$('.datevalue.currmonth').first(), ' select start date');
        this.selectEndDate = new ui.Clickable(this.$$('.datevalue.currmonth').last(), ' select end date');
        this.month = new ui.Clickable(this.$('.headermonthtxt'), 'month');
        this.year = new ui.Clickable(this.$('.headeryeartxt .headerlabelbtn'), 'year');
        this.cancel = new ui.Button(this.iterationDialog.$('#cancel-iteration-button'), 'Cancel Iteration button');
    }
    addNewIteration(iterationName, parentIteration, withDates) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.iterationName.enterText(iterationName);
            if (parentIteration) {
                yield this.parentIteration.enterText(parentIteration);
                yield this.parentDropdown.select(parentIteration);
            }
            if (withDates) {
                yield this.selectCalendarDate();
            }
        });
    }
    editIteration(iterationName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.iterationName.clear();
            yield this.iterationName.enterText(iterationName);
            yield this.createIterationButton.clickWhenReady();
        });
    }
    selectCalendarDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showStartDateCalendar.clickWhenReady();
            yield this.selectStartdate.clickWhenReady();
            yield this.showEndDateCalendar.clickWhenReady();
            yield this.selectEndDate.clickWhenReady();
        });
    }
    getMonth() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showStartDateCalendar.clickWhenReady();
            let month = yield this.month.getTextWhenReady();
            return month;
        });
    }
    getYear() {
        return __awaiter(this, void 0, void 0, function* () {
            let year = yield this.year.getTextWhenReady();
            return year;
        });
    }
    clickCreateIteration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createIterationButton.clickWhenReady();
            yield this.createIterationButton.untilHidden();
        });
    }
    getLastDayOfMonth() {
        return __awaiter(this, void 0, void 0, function* () {
            let day = yield this.selectEndDate.getAttribute("innerText");
            return day;
        });
    }
    clickCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cancel.clickWhenReady();
            yield this.cancel.untilHidden();
        });
    }
}
exports.Iteration = Iteration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSwrQkFBK0I7QUFFL0IsZUFBdUIsU0FBUSxFQUFFLENBQUMsV0FBVztJQUE3Qzs7UUFFRSxvQkFBZSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRixrQkFBYSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkcsb0JBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25HLHVCQUFrQixHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDN0YsbUJBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQy9CLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsMkJBQTJCLENBQzNCLENBQUM7UUFDRiwwQkFBcUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3BILGtCQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlFLDBCQUFxQixHQUFHLElBQUksRUFBRSxD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