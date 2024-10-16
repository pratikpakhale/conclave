const hrRegistration = {
  name: "hrRegistration",
  title: "HR Registration",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "company",
      title: "Organization/Company",
      type: "string",
    },
    {
      name: "sector",
      title: "Industry Sector",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "contactNo",
      title: "Contact No",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
    {
      name: "consent",
      title: "Consent",
      type: "boolean",
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
    },
  ],
};

export default hrRegistration;
