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
const base_element_1 = require("./base.element");
class ModalDialog extends base_element_1.BaseElement {
    constructor(element, name) {
        super(element, name);
        this.content = new base_element_1.BaseElement(this.$('.modal-content'));
        // optional
        this.footer = new base_element_1.BaseElement(this.content.$('.modal-footer'));
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.content.ready();
        });
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            this.log('Opened');
            return this;
        });
    }
}
exports.ModalDialog = ModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxfZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWxfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxpREFBNkM7QUFFN0MsaUJBQXlCLFNBQVEsMEJBQVc7SUFLMUMsWUFBWSxPQUFzQixFQUFFLElBQWE7UUFDL0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUx2QixZQUFPLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELFdBQVc7UUFDWCxXQUFNLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFJMUQsQ0FBQztJQUVLLEtBQUs7OztZQUNULE1BQU0sZUFBVyxXQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ1IsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0Y7QUFuQkQsa0NBbUJDIn0=