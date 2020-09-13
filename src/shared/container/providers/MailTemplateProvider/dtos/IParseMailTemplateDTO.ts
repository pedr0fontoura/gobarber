interface TemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: TemplateVariables;
}
