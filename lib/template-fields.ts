import { Label } from "@radix-ui/react-dropdown-menu";

export interface TemplateField {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "date" | "email";
  placeholder: string;
  required: boolean;
}

export const commonFields: TemplateField[] = [
  {
    name: "company_name",
    label: "Your Company Name",
    type: "text",
    placeholder: "Acme Corp",
    required: true,
  },
  {
    name: "client_name",
    label: "Client Name",
    type: "text",
    placeholder: "ABC industries",
    required: true,
  },
  {
    name:"user_assigned",
    label:"submitted_by",
    type:"text",
    placeholder: "Jane Doe",
    required:true
  },
  {
    name:"user_title",
    label:"Your title",
    type:"text",
    placeholder:"Senior Consultant",
    required:true
  },
  {
    name:"client_contact_first",
    label:"Client contact first name",
    type:"text",
    placeholder:"Njoki",
    required:false
  },
  {
    name:"client_contact_last",
    label:"Client contact last name",
    type:"text",
    placeholder:"Mwai",
    required:false
  },
  {
    name:"date_submitted",
    label: "Date Submitted",
    type:"date",
    placeholder:new Date().toISOString().substring(0,10),
    required:true
  }
];

export const templateFields: Record<string, TemplateField[]> = {
  "business proposal": [
    {
        name:"user_phone",
        label: "User Phone",
        type:"number",
        placeholder:"0778567890",
        required:true
    },
    {
        name:"user_email",
        label: "User Email",
        type:"email",
        placeholder:"jkhhz@gmail.com",
        required:true
    },
    {
        name:"agency_name",
        label: "Agency Name",
        type:"text",
        placeholder:"Toria Agency",
        required:true
    },
    {
      name: "project_title",
      label: "Project Title",
      type: "text",
      placeholder: "Website Redesign Project",
      required: true,
    },
    {
      name: "project_description",
      label: "Project Description",
      type: "textarea",
      placeholder: "Describe the Project scope and objectives ...",
      required: true,
    },
    {
      name: "project_duration",
      label: "Project Duration",
      type: "text",
      placeholder: "3 months",
      required: true,
    },
    {
      name: "budget_total",
      label: "Total Budget",
      type: "number",
      placeholder: "50000",
      required: true,
    },
    {
      name: "total_investments",
      label: "Total Investments",
      type: "number",
      placeholder: "50000",
      required: true,
    },
    {
      name: "timeline",
      label: "Project Timeline",
      type: "text",
      placeholder: "3 months",
      required: true,
    },
    {
      name: "contact_email",
      label: "Contact email",
      type: "email",
      placeholder: "contact@company.gmail",
      required: true,
    },
    {
      name: "consultant_name",
      label: "Consultant name",
      type: "text",
      placeholder: "Lydia Consultant",
      required: true,
    },
    {
      name: "consultant_title",
      label: "Consultant Title",
      type: "text",
      placeholder: " Lawyer",
      required: true,
    },
  ],
};
