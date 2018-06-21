"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../support");
class Logging {
    constructor() {
        this.name = '';
    }
    log(action, ...msg) {
        let className = this.constructor.name;
        support_1.info(`${action}: ${className}('${this.name}')`, ...msg);
    }
    debug(context, ...msg) {
        let className = this.constructor.name;
        support_1.debug(`... ${className}('${this.name}'): ${context}`, ...msg);
    }
}
exports.Logging = Logging;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUM7QUFFdkM7SUFBQTtRQUNFLFNBQUksR0FBVyxFQUFFLENBQUM7SUFXcEIsQ0FBQztJQVRDLEdBQUcsQ0FBQyxNQUFjLEVBQUUsR0FBRyxHQUFhO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3RDLGNBQUksQ0FBQyxHQUFHLE1BQU0sS0FBSyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFlLEVBQUUsR0FBRyxHQUFhO1FBQ3JDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3RDLGVBQUssQ0FBQyxPQUFPLFNBQVMsS0FBSyxJQUFJLENBQUMsSUFBSSxPQUFPLE9BQU8sRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBWkQsMEJBWUMifQ==