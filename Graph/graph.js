// Graph datastructure 


class Graph{

    constructor(){
        this.graph={}
    }



    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex] = new Set()
        }
    }


    addEdge(vertex1 , vertex2){
        
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }

        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1)
    }

    display(){
        for(let key in this.graph){
            console.log(key+" -> "+[...this.graph[key]])
        }
    }


    removeEdge(vertex1 , vertex2){
      this.graph[vertex1].delete(vertex2)
      this.graph[vertex2].delete(vertex1)
      console.log("deleted edge..");
    }

    removeVertex(vertex){
        if(!this.graph[vertex]){
            return null
        }
        for(let vertex2 of this.graph[vertex]){
            this.removeEdge(vertex , vertex2)
        }
        delete this.graph[vertex]
    }


    checkCycle(start){
    let visited = {}
    let queue = [start]
    while(queue.length){
        let current = queue.shift();
        visited[current] = 1
        for(let v of this.graph[current]){
            if(!visited[v]){
                queue.push(v)
                visited[v]=-1
            }else if(visited[v]==-1){
                return true
            }
        }
    }
    return false;
}

}



const graph = new Graph();
graph.addEdge("A" , "B");
graph.addEdge("B" ,"C");
graph.addEdge("C" , "D");
graph.addEdge("D" , "A");
graph.display();
console.log(graph.checkCycle("A"))