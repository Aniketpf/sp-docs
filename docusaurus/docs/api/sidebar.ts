import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/selectprism-external-apis",
    },
    {
      type: "category",
      label: "Candidates",
      items: [
        {
          type: "doc",
          id: "api/add-candidates",
          label: "Add candidates",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/attach-resume-to-candidate",
          label: "Attach resume to candidate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-candidate-assessment",
          label: "Create candidate assessment",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Interviews",
      items: [
        {
          type: "doc",
          id: "api/create-a-new-interview",
          label: "Create a new interview",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/regenerate-an-existing-interview",
          label: "Regenerate an existing interview",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-interview-results",
          label: "Get interview results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-interview-recording-details",
          label: "Get interview recording details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-interview-proctoring-data",
          label: "Get interview proctoring data",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Job Assessments",
      items: [
        {
          type: "doc",
          id: "api/get-all-job-assessments",
          label: "Get all job assessments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-job-assessment",
          label: "Create a new job assessment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/add-candidates-to-a-job-assessment",
          label: "Add candidates to a job assessment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/configure-job-assessment-questions",
          label: "Configure job assessment questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/configure-job-assessment-questions-without-id-in-path",
          label: "Configure job assessment questions (without ID in path)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-interview-statistics-for-a-job-assessment",
          label: "Get interview statistics for a job assessment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "api/generate-o-auth-access-token",
          label: "Generate OAuth access token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-o-auth-client-credentials",
          label: "Generate OAuth client credentials",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Search & Match",
      items: [
        {
          type: "doc",
          id: "api/search-and-match-webhook",
          label: "Search and match webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-search-and-match-data",
          label: "Get search and match data",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
