package main

import (
	"fmt"
	"sort"
)

func numRescueBoats(people []int, limit int) int {
	boats := len(people)
	sort.Ints(people)

	for len(people) > 1 {
		heaviestMan := people[len(people)-1]
		people = people[:len(people)-1]
		if (heaviestMan + people[0]) <= limit {
			people = people[1:] // lightest man
			boats--
		}
	}
	return boats
}

func main() {
	fmt.Println(numRescueBoats([]int{1, 2}, 3)) // 1
	fmt.Println(numRescueBoats([]int{3, 2, 2, 1}, 3)) // 3
}
