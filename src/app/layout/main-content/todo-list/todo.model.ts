export class Todo {
    public taskTime: number;
    public taskDesc: string;
    public taskProject: string;

    constructor(taskTime:number, taskDesc:string, taskProject:string) {
        this.taskTime = taskTime;
        this.taskDesc = taskDesc;
        this.taskProject = taskProject;
    }
}