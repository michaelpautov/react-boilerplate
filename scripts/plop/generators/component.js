module.exports = (plop) => {
  plop.setPartial('basePath', '../../../src')

  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of a component?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What is the type of a component?',
        choices: ['Components', 'UI', 'Pages'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> basePath}}/{{dashCase componentType}}/{{dashCase name}}/index.ts',
        templateFile: '../default-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '{{> basePath}}/{{dashCase componentType}}/{{dashCase name}}/{{dashCase name}}.tsx',
        templateFile: '../default-templates/name.tsx.hbs',
      },
      {
        type: 'append',
        path: '{{> basePath}}/{{dashCase componentType}}/index.ts',
        separator: '',
        templateFile: '../default-templates/components-index.ts.hbs',
      },
    ],
  })
}
