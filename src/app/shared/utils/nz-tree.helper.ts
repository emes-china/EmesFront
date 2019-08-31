import { NzTreeComponent, NzTreeNode, NzTreeService } from 'ng-zorro-antd';
export class TreeHelper {
  static expandAll(tree: NzTreeComponent) {
    const loopParent = (node: NzTreeNode) => {
      // expand parent node
      if (node.getParentNode()) {
        node.getParentNode().isExpanded = true;
        loopParent(node.getParentNode());
      } else if (node) {
        node.isExpanded = true;
      }
    };
    const loopChild = (node: NzTreeNode) => {
      // expand parentNode
      loopParent(node);
      node.children.forEach(cNode => {
        loopChild(cNode);
      });
    };
    tree.getTreeNodes().forEach(node => {
      loopChild(node);
    });
  }

  static collapseAll(tree: NzTreeComponent): void {
    const loopParent = (node: NzTreeNode) => {
      // expand parent node
      if (node.getParentNode()) {
        node.getParentNode().isExpanded = false;
        loopParent(node.getParentNode());
      } else if (node) {
        node.isExpanded = false;
      }
    };
    const loopChild = (node: NzTreeNode) => {
      // expand parentNode
      loopParent(node);
      node.children.forEach(async cNode => {
        loopChild(cNode);
      });
    };
    tree.getTreeNodes().forEach(node => {
      loopChild(node);
    });
  }

  static nzTreeCheckedAll(tree: NzTreeComponent, isChecked: boolean) {
    const inFn = (data: any[], parent: any, deep: number) => {
      for (const item of data) {
        item.isChecked = isChecked;
        item.isAllChecked = isChecked;
        item.isHalfChecked = false;
        const childrenVal = item.children;
        if (childrenVal && childrenVal.length > 0) {
          inFn(childrenVal, item, deep + 1);
        }
      }
    };
    if (tree && tree.getTreeNodes()) {
      inFn(tree.getTreeNodes(), null, 1);
    }
  }

  static nzTreeGetExpanded(tree: NzTreeComponent): any[] {
    const keys = [];
    const inFn = (data: any[], parent: any, deep: number) => {
      for (const item of data) {
        if (item.isExpanded) {
          keys.push(item.key);
        }
        const childrenVal = item.children;
        if (childrenVal && childrenVal.length > 0) {
          inFn(childrenVal, item, deep + 1);
        }
      }
    };
    if (tree && tree.getTreeNodes()) {
      inFn(tree.getTreeNodes(), null, 1);
    }
    return keys;
  }
}
