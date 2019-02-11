export class Todo {
    public taskTime: string;
    public taskDesc: string;
    public taskProject: string;
    public editing: boolean;

    constructor(taskTime:string, taskDesc:string, taskProject:string,editing: boolean) {
        this.taskTime = taskTime;
        this.taskDesc = taskDesc;
        this.taskProject = taskProject;
        this.editing = editing;
    }
}