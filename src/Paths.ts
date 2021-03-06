export const formatPath = (path: Paths, data: any) => {
  let url = path as string;

  for (const k of Object.keys(data)) {
    url = url.replace(":" + k, data[k]);
  }

  return url;
};

export enum Paths {
  base = "/",
  notFound = "/not-found",

  applicationInventory = "/application-inventory",
  applicationInventory_applicationList = "/application-inventory/application-list",
  applicationInventory_assessment = "/application-inventory/assessment/:assessmentId",

  reports = "/reports",

  controls = "/controls",
  controls_businessServices = "/controls/business-services",
  controls_stakeholders = "/controls/stakeholders",
  controls_stakeholderGroups = "/controls/stakeholder-groups",
  controls_tags = "/controls/tags",
}

export interface AssessmentRoute {
  assessmentId: string;
}
