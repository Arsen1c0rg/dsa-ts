import { LinkedListNode } from "../../../Data-Structures/SinglyLinkedList";
import { ListWithCycle } from "../../../helpers/LinkedList";

const head = ListWithCycle(true)

function lengthOfCycle(head: LinkedListNode<number>): number {
    let s = head, f = head

    while (f.next !== null && f !== null) {
        f = f.next.next!
        s = s.next!
        // console.log("SLOW:", s.val, "FAST:", f.val);
        console.log("FAST:", f);

        if (f === s) {
            console.log("Has cycle");
            break
        }
    }

    s = s.next! // bring the point to the start
    let count = 1

    while (s !== f) {
        s = s.next!
        count++
    }

    return count
}

console.log(lengthOfCycle(head));
