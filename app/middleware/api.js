import data from './data';

export function searchNode(term) {
  return new Promise((resolve) => {
    let oldTree = [];
    let treeItem, node;
    oldTree.push(...data.tree);
    let newTree = [];

    while (oldTree.length > 0) {
      treeItem = oldTree.pop();
      node = treeItem.node;
      if (node.description.indexOf(term) > -1) {
        // Found matching node!
        newTree.push({ node: { ...node } });
        // break;
      } else if (node.children && node.children.length) {
        for (let i = 0; i < node.children.length; i += 1) {
          oldTree.push(node.children[i]);
        }
      }
    }

    resolve(newTree.reverse());
  });
}
