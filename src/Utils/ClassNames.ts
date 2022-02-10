/** classname工具 */
interface classnamesPar {
  (styles: any, keys: Array<string>): string;
}

const classnames: classnamesPar = (styles, keys) => {
  let classnameFormat = ``;
  keys.forEach((e) => {
    classnameFormat = classnameFormat + ` ${styles[e]}`;
  });
  return classnameFormat;
};

export default classnames;
