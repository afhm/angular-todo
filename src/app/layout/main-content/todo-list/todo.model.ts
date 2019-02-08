export class Todo {
    public taskTime: string;
    public taskDesc: string;
    public taskProject: string;

    constructor(taskTime:string, taskDesc:string, taskProject:string) {
        this.taskTime = taskTime;
        this.taskDesc = taskDesc;
        this.taskProject = taskProject;
    }
}