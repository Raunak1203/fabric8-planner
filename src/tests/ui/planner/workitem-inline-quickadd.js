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
const base_element_1 = require("./../base.element");
const ui_1 = require("../../ui");
class WorkItemInlineQuickAdd extends base_element_1.BaseElement {
    constructor(el, name = 'Work Item Inline Quick Add') {
        super(el, name);
        this.titleTextInlineInput = new ui_1.TextInput(this.$('input.f8-quickadd-input'), 'Work item inline Title');
        this.buttonsDiv = this.$('div.f8-quickadd__wiblk-btn.pull-right');
        this.addInlineQuickAddButton = new ui_1.Button(this.buttonsDiv.$('#quickadd-save'), 'Add Inline Quick Add Button');
        this.workItemTypeDropdown = new ui_1.Dropdown(this.$('.f8-quickadd__wiblk button.dropdown-toggle'), this.$('.f8-quickadd__wiblk .dropdown-menu'), 'WorkItem Type inline dropdown');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.addAndOpenButton.ready();
        });
    }
    addInlineWorkItem({ title, description = '', type = '' }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workItemTypeDropdown.clickWhenReady();
            yield this.workItemTypeDropdown.select(type);
            yield this.titleTextInlineInput.ready();
            yield this.titleTextInlineInput.enterText(title);
            yield this.addInlineQuickAddButton.clickWhenReady();
            // TODO add more confirmation that the item has been added
            this.log('New Inline WorkItem created', `${title} added`);
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
}
exports.WorkItemInlineQuickAdd = WorkItemInlineQuickAdd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0taW5saW5lLXF1aWNrYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2l0ZW0taW5saW5lLXF1aWNrYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBa0U7QUFJbEUsaUNBQXVEO0FBR3ZELDRCQUFvQyxTQUFRLDBCQUFXO0lBVXJELFlBQVksRUFBaUIsRUFBRSxJQUFJLEdBQUcsNEJBQTRCO1FBQ2hFLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFWbEIseUJBQW9CLEdBQUcsSUFBSSxjQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsZUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM3RCw0QkFBdUIsR0FBRyxJQUFJLFdBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDekcseUJBQW9CLEdBQUcsSUFBSSxhQUFRLENBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsNENBQTRDLENBQUMsRUFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUM1QywrQkFBK0IsQ0FDaEMsQ0FBQztJQUlGLENBQUM7SUFFSyxLQUFLOzs7WUFDVCxNQUFNLGVBQVcsV0FBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBVzs7WUFDckUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakQsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwRCwwREFBMEQ7WUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0lBRUssYUFBYTs7WUFDakIsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakQsSUFBSSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDcEUsMERBQTBEO1lBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDOUQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztLQUFBO0NBQ0Y7QUF4Q0Qsd0RBd0NDIn0=