import { helper } from '@ember/component/helper';

export function initial([string]) {
  
  return string.substring(0,1).toUpperCase();
}

export default helper(initial);
