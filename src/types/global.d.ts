declare global {
  enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    CHECKBOX = "checkbox",
    SELECT = "select",
    SKELETON = "skeleton",
  }

  interface Task {
    id: string;
    name: string;
    status: "Completed" | "Not Started" | "In Progress";
    statusColor: string;
    dueDate: string;
    priorityColor: string;
    priority: string;
  }

  interface MilestoneType {
    id: string;
    name: string;
    projectName: string;
    dueDate: string;
    startDate: string;
    status: string;
    priority: string;
    statusColor: string;
    priorityColor: string;
    tasks: Task[];
  }

  type ProjectType = {
    id: string;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
    priority: string;
    statusColor: string;
    priorityColor: string;
    milestones: MilestoneType[];
  };
}

export {};
