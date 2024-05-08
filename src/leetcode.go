package main

import (
	"fmt"
	"slices"
	"sort"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func insert(root *ListNode, elem int) *ListNode {
	temp := ListNode{Val: elem, Next: nil}
	if root == nil {
		root = &temp
		return root
	}
	curr := root
	for curr.Next != nil {
		curr = curr.Next
	}
	curr.Next = &temp
	return root
}

func convertToList(arr []int) *ListNode {
	var head *ListNode
	for _, val := range arr {
		head = insert(head, val)
	}
	return head
}

// func numRescueBoats(people []int, limit int) int {
// 	boats := len(people)
// 	sort.Ints(people)

// 	for len(people) > 1 {
// 		heaviestMan := people[len(people)-1]
// 		people = people[:len(people)-1]
// 		if (heaviestMan + people[0]) <= limit {
// 			people = people[1:] // lightest man
// 			boats--
// 		}
// 	}
// 	return boats
// }

// func doubleIt(head *ListNode) *ListNode {
// 	// If the value of the head node is greater than 4,
// 	// insert a new node at the beginning
// 	if head.Val > 4 {
// 		head = &ListNode{Val: 0, Next: head}
// 	}
// 	// Traverse the linked list
// 	node := head
// 	for node != nil {
// 		// Double the value of the current node
// 		// and update it with the units digit
// 		node.Val = (node.Val * 2) % 10
// 		// If the current node has a next node
// 		// and the next node's value is greater than 4,
// 		// increment the current node's value to handle carry
// 		if node.Next != nil && node.Next.Val > 4 {
// 			node.Val++
// 		}
// 		node = node.Next
// 	}

// 	return head
// }

func findRelativeRanks(score []int) []string {
	sortedScore := slices.Clone(score)
	// sort.Sort(sort.IntSlice(sorted))
	// slices.Reverse(sorted)
	sort.Slice(sortedScore, func(i, j int) bool {
		return sortedScore[j] < sortedScore[i]
	})
	res := make([]string, len(score))
	for i, v := range score {
		index := slices.Index(sortedScore, v)
		if index == 0 {
			res[i] = "Gold Medal"
		} else if index == 1 {
			res[i] = "Silver Medal"
		} else if index == 2 {
			res[i] = "Bronze Medal"
		} else {
			res[i] = fmt.Sprint(index + 1)
		}
	}
	return res
}

func main() {
	// fmt.Println(numRescueBoats([]int{1, 2}, 3)) // 1
	// fmt.Println(numRescueBoats([]int{3, 2, 2, 1}, 3)) // 3
	// fmt.Println(doubleIt(convertToList([]int{9, 9, 9}))) // [1,9,9,8]
	fmt.Println(findRelativeRanks([]int{10, 3, 8, 9, 4})) //["Gold Medal","5","Bronze Medal","Silver Medal","4"]
}
