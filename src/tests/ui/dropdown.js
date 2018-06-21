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
const base_element_1 = require("./base.element");
class DropdownItem extends base_element_1.BaseElement {
    constructor(element, parent, name = '') {
        super(element, name);
        this.parent = parent;
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run('ready', () => __awaiter(this, void 0, void 0, function* () {
                yield _super("ready").call(this);
                yield this.untilClickable();
            }));
        });
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(`select item: '${this.name}'`, () => __awaiter(this, void 0, void 0, function* () {
                yield this.parent.ready();
                try {
                    yield this.clickWhenReady();
                }
                catch (e) {
                    yield this.click();
                }
            }));
        });
    }
}
class DropdownMenu extends base_element_1.BaseElement {
    constructor(element, name = '') {
        super(element, name);
    }
    item(text) {
        let item = this.element(protractor_1.by.cssContainingText('li', text));
        return new DropdownItem(item, this, text);
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            // NOTE: not calling super as the menu is usually hidden and
            // supper.ready waits for item to be displayed
            yield this.untilPresent();
        });
    }
}
exports.DropdownMenu = DropdownMenu;
class Dropdown extends base_element_1.BaseElement {
    constructor(element, menuElement, name = '') {
        super(element, name);
        this.menu = new DropdownMenu(menuElement);
    }
    item(text) {
        return this.menu.item(text);
    }
    select(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.item(text).select();
        });
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run('ready', () => __awaiter(this, void 0, void 0, function* () {
                yield _super("ready").call(this);
                yield this.untilClickable();
            }));
        });
    }
}
exports.Dropdown = Dropdown;
class SingleSelectionDropdown extends Dropdown {
    constructor(element, menuElement, name = '') {
        super(element, menuElement, name);
        this.input = new base_element_1.Clickable(this.$('input.combobox[type="text"]'), '');
        this.input.name = name;
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.input.ready();
        });
    }
}
exports.SingleSelectionDropdown = SingleSelectionDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELGlEQUF3RDtBQUd4RCxrQkFBbUIsU0FBUSwwQkFBVztJQUNwQyxZQUFZLE9BQXNCLEVBQUUsTUFBcUIsRUFBRSxPQUFlLEVBQUU7UUFDMUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUssS0FBSzs7O1lBQ1QsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2pDLE1BQU0sZUFBVyxXQUFFLENBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQVMsRUFBRTtnQkFDdkQsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUM7b0JBQ0gsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUNELENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDRjtBQUdELGtCQUEwQixTQUFRLDBCQUFXO0lBRTNDLFlBQVksT0FBc0IsRUFBRSxPQUFlLEVBQUU7UUFDbkQsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUssS0FBSzs7WUFDVCw0REFBNEQ7WUFDNUQsOENBQThDO1lBQzlDLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtDQUVGO0FBakJELG9DQWlCQztBQUVELGNBQXNCLFNBQVEsMEJBQVc7SUFHdkMsWUFBWSxPQUFzQixFQUFFLFdBQTBCLEVBQUUsT0FBZSxFQUFFO1FBQy9FLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVLLE1BQU0sQ0FBQyxJQUFZOztZQUN2QixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssS0FBSzs7O1lBQ1QsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFRLEVBQUU7Z0JBQ2hDLE1BQU0sZUFBVyxXQUFFLENBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7Q0FDRjtBQXRCRCw0QkFzQkM7QUFHRCw2QkFBcUMsU0FBUSxRQUFRO0lBR25ELFlBQVksT0FBc0IsRUFBRSxXQUEwQixFQUFFLE9BQWUsRUFBRTtRQUMvRSxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUhwQyxVQUFLLEdBQUcsSUFBSSx3QkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUkvRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVLLEtBQUs7OztZQUNULE1BQU0sZUFBVyxXQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FBQTtDQUNGO0FBWkQsMERBWUMifQ==