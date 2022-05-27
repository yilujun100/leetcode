// 117.填充每个节点的下一个右侧节点指针 II
// solution: Iterative
const connect = function (root) {
  let curr = root;

  while (curr != null) {
    let start = null; // Used as a marker for the beginning of the next level
    let prev = null;

    while (curr != null) {
      // Traverse nodes left to right at current level until there are no more nodes to traverse
      if (start == null) {
        // We have not found the beginning of the next level
        if (curr.left) start = curr.left;
        else if (curr.right) start = curr.right;

        prev = start; // If both curr.left and curr.right are null, then start will stay null and prev will alse stay null
      }

      if (prev != null) {
        if (curr.left && prev != curr.left) {
          prev = prev.next = curr.left; // JavaScript operator associativity for the equal sign (=) is right to left.
          // So first we set prev.next to curr.left and then re-assign prev to prev.next which is curr.left
        }
        if (curr.right && prev != curr.right) {
          prev = prev.next = curr.right;
        }
      }

      curr = curr.next; // Move to the next node
    }

    curr = start; // Traverse down to the next level
  }
  return root;
};
