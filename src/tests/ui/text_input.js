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
class TextInput extends base_element_1.BaseElement {
    constructor(element, name = '') {
        super(element, name);
    }
    enterText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run('enter text', () => __awaiter(this, void 0, void 0, function* () {
                yield this.ready();
                yield this.sendKeys(text);
            }));
            this.log('Entered Text');
        });
    }
}
exports.TextInput = TextInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dF9pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRleHRfaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlEQUE2QztBQUU3QyxlQUF1QixTQUFRLDBCQUFXO0lBRXhDLFlBQVksT0FBc0IsRUFBRSxPQUFlLEVBQUU7UUFDbkQsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUssU0FBUyxDQUFDLElBQVk7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBTyxFQUFFO2dCQUNwQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7S0FBQTtDQUNGO0FBYkQsOEJBYUMifQ==