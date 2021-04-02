import { getRandomInt, getRandomNoun, getRandomVerb, pascalizeItems } from "../helpers";

const accessModifiers = ['public', 'private', '', 'protected', 'internal'];

const debugLines = [
  '"Goodbye, world!"',
  '"test"',
  '"hello"',
  `"here ${getRandomInt(0, 100)}"`,
  '"should be here"',
  '"here be dragons"',
  '"some error"',
  '"Would expect null"',
  '"=== DEBUG ==="',
  '"to do"',
  '"asdf"',
  '"FIRE"',
  '"schnitzel"',
  '"Marlon Webb says WATERMELON!"',
  '"TODO: refactor this"',
];

const methodKeywords = ['abstract', 'virtual', '', 'override', 'static'];

const variableDeclarations = [
  'ArrayList',
  'List<string>',
  'HashTable',
  'Dictionary<int, string>',
  'Queue',
  'StringBuilder',
];

const variableTypes = ['int', 'string', 'double', 'float', 'decimal', 'bool'];

export default class CSharp {
  static getRandomMethodName() {
    return pascalizeItems([getRandomVerb(), getRandomNoun()]);
  }

  static getRandomVariableDeclaration() {
    let keyWord = getRandomItem(variableTypes);
    let noun = getRandomNoun();
    return `${keyWord} ${noun};`;
  }

  static getRandomNewVariableDeclaration() {
    let keyWord = getRandomItem(variableDeclarations);
    let noun = getRandomNoun();
    return `${keyWord} ${noun} = new ${keyWord}();`;
  }

  static getRandomMethodKeyword() {
    return getRandomItem(methodKeywords);
  }

  static getRandomAccessModifier() {
    return getRandomItem(accessModifiers);
  }

  static getRandomDebugWriteLine() {
    return getRandomItem(debugLines);
  }

  static getRandomMethodCall() {
    return `${this.getRandomMethodName()}();`;
  }

  static getRandomFillerLine() {
    return getRandomItem([
      `Debug.WriteLine(${CSharp.getRandomDebugWriteLine()});`,
      CSharp.getRandomVariableDeclaration(),
      CSharp.getRandomNewVariableDeclaration(),
      CSharp.getRandomMethodCall(),
    ]);
  }
}
