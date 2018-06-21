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
const ui = require("./../../ui");
const support = require("./../../support");
class WorkItemQuickPreview extends ui.BaseElement {
    constructor(ele, name = '') {
        super(ele, name);
        // TODO - move loading animation out of here. It doesn't belong here.
        this.loadingAnimation = new ui.BaseElementArray(protractor_1.$$('.spinner'), 'Loading spinner animation');
        this.notificationToast = new ui.BaseElementArray(protractor_1.$$('pfng-toast-notification'), 'Notification Toast');
        /* UI elements of the Top section of the workitem preview */
        this.closeButton = new ui.Button(this.$('.f8-detail--close'), 'WorkItem Quick Preview close button');
        this.stateDiv = new ui.BaseElement(this.$('#wi-preview-state'), ' State toggle');
        this.iterationDropdownCloseButton = new ui.Button(this.$('.iteration-dropdown .close-pointer'), 'Iteration dropdown close button');
        this.areaDropdownCloseButton = new ui.Button(this.$('.area-dropdown .close-pointer'), 'Area dropdown close button');
        this.stateDropdown = new ui.Dropdown(this.$('.dropdown-toggle'), this.$('#wi-status-dropdown'), 'WorkItem State dropdown');
        this.fullDetailButton = new ui.Clickable(this.$('span.dib'), 'View full details button');
        this.titleDiv = new ui.BaseElement(this.$('#wi-title-div'), 'Workitem title div');
        this.titleInput = new ui.TextInput(this.titleDiv.$('textarea'), 'WorkItem Title Input');
        this.titleSaveButton = new ui.Button(this.titleDiv.$('.inlineinput-btn-save'), 'WorkItem Title Save button');
        this.titleCancelButton = new ui.Button(this.titleDiv.$('.inlineinput-btn-cancel'), 'Workitem Title cancel button');
        this.titleErrorMessage = new ui.BaseElement(this.$('.error-message small'), 'WorkItem Title error message');
        /* UI elements for the middle section of the workitem preview */
        this.assigneeDropdownSelector = new ui.BaseElement(this.$('assignee-selector'), ' assignee selector');
        this.assigneeDropdown = new ui.Dropdown(this.$('#f8-add-assignee'), this.$('assignee-selector ul.select-dropdown-menu'), 'Assignee Select dropdown');
        this.assigneeDropdownCloseButton = new ui.Button(this.$('#f8-add-assignee-dropdown .close-pointer'), 'Assignee dropdown close button');
        this.assigneeDropdownMenu = new ui.BaseElement(this.$('assignee-selector div.select-dropdown'), 'Assignee dropdown menu');
        this.assigneeDiv = new ui.BaseElement(this.$('f8-assignee'), 'Assignee List Div');
        this.areaDiv = new ui.BaseElement(this.$('.area-dropdown'), 'Assignee List Div');
        this.areaDropdown = new ui.Dropdown(this.areaDiv.$('f8-select-dropdown>div>span'), this.areaDiv.$('.select-dropdown-menu'), 'Area select dropdown');
        this.iterationDiv = new ui.BaseElement(this.$('.iteration-dropdown'), 'Iteration List Div');
        this.iterationDropdown = new ui.Dropdown(this.iterationDiv.$('f8-select-dropdown>div>span'), this.iterationDiv.$('.select-dropdown-menu'), 'Iteration select dropdown');
        this.iterationInput = new ui.TextInput(this.iterationDiv.$('.select-dropdown-search-input'), 'Iteration input');
        this.labelDropdown = new ui.Dropdown(this.$('#labelSelector .add-label'), this.$('#labelSelector ul.select-dropdown-menu'), 'Label Select dropdown');
        this.labelsDiv = new ui.BaseElement(this.$('.f8-detail__labels'), ' labels Div');
        this.labels = new ui.BaseElement(this.labelsDiv.$('.label-wrapper'), ' labels ');
        this.labelListDiv = new ui.BaseElementArray(this.labelsDiv.$$('f8-label .label-wrapper>span'), 'label list Div');
        this.labelDropDownDiv = new ui.BaseElement(this.$('#labelSelector .select-dropdown'), 'dropdown div');
        this.labelDropdownCloseButton = new ui.Clickable(this.labelDropDownDiv.$('.close-pointer'), 'label dropdown close Button');
        this.createLabelButton = new ui.Clickable(this.labelDropDownDiv.$('.create-label-button'), 'Create new label');
        this.createLabelDiv = new ui.BaseElement(this.$('.create-label'), 'create label div');
        this.createLabelInput = new ui.TextInput(this.createLabelDiv.$('.create-label-input'), 'create label input');
        this.createLabelCancel = new ui.Button(this.createLabelDiv.$('.pficon-close'), 'create label cancel');
        this.createLabelSaveButton = new ui.Button(this.createLabelDiv.$('.fa-check'), 'create label save button');
        this.descriptionDiv = new ui.BaseElement(this.$('#wi-desc-div'), 'WorkItem Description Div');
        this.descriptionEditIcon = new ui.Clickable(this.descriptionDiv.$('i'), 'WorkItem Description Edit icon');
        this.descriptionTextarea = new ui.TextInput(this.descriptionDiv.$('.editor-box'), 'WorkItem Description Input');
        this.descriptionSaveButton = new ui.Button(this.descriptionDiv.$('.action-btn.btn-save'), 'WorkItem Description Save Button');
        this.descriptionCancelButton = new ui.Button(this.descriptionDiv.$$('.action-btn.btn').first(), 'WorkItem Description Save Button');
        this.creatorusername = new ui.BaseElement(this.$('#WI_details_reporter_user'), 'WorkItem creator div');
        this.creatorAvatar = new ui.BaseElement(this.$('#WI_details_reporter_img>img'), 'Creator Avatar URL');
        /* UI elements for the bottom section of the workitem preview */
        this.linksDiv = new ui.BaseElement(protractor_1.$('#wi-link'), 'WorkItem links div');
        this.linksToggleButton = new ui.Clickable(this.linksDiv.$('.f8-toggle-caret'), 'WorkItem Links toggle button');
        this.createLinkButton = new ui.Button(this.linksDiv.$('#create-link-button'), 'Create link Button');
        this.linkTypeDropdown = new ui.Dropdown(this.$('#wi-link-type'), this.$('.typeahead-long.dropdown-menu'), 'select link type dropdown');
        this.searchWorkItem = new ui.TextInput(this.linksDiv.$('#workitem-link-search'), 'Workitem search');
        this.workItemDropdown = new ui.Dropdown(this.searchWorkItem, this.$('.dropdown.open .dropdown-menu.dropdown-ul'), 'select workitem');
        this.linkButton = new ui.Button(this.linksDiv.$('#bind-link'), 'link Button');
        this.linklistItem = new ui.BaseElement(this.$('#wi-link .f8-link__list-item'), 'link lst item');
        this.commentsToggleButton = new ui.Clickable(protractor_1.$('#wi-comment .f8-toggle-caret'), 'WorkItem Comments toggle button');
        this.creationTimeDiv = new ui.BaseElement(this.$('#created_at'), 'WorkItem creation time div');
        this.commentDiv = new ui.BaseElement(this.$('.f8-comment--input'), 'comments div field');
        this.commentsField = new ui.Clickable(this.commentDiv.$('.editor-box.editor-preview.placeholder'), 'comments clickable field');
        this.commentsInputField = new ui.TextInput(this.commentDiv.$('.editor-box.editor-markdown'), 'comment input field');
        this.commentSaveButton = new ui.Button(this.commentDiv.$('.btn-save'), 'Comment save button');
        this.commentCancelButton = new ui.Button(this.commentDiv.$('.fl.btn.btn-default.pull-right.action-btn'), 'Comment cancel button');
        this.commentsText = new ui.BaseElementArray(this.$$('.f8-comment-body .comment .editor-box.editor-preview'), 'Comment List');
        this.commentsCount = new ui.BaseElement(this.$('#total_comments'), 'comment count');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            support.debug('... check if WorkItem preview is Ready');
            yield _super("ready").call(this);
            yield this.closeButton.ready();
            yield this.titleDiv.ready();
            yield this.descriptionDiv.ready();
            yield this.linksToggleButton.ready();
            yield this.commentsToggleButton.ready();
            support.debug('... check if WorkItem preview is Ready - OK');
        });
    }
    addAssignee(assignee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield this.assigneeDropdown.clickWhenReady();
            yield this.assigneeDropdown.select(assignee);
            yield this.assigneeDropdownCloseButton.clickWhenReady();
            yield this.loadingAnimation.untilCount(0);
        });
    }
    addArea(areaTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield protractor_1.browser.sleep(2000);
            yield this.areaDropdown.clickWhenReady();
            yield this.areaDropdown.select(areaTitle);
            yield this.areaDropdownCloseButton.clickWhenReady();
            yield this.loadingAnimation.untilCount(0);
        });
    }
    addIteration(iterationTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield protractor_1.browser.sleep(2000);
            yield this.iterationDropdown.clickWhenReady();
            yield this.iterationDropdown.select(iterationTitle);
            yield this.iterationDropdownCloseButton.clickWhenReady();
            yield this.notificationToast.untilCount(1);
        });
    }
    typeaHeadSearch(iterationTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield this.iterationDropdown.clickWhenReady();
            yield this.iterationInput.enterText(iterationTitle);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield this.commentsField.clickWhenReady();
            yield this.commentsInputField.enterText(comment);
        });
    }
    addCommentAndSave(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            let count = yield this.commentsCount.getTextWhenReady();
            yield this.addComment(comment);
            yield this.commentSaveButton.clickWhenReady();
            yield this.commentSaveButton.untilHidden();
            count = (parseInt(count) + 1).toString();
            yield this.commentsCount.untilTextIsPresent(count);
        });
    }
    addCommentAndCancel(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addComment(comment);
            yield this.commentCancelButton.clickWhenReady();
        });
    }
    addLabel(label, unassignLabel = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.labelDropdown.clickWhenReady();
            yield this.labelDropdown.select(label);
            yield this.labelDropdownCloseButton.clickWhenReady();
            yield this.loadingAnimation.untilCount(0);
            if (!unassignLabel) {
                yield this.labels.untilTextIsPresent(label);
            }
        });
    }
    addLink(link, searchWorkItem, workItem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.linksToggleButton.clickWhenReady();
            yield this.createLinkButton.clickWhenReady();
            yield this.linkTypeDropdown.clickWhenReady();
            yield this.linkTypeDropdown.select(link);
            yield this.searchWorkItem.enterText(searchWorkItem);
            yield protractor_1.browser.sleep(1000);
            yield this.workItemDropdown.select(workItem);
            yield this.linkButton.isPresent();
            yield this.linkButton.clickWhenReady();
        });
    }
    createNewLabel(label) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.labelDropdown.clickWhenReady();
            yield this.createLabelButton.clickWhenReady();
            yield this.createLabelInput.enterText(label);
            yield this.createLabelSaveButton.clickWhenReady();
            yield this.labelDropdown.select(label);
            yield this.labelDropdownCloseButton.clickWhenReady();
            yield this.loadingAnimation.untilCount(0);
        });
    }
    // Try to click on the close button, if it fails, wait for notification to disappear
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                try {
                    yield this.closeButton.clickWhenReady();
                    break;
                }
                catch (e) {
                    yield protractor_1.browser.sleep(1000);
                    yield this.notificationToast.untilCount(0);
                }
            }
        });
    }
    getArea() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            let area = yield this.areaDropdown.getTextWhenReady();
            return area;
        });
    }
    getCreator() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            // We need the explicit sleep since the creator name doesn't load instantly
            yield protractor_1.browser.sleep(3000);
            let creator = yield this.creatorusername.getTextWhenReady();
            return creator;
        });
    }
    getCreatorAvatar() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            let creator = yield this.creatorAvatar.getAttribute('src');
            return creator;
        });
    }
    getAssignees() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield this.assigneeDiv.untilDisplayed();
            yield protractor_1.browser.sleep(5000);
            let assigneeList = yield this.assigneeDiv.getTextWhenReady();
            return assigneeList;
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            yield this.commentDiv.scrollIntoView();
            let commentList = "";
            if (yield this.commentsText.isPresent()) {
                commentList = yield this.commentsText.getTextWhenReady();
            }
            return commentList;
        });
    }
    getCreationTime() {
        return __awaiter(this, void 0, void 0, function* () {
            let origTime = yield this.creationTimeDiv.getTextWhenReady();
            return origTime;
        });
    }
    getDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.descriptionTextarea.getTextWhenReady();
        });
    }
    getIteration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadingAnimation.untilCount(0);
            yield protractor_1.browser.sleep(1000);
            let iteration = yield this.iterationDropdown.getTextWhenReady();
            return iteration;
        });
    }
    getLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            let labelList = yield this.labelListDiv.getTextWhenReady();
            return labelList;
        });
    }
    getLinkedItems() {
        return __awaiter(this, void 0, void 0, function* () {
            let linkList = yield this.linklistItem.getTextWhenReady();
            return linkList;
        });
    }
    updateTitle(title, append = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.titleDiv.clickWhenReady();
            if (!append) {
                yield this.titleInput.clear();
            }
            yield this.titleInput.enterText(title);
            yield this.titleSaveButton.clickWhenReady();
        });
    }
    updateDescription(description, append = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openDescriptionBox();
            if (!append) {
                yield this.descriptionTextarea.clear();
            }
            yield this.descriptionTextarea.enterText(description);
            yield this.descriptionSaveButton.scrollIntoView();
            yield this.descriptionSaveButton.clickWhenReady();
            yield this.descriptionSaveButton.untilHidden();
        });
    }
    openDescriptionBox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(this.descriptionDiv).perform();
            yield this.descriptionEditIcon.clickWhenReady();
        });
    }
    isSaveButtonDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.descriptionSaveButton.isDisplayed();
            }
            catch (exception) {
                return false;
            }
        });
    }
    removeAssignee(assignee) {
        return __awaiter(this, void 0, void 0, function* () {
            // Removing the assignee is exactly similar to adding an assignee
            yield this.addAssignee(assignee);
        });
    }
    getTitleError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.titleErrorMessage.getTextWhenReady();
        });
    }
    changeStateTo(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stateDropdown.clickWhenReady();
            yield this.stateDropdown.select(state);
        });
    }
}
exports.WorkItemQuickPreview = WorkItemQuickPreview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0tcXVpY2twcmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2l0ZW0tcXVpY2twcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwyQ0FBMkQ7QUFDM0QsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUUzQywwQkFBa0MsU0FBUSxFQUFFLENBQUMsV0FBVztJQW9HdEQsWUFBWSxHQUFrQixFQUFFLE9BQWUsRUFBRTtRQUMvQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBcEduQixxRUFBcUU7UUFDckUscUJBQWdCLEdBQUcsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDeEYsc0JBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRyw0REFBNEQ7UUFDNUQsZ0JBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLHFDQUFxQyxDQUFDLENBQUM7UUFDaEcsYUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0UsaUNBQTRCLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0NBQW9DLENBQUMsRUFBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzdILDRCQUF1QixHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLEVBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM5RyxrQkFBYSxHQUFHLElBQUksRUFBRSxDQUFDLFFB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