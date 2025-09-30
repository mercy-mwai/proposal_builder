import { Label } from "@radix-ui/react-dropdown-menu"

export interface TemplateField{
    name:string,
    label:string,
    type: "text"| "textarea"| "number" | "date" | "email",
    placeholder: string
    required:boolean
}
export const templateFields: Record<string ,TemplateField[]> ={
    "business proposal":[
        {
            name:"company_name",
            label: "Your Company Name",
            type:"text",
            placeholder: "Acme Corp",
            required:true
        },
        {
            name:"client_name",
            label:"Client Name",
            type:"text",
            placeholder: "ABC industries",
            required:true
        },
        {
            name:"project_title",
            label: "Project Title",
            type:"text",
            placeholder: "Website Redesign Project",
            required:true
        },
        {
            name: "project_description",
            label:"Project Description",
            type:"textarea",
            placeholder:"Describe the Project scope and objectives ...",
            required:true
        },
        {
            name: "budget_total",
            label:"Total Budget",
            type:"number",
            placeholder:"50000",
            required:true
        },{name:"timeline", label:"Project Timeline", type:"text", placeholder:"3 months", required:true},
        {
            name:"contact_email",
            label: "Contact email",
            type:"email",
            placeholder: "contact@company.gmail",
            required:true
        }
    ]
}