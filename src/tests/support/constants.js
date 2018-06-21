"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
    constructor() {
        this.attribute1 = "Iteration";
        this.attribute2 = "Label";
        this.attribute3 = "Creator";
        this.attribute4 = "Assignees";
        this.dropdownareaTitle1 = 'Area_1';
        this.dropdownareaTitle2 = 'Area_2';
        this.dropdownIteration1 = 'Iteration_1/Iteration1_1';
        this.dropdownIteration2 = 'Iteration_1';
        this.dropdownIteration_2 = 'Iteration_2';
        this.label = 'sample_label_1';
        this.updateIteration = 'Iteration_2123';
        this.label1 = 'Example Label 1';
        this.label2 = 'sample_label_2';
        this.linkType = 'blocks';
        this.newLabel = "new label";
        this.newLabel1 = "new label 1";
        this.newIteration = 'new Iteration';
        this.newIteration1 = 'new Iteration 1';
        this.areaTitle1 = '/' + process.env.SPACE_NAME + '/Area_1';
        this.areaTitle2 = '/' + process.env.SPACE_NAME + '/Area_2';
        this.iteration1 = '/' + process.env.SPACE_NAME + '/Iteration_1/Iteration1_1';
        this.iteration2 = '/' + process.env.SPACE_NAME + '/Iteration_2';
        this.parentIteration = 'Iteration_2';
        this.iteration3 = '/' + process.env.SPACE_NAME;
        this.newWorkItem1 = {
            title: "Workitem Title",
            description: "Describes the work item"
        };
        this.newWorkItem2 = {
            title: "Workitem Title 1"
        };
        this.newWorkItem3 = {
            title: "New Workitem"
        };
        this.updatedWorkItem = {
            title: 'New Workitem Title',
            description: 'New WorkItem Description'
        };
        this.workItemTitle2 = 'Workitem_Title_2';
        this.user1 = process.env.USER_FULLNAME;
        this.editWorkItemTitle1 = 'Title Text "<0>"';
        // Required since we need 2 users. Do not remove
        this.user2 = this.user1;
        this.user_avatar = 'https://www.gravatar.com/avatar/f56b4884b4041f14b13d919008fd7d44.jpg&s=25';
        this.comment = "new comment";
        this.randomText = "zxz";
    }
}
exports.Constants = Constants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQUNFLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDekIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsUUFBUSxDQUFDO1FBQzlCLHVCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUM5Qix1QkFBa0IsR0FBRywwQkFBMEIsQ0FBQztRQUNoRCx1QkFBa0IsR0FBRyxhQUFhLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QixvQkFBZSxHQUFHLGdCQUFnQixDQUFBO1FBQ2xDLFdBQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUMzQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxhQUFhLENBQUM7UUFDMUIsaUJBQVksR0FBRSxlQUFlLENBQUM7UUFDOUIsa0JBQWEsR0FBRSxpQkFBaUIsQ0FBQztRQUNqQyxlQUFVLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN0RCxlQUFVLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN0RCxlQUFVLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDO1FBQ3hFLGVBQVUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzNELG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDMUMsaUJBQVksR0FBRztZQUNiLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN2QyxDQUFDO1FBQ0YsaUJBQVksR0FBRztZQUNiLEtBQUssRUFBRSxrQkFBa0I7U0FDMUIsQ0FBQztRQUNGLGlCQUFZLEdBQUc7WUFDYixLQUFLLEVBQUcsY0FBYztTQUN2QixDQUFDO1FBQ0Ysb0JBQWUsR0FBRztZQUNoQixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQztRQUNGLG1CQUFjLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsVUFBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ2xDLHVCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ3hDLGdEQUFnRDtRQUNoRCxVQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLDJFQUEyRSxDQUFDO1FBQzFGLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFDeEIsZUFBVSxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0NBQUE7QUEvQ0QsOEJBK0NDIn0=