import { React, Component } from "react";
import astargif from "../ContentFiles/astar.gif";
import dijkstra from "../ContentFiles/dijkstra.gif";
import greedy from "../ContentFiles/greedy.gif";
import './styles.css';

export default class Algorithm extends Component {  
    render() {
        return (
            <div className="agorithms-container">
                <div className="algorithm-container">
                    <div className="algorithm-description">
                        <p className="algorithm-title">
                            Dijkstra Algorithm
                        </p>
                        <p className="description-text">
                            For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. For example, if the nodes of the graph represent cities and edge path costs represent driving distances between pairs of cities connected by a direct road (for simplicity, ignore red lights, stop signs, toll roads and other obstructions), Dijkstra's algorithm can be used to find the shortest route between one city and all other cities. A widely used application of shortest path algorithm is network routing protocols, most notably IS-IS (Intermediate System to Intermediate System) and Open Shortest Path First (OSPF). It is also employed as a subroutine in other algorithms such as Johnson's.
                        </p>
                        <p className="description-text">
                            The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels that are partially ordered, provided the subsequent labels (a subsequent label is produced when traversing an edge) are monotonically non-decreasing. This generalization is called the generic Dijkstra shortest-path algorithm.
                        </p>
                    </div>
                    <div className="gif" >
                        <img className="dijstraGif" src={dijkstra} alt="Dijkstra..."></img>
                    </div>
                </div>
                <div className="algorithm-container">
                    <div className="algorithm-description">
                        <p className="algorithm-title">
                            A* Search Algorithm
                        </p>
                        
                        <p className="description-text">
                            A* is an informed search algorithm, or a best-first search, meaning that it is formulated in terms of weighted graphs: starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.). It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until its termination criterion is satisfied.
                        </p>
                        <p className="description-text">     
                            At each iteration of its main loop, A* needs to determine which of its paths to extend. It does so based on the cost of the path and an estimate of the cost required
                            to extend the path all the way to the goal. Specifically, A* selects the path that minimizes f(n) = g(n) + h(n)
                            where n is the next node on the path, g(n) is the cost
                            of the path from the start node to n, and h(n) is a heuristic function that estimates the cost of the cheapest path from n to the goal. A* terminates when the path it
                            chooses to extend is a path from start to goal or if there are no paths eligible to be extended. The heuristic function is problem-specific. If the heuristic function
                            is admissible, meaning that it never overestimates the actual cost to get to the goal, A* is guaranteed to return a least-cost path from start to goal.
                        </p>
                    </div>
                    <div className="gif" >
                        <img className="dijstraGif" src={astargif} alt="Astar..."></img>
                    </div>
                </div>
                <div className="algorithm-container">
                    <div className="algorithm-description">
                        <p className="algorithm-title">
                            Greedy Algorithm
                        </p>
                        <p className="description-text">
                            A greedy algorithm is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage. In many problems, a greedy strategy does not usually produce an optimal solution, but nonetheless, a greedy heuristic may yield locally optimal solutions that approximate a globally optimal solution in a reasonable amount of time.
                        </p>
                        <p className="description-text">
                            For example, a greedy strategy for the travelling salesman problem (which is of a high computational complexity) is the following heuristic: "At each step of the journey, visit the nearest unvisited city." This heuristic does not intend to find a best solution, but it terminates in a reasonable number of steps; finding an optimal solution to such a complex problem typically requires unreasonably many steps. In mathematical optimization, greedy algorithms optimally solve combinatorial problems having the properties of matroids, and give constant-factor approximations to optimization problems with submodular structure.
                        </p>
                    </div>
                    <div className="gif" >
                        <img className="dijstraGif" src={greedy} alt="Greedy..."></img>
                    </div>
                </div>
                <div className="algorithm-container">
                    <div className="algorithm-description">
                        <p className="algorithm-title">
                            Breadth-First Search Algrotihm
                        </p>
                        <p className="description-text">
                            Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph,
                            sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
                        </p>
                        <p className="description-text">
                            It uses the opposite strategy of depth-first search, which instead explores the node branch as far as possible before being forced to backtrack and expand other nodes.
                        </p>
                        <p className="description-text">
                        The time complexity can be expressed as O(|V|+|E|), since every vertex and every edge will be explored in the worst case. |V| is the number of vertices and |E| is the number of edges in the graph. Note that O(|E|) may vary between O(1) and O(|V|^{2}), depending on how sparse the input graph is.
                        </p>
                    </div>
                    <div className="gif" >
                        <img className="dijstraGif" src={greedy} alt="Greedy..."></img>
                    </div>
                </div>
                <div className="algorithm-container">
                    <div className="algorithm-description">
                        <p className="algorithm-title">
                            Depth-First Search Algorithm
                        </p>
                        <p className="description-text">
                            Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node
                            in the case of a graph) and explores as far as possible along each branch before backtracking.
                        </p>
                        <p className="description-text">
                            The time and space analysis of DFS differs according to its application area. In theoretical computer science, DFS is typically used to traverse an entire graph, and takes time O(|V| + |E|),
                            linear in the size of the graph. In these applications it also uses space O(|V|) in the
                            worst case to store the stack of vertices on the current search path as well as the set of already-visited vertices. Thus, in this setting, the time and space bounds are the same
                            as for breadth-first search and the choice of which of these two algorithms to use depends less on their complexity and more on the different properties of the vertex orderings the
                            two algorithms produce.
                        </p>
                    </div>
                    <div className="gif" >
                        <img className="dijstraGif" src={greedy} alt="Greedy..."></img>
                    </div>
                </div>
                
            </div>

        )
    }
}