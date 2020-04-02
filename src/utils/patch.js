import {typografer} from './typograf';

export const patch = (root, transform = typografer, parentKey = '') => {
  if (Array.isArray(root)) {
    return root.map(el => patch(el, transform));
  } else if (root !== null && typeof root === 'object') {
    return Object.entries(root).reduce((acc, [k, v]) => {
      // if parent key starts with underscore use it. else use key got in current iteration. for recursive ignoring
      const newParentKey = parentKey && parentKey[0] === '_' ? parentKey : k;
      const isIgnoreKey = newParentKey[0] === '_';

      if (typeof v === 'string') {
        acc[k] = isIgnoreKey ? v : transform(v);
      } else {
        acc[k] = patch(v, isIgnoreKey ? str => str : transform, newParentKey);
      }
      return acc;
    }, {});
  } else if (typeof root === 'string') {
    return transform(root);
  } else {
    return root;
  }
};
