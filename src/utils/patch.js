import {typografer} from './typograf';

export const patch = root => {
  if (Array.isArray(root)) {
    return root.map(el => patch(el));
  } else if (root !== null && typeof root === 'object') {
    return Object.entries(root).reduce((acc, [k, v]) => {
      if (typeof v === 'string') {
        acc[k] = typografer(v);
      } else {
        acc[k] = patch(v);
      }

      return acc;
    }, {});
  } else if (typeof root === 'string') {
    return typografer(root);
  } else {
    return root;
  }
};
