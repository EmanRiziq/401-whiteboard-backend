# 401-whiteboard-backend


<table>
  <th>
    <td> Stack</td>
    <td> Queue</td>
    
  </th>
  <tr>
    <td>The stack is based on LIFO(Last In First Out) principle</td>
    <td>The queue is based on FIFO(First In First Out) principle.</td>
  </tr>
  <tr>
    <td>Insertion Operation is called Push Operation</td>
    <td>Insertion Operation is called Enqueue Operation</td>
  </tr>
  <tr>
    <td>Deletion Operation is called Pop Operation</td>
    <td>Deletion Operation is called Dequeue Operation</td>
  </tr>
  <tr>
    <td>Push and Pop Operation takes place from one end of the stack</td>
    <td>Enqueue and Dequeue Operation takes place from a different end of the queue</td>
  </tr>
  <tr>
    <td>The most accessible element is called Top and the least accessible is called the Bottom of the stack </td>
    <td>The insertion end is called Rear End and the deletion end is called the Front End. </td>
  </tr>
  <tr>
    <td>Simple Implementation </td>
    <td>	Complex implementation in comparison to stack</td>
  </tr>
  <tr>
    <td>Only one pointer is used for performing operations </td>
    <td>Two pointers are used to perform operations
</td>
  </tr>
  <tr>
    <td>Empty condition is checked using

```Top==-1```</td>
    <td>Empty condition is checked using 

```Front==-1||Front==Rear+1```</td>
  </tr>
  <tr>
    <td>Full condition is checked using

```Top==Max-1```</td>
    <td>Full condition is checked using 

```Rear==Max-1```</td>
  </tr>
  <tr>
    <td>There are no variants available for stack</td>
    <td>There are three types of variants i.e circular queue, double-ended queue and priority queue

</td>
  </tr>
  <tr>
    <td>Can be considered as a vertical collection visual</td>
    <td>Can be considered as a horizontal collection  visual</td>
  </tr>
  <tr>
    <td>Used to solve the recursive type problems</td>
    <td>Used to solve the problem having sequential processing</td>
  </tr>

</table>