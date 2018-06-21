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
class WorkItemQuickAdd extends ui.BaseElement {
    constructor(el, name = 'Work Item Quick Add') {
        super(el, name);
        this.titleTextInput = new ui.TextInput(this.$('input.f8-quickadd-input'), 'Work item Title');
        this.buttonsDiv = this.$('div.f8-quickadd__wiblk-btn.pull-right');
        this.addButton = new ui.Button(this.buttonsDiv.$$('button.btn.btn-primary').first(), 'Add Button');
        this.addAndOpenButton = new ui.Button(this.buttonsDiv.$$('button.btn.btn-primary').last(), 'Add and Open Button');
        this.workItemTypeDropdown = new ui.Dropdown(this.$('.f8-quickadd__wiblk button.dropdown-toggle'), this.$('.f8-quickadd__wiblk .dropdown-menu'), 'WorkItem Type dropdown');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.addAndOpenButton.ready();
        });
    }
    addWorkItem({ title, description = '', type = 'feature' }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.titleTextInput.ready();
            yield this.titleTextInput.enterText(title);
            yield this.addAndOpenButton.untilClickable();
            yield this.addButton.clickWhenReady();
            // TODO add more confirmation that the item has been added
            this.log('New WorkItem created', `${title} added`);
            // The button is enabled only when the new WI is on the list.
            yield this.addButton.untilClickable();
        });
    }
    workItemTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workItemTypeDropdown.clickWhenReady();
            let array = yield this.workItemTypeDropdown.menu.getTextWhenReady();
            // Split array, remove invalid entries and trim the result
            return array.split("\n").reduce((filtered, current) => {
                if (current) {
                    filtered.push(current.trim());
                }
                return filtered;
            }, []);
        });
    }
    addAndOpenWorkItem(title, workItemType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workItemTypeDropdown.clickWhenReady();
            yield this.workItemTypeDropdown.select(workItemType);
            yield this.titleTextInput.enterText(title);
            yield this.addAndOpenButton.clickWhenReady();
            this.log('New WorkItem created', `${title} added`);
        });
    }
}
exports.WorkItemQuickAdd = WorkItemQuickAdd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0tcXVpY2thZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JraXRlbS1xdWlja2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0JBQStCO0FBRS9CLHNCQUE4QixTQUFRLEVBQUUsQ0FBQyxXQUFXO0lBV2xELFlBQVksRUFBaUIsRUFBRSxJQUFJLEdBQUcscUJBQXFCO1FBQ3pELEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFYbEIsbUJBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDeEYsZUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM3RCxjQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUYscUJBQWdCLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNyRyx5QkFBb0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsNENBQTRDLENBQUMsRUFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUM1Qyx3QkFBd0IsQ0FDekIsQ0FBQztJQUlGLENBQUM7SUFFSyxLQUFLOzs7WUFDVCxNQUFNLGVBQVcsV0FBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxTQUFTLEVBQVk7O1lBQ3ZFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QywwREFBMEQ7WUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDbkQsNkRBQTZEO1lBQzdELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNqQixNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqRCxJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNwRSwwREFBMEQ7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUM5RCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxLQUFhLEVBQUUsWUFBbUI7O1lBQ3pELE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pELE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyRCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtDQUNGO0FBbERELDRDQWtEQyJ9