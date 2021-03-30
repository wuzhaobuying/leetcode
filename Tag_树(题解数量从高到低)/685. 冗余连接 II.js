/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class UF {
    constructor(n) {
      this.ancestor = [...new Array(n).keys()];
    }
  
    find (x) {
      if (this.ancestor[x] !== x) {
        return this.find(this.ancestor[x]);
      } else {
        return x;
      }
    }
  
    union (x, y) {
      this.ancestor[this.find(x)] = this.find(y);
    }
  }
  
  var findRedundantDirectedConnection = function(edges) {
    const uf = new UF(edges.length + 1);
    const parent = [...new Array(edges.length + 1).keys()];
    let confictEdge = undefined, circleEdge = undefined;
  
    edges.forEach(edge => {
      if (parent[edge[1]] !== edge[1]) {
        confictEdge = edge;
      } else {
        parent[edge[1]] = edge[0];
        if (uf.find(edge[0]) !== uf.find(edge[1])) {
          uf.union(edge[0], edge[1]);
        } else {
          circleEdge = edge;
        }
      }
    })
  
    return confictEdge ? (circleEdge ? [parent[confictEdge[1]], confictEdge[1]] : confictEdge) : circleEdge;
  };