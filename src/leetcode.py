from bisect import bisect_left
from collections import Counter, defaultdict, deque
import heapq
from itertools import product
import math
import sys
from typing import Dict, List, Optional, Set, Tuple


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, new_data):
        new_node = ListNode(new_data)
        new_node.next = self.head
        self.head = new_node

    def printList(self):
        temp = self.head
        while temp:
            print(" %d " % (temp.val), end=" ")
            temp = temp.next


def array_to_single_linked_list(lst: List[int]) -> LinkedList:
    res = LinkedList()
    for n in reversed(lst):
        res.push(n)
    return res


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def lst2link(lst: List[int]) -> Optional[ListNode]:
    cur = dummy = ListNode(0)
    for e in lst:
        cur.next = ListNode(e)
        cur = cur.next
    return dummy.next


def array_to_binary_tree(lst):
    if not lst:
        return
    node = root = TreeNode(lst[0])
    queue = deque()
    for i, value in enumerate(lst[1:]):
        if value is not None:  # A node to create?
            queue.append(TreeNode(value))
            if i % 2:  # At odd iterations we attach it as a right child
                node.right = queue[-1]
            else:  # At even iterations we attach it as a left child
                node.left = queue[-1]
        if i % 2 and queue:  # After odd iterations we grab a next parent
            node = queue.popleft()

    return root


# def firstUniqChar(s: str) -> int:
#     if len(s) == 1:
#         return 0

#     map = defaultdict(int)

#     for c in s:
#         map[c] += 1

#     for i, c in enumerate(s):
#         if map[c] == 1:
#             return i

#     return -1


# print(firstUniqChar("leetcode"))  # 0
# print(firstUniqChar("loveleetcode"))  # 2
# print(firstUniqChar("aabb"))  # -1


# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:
#         return len(set(nums)) != len(nums)


# solution = Solution()
# print(solution.containsDuplicate([1, 2, 3, 1]))  # true
# print(solution.containsDuplicate([1, 2, 3, 4]))  # false


# class Solution:
#     def reverseWords(self, s: str) -> str:
#         l = list(filter(lambda el: el, s.strip().split(' ')))
#         l.reverse()
#         return ' '.join(l)

# class Solution:
#     def reverseWords(self, s: str) -> str:
#         l = s.split()
#         l.reverse()
#         return ' '.join(l)


# solution = Solution()
# print(solution.reverseWords("the sky is blue"))  # "blue is sky the"
# print(solution.reverseWords("  hello world  "))  # "world hello"
# print(solution.reverseWords("a good   example"))  # "example good a"


# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         if len(nums) == 2:
#             return [0, 1]

#         dict: Dict[int, int] = {}

#         for i, n in enumerate(nums):
#             diff = target - n
#             if diff in dict:
#                 return [dict[diff], i]
#             dict[n] = i
#         return []


# solution = Solution()
# print(solution.twoSum([2, 7, 11, 15], 9))  # [0,1]
# print(solution.twoSum([3, 2, 4], 6))  # [1,2]
# print(solution.twoSum([3, 3], 6))  # [0,1]

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         # print(''.join(sorted(t)))
#         # return ''.join(sorted(s)) == ''.join(sorted(t))
#         if len(s) != len(t):
#             return False
#         mapS, mapT = {}, {}

#         for i in range(len(s)):
#             mapS[s[i]] = 1 + mapS.get(s[i], 0)
#             mapT[t[i]] = 1 + mapT.get(t[i], 0)

#         for c in mapS:
#             if mapS[c] != mapT.get(c, 0):
#                 return False

#         return True


# solution = Solution()
# print(solution.isAnagram("anagram", "nagaram"))  # [0,1]
# print(solution.isAnagram("rat",  "car"))  # [1,2]

# class Solution():
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#         if len(strs) == 0:
#             return [['']]
#         if len(strs) == 1:
#             return [strs]
#         map = defaultdict(list)
#         for i, str in enumerate(strs):
#             s = ''.join(sorted(str))
#             map[s].append(strs[i])
#         return list(map.values())


# solution = Solution()
# [["bat"],["nat","tan"],["ate","eat","tea"]]
# print(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# print(solution.groupAnagrams([""]))  # [[""]]
# print(solution.groupAnagrams(["a"]))  # [["a"]]


# class Solution:
#     def productExceptSelf(self, nums: List[int]) -> List[int]:
#         res: List[int] = []
#         prefix = 1
#         for n in nums:
#             res.append(prefix)
#             prefix *= n
#         postfix = 1

#         for i in range(len(nums)-1, -1, -1):
#             print(i)
#             res[i] = res[i] * postfix
#             postfix = postfix * nums[i]
#         return res


# solution = Solution()
# print(solution.productExceptSelf([1, 2, 3, 4]))  # [24,12,8,6]
# print(solution.productExceptSelf([-1, 1, 0, -3, 3]))  # [0,0,9,0,0]


# class Solution:
# def increasingTriplet(self, nums: List[int]) -> bool:
#     if len(nums) < 3:
#         return False

#     dp: List[int] = []

#     for n in nums:
#         index = bisect_left(dp, n)
#         if index < len(dp):
#             dp[index] = n
#         else:
#             dp.append(n)

#     return len(dp) > 2
# def increasingTriplet(self, nums: List[int]) -> bool:
#     if len(nums) < 3:
#         return False

#     one = math.inf
#     two = sys.maxsize

#     for n in nums:
#         if n <= one:
#             one = n
#         elif n <= two:
#             two = n
#         else:
#             return True

#     return False


# solution = Solution()
# print(solution.increasingTriplet([1, 2, 3, 4, 5]))  # true
# print(solution.increasingTriplet([5, 4, 3, 2, 1]))  # false
# print(solution.increasingTriplet([2, 1, 5, 0, 4, 6]))  # true


# class Solution:
#     def topKFrequent(self, nums: List[int], k: int) -> List[int]:
#         if len(nums) == 1:
#             return nums

#         count = {}
#         freq = [[] for i in range(len(nums) + 1)]

#         for n in nums:
#             count[n] = 1 + count.get(n, 0)

#         for n, c in count.items():
#             freq[c].append(n)

#         res = []

#         for i in range(len(freq) - 1, 0, -1):
#             for n in freq[i]:
#                 res.append(n)
#                 if len(res) == k:
#                     return res

#         return res


# solution = Solution()
# print(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2))  # [1,2]
# print(solution.topKFrequent([1], 1))  # [1]
# #


# class Solution:
#     def frequencySort(self, s: str) -> str:
#         map = Counter(s)
#         list: List[Tuple[str, int]] = sorted(
#             map.items(), key=lambda x: x[1], reverse=True)
#         return ''.join(str(t[0] * t[1]) for t in list)


# solution = Solution()
# print(solution.frequencySort("tree"))  # "eert"
# print(solution.frequencySort("cccaaa"))  # "aaaccc"
# print(solution.frequencySort("Aabb"))  # "bbAa"


# class Solution:
# def moveZeroes(self, nums: List[int]) -> None:
#     if len(nums) > 1:
#         n = len(nums)
#         l, r = 0, 1
#         while l < n:
#             if nums[l] == 0:
#                 while r < n:
#                     nums[r-1] = nums[r]
#                     r += 1
#                 nums[n - 1] = 0
#                 r = l + 1
#                 n -= 1
#             else:
#                 l += 1
#                 r += 1

# def moveZeroes(self, nums: List[int]) -> None:
#     l = 0
#     for r in range(len(nums)):
#         if nums[r]:
#             nums[r], nums[l] = nums[l], nums[r]
#             l += 1


# solution = Solution()
# print(solution.moveZeroes([0, 1, 0, 3, 12]))  # [1,3,12,0,0]
# print(solution.moveZeroes([0, 0, 1]))  # [1,0,0]
# # print(solution.moveZeroes([0]))  # [0]

# KADANE`s ALGORITHM
# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
#         maxSum = nums[0]
#         tempSum = 0

#         for n in nums:
#             tempSum = max(tempSum, 0)
#             tempSum += n
#             maxSum = max(maxSum, tempSum)
#         return maxSum


# solution = Solution()
# # print(solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6
# # print(solution.maxSubArray([5, 4, -1, 7, 8]))  # 23
# # print(solution.maxSubArray([1]))  # 1
# print(solution.maxSubArray([5, -3, 5, 5]))  # 1


# class Solution:
#     def maxSubarraySumCircular(self, nums: List[int]) -> int:
#         tempMin, tempMax, totalSum = 0, 0, 0
#         totalMax, totalMin = nums[0], nums[0]

#         for n in nums:
#             totalSum += n
#             tempMin = min(tempMin + n, 0)
#             tempMax = max(tempMax + n, 0)
#             totalMax = max(totalMax, tempMax)
#             totalMin = min(totalMin, tempMin)

#         if totalMax < 0:
#             return totalMax
#         return max(totalSum - totalMin, totalMax)


# solution = Solution()
# print(solution.maxSubarraySumCircular([1, -2, 3, -2]))  # 3
# print(solution.maxSubarraySumCircular([5, -3, 5]))  # 10


# class Solution:
#     def isSubsequence(self, s: str, t: str) -> bool:
#         if len(t) < len(s):
#             return False
#         if not len(s):
#             return True
#         sPointer, tPointer = 0, 0

#         while tPointer < len(t) and sPointer < len(s):
#             if s[sPointer] == t[tPointer]:
#                 sPointer += 1
#                 tPointer += 1
#             else:
#                 tPointer += 1

#         return sPointer == len(s)


# solution = Solution()
# print(solution.isSubsequence("abc", "ahbgdc"))  # True
# print(solution.isSubsequence("axc", "ahbgdc"))  # False
# print(solution.isSubsequence("acb", "ahbgdc"))  # False

# class Solution:
#     def merge(self, intervals: List[List[int]]) -> List[List[int]]:
#         if len(intervals) == 1:
#             return intervals
#         intervals = sorted(intervals, key=lambda x: x[0])
#         L = 0
#         R = 1

#         while R < len(intervals):
#             if not intervals[R]:
#                 return intervals

#             prev = intervals[L]
#             curr = intervals[R]
#             if curr[0] <= prev[1]:
#                 intervals[R] = [min(prev[0], curr[0]), max(prev[1], curr[1])]
#                 intervals.pop(L)
#                 R = L
#             else:
#                 L += 1
#             R += 1

#         return intervals


# solution = Solution()


# # [[1,6],[8,10],[15,18]]
# print(solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
# print(solution.merge([[1, 4], [4, 5]]))  # [[1,5]]
# print(solution.merge([[1, 4], [0, 4]]))  # [[0,4]]
# print(solution.merge([[1, 4], [0, 2], [3, 5]]))  # [[0,5]]
# # [[1,3],[4,7]]
# print(solution.merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]))
# print(solution.merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]))  # [[1,10]]


# class Solution:
# def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
#     nums.sort()
#     cache = {}  # (i ,prev) -> []

#     def dfs(i, prev) -> List[int]:
#         if i == len(nums):
#             return []
#         if (i, prev) in cache:
#             return cache[(i, prev)]

#         res = dfs(i + 1, prev)  # skip nums[i]

#         if nums[i] % prev == 0:
#             tmp = [nums[i]] + dfs(i + 1, nums[i])  # include nums[i]
#             res = tmp if len(tmp) > len(res) else res

#         cache[(i, prev)] = res

#         return res

#     return dfs(0, 1)

# def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
#     nums.sort()
#     cache = {}  # i -> []

#     def dfs(i):
#         if i == len(nums):
#             return []
#         if i in cache:
#             return cache[i]

#         res = [nums[i]]
#         for j in range(i+1, len(nums)):
#             if nums[j] % nums[i] == 0:
#                 tmp = [nums[i]] + dfs(j)
#                 if len(tmp) > len(res):
#                     res = tmp
#         cache[i] = res
#         return res
#     res = []
#     for i in range(len(nums)):
#         tmp = dfs(i)
#         if len(tmp) > len(res):
#             res = tmp

#     return res

#     def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
#         nums.sort()
#         dp = [[n] for n in nums]  # dp[i] - largest Divisible Subset
#         res = []
#         for i in reversed(range(len(nums))):
#             for j in range(i+1, len(nums)):
#                 if nums[j] % nums[i] == 0:
#                     tmp = [nums[i]] + dp[j]
#                     dp[i] = tmp if len(tmp) > len(dp[i]) else dp[i]
#             res = dp[i] if len(dp[i]) > len(res) else res

#         return res


# solution = Solution()
# print(solution.largestDivisibleSubset([1, 2, 3]))  # [1,2] or  [1,3]
# print(solution.largestDivisibleSubset([1, 2, 4, 8]))  # [1,2,4,8]
# print(solution.largestDivisibleSubset([1, 2, 5, 15, 45]))  # [1,5,15,45]


# class Solution:
#     def maxArea(self, height: List[int]) -> int:
#         if len(height) == 2:
#             return min(height[0], height[1])

#         L, R = 0, len(height) - 1
#         area = 0

#         while L <= R:
#             left = height[L]
#             right = height[R]
#             if left and right:
#                 area = max(area, abs(R-L) * min(left, right))

#             if left < right:
#                 L += 1
#             else:
#                 R -= 1

#         return area


# solution = Solution()

# print(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49
# print(solution.maxArea([1, 2, 1]))  # 2
# print(solution.maxArea([1, 2, 4, 3]))  # 4
# print(solution.maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]))  # 8


# class Solution:
#     def countSubstrings(self, s: str) -> int:
#         res = 0

#         for i in range(len(s)):
#             res += self.countPalindrom(i, i, s)  # odd substrings
#             res += self.countPalindrom(i, i + 1, s)  # even substrings

#         return res

#     def countPalindrom(self, l: int, r: int, s: str) -> int:
#         res = 0
#         while l >= 0 and r < len(s) and s[l] == s[r]:
#             res += 1
#             l -= 1
#             r += 1
#         return res


# solution = Solution()
# print(solution.countSubstrings("abc"))  # 3
# print(solution.countSubstrings("aaa"))  # 6


# class Solution:
#     def cherryPickup(self, grid: List[List[int]]) -> int:
#         ROWS, COLS = len(grid), len(grid[0])
#         cache: dict[Tuple[int, int, int], int] = {}

#         def walk(r: int, c1: int, c2: int) -> int:
#             if c1 == c2 or min(c1, c2) < 0 or max(c1, c2) == COLS:
#                 return 0
#             if (r, c1, c2) in cache:
#                 return cache[(r, c1, c2)]

#             currentRowSum = grid[r][c1] + grid[r][c2]

#             if r == ROWS - 1:
#                 return currentRowSum

#             res = 0
#             moves = [-1, 0, 1]

#             for move1, move2 in product(moves, repeat=2):
#                 res = max(walk(r + 1, c1 + move1, c2 + move2), res)

#             cache[(r, c1, c2)] = res + currentRowSum
#             return cache[(r, c1, c2)]

#         return walk(0, 0, COLS-1)


# solution = Solution()
# print(solution.cherryPickup(
#     [[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]]))  # 24
# print(solution.cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [
#       # 28
#       2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]]))

# class Solution:
#     # def majorityElement(self, nums: List[int]) -> int:
#     #     more_than = math.ceil(len(nums) / 2)
#     #     map: dict[int, int] = defaultdict(int)
#     #     for n in nums:
#     #         map[n] += 1
#     #         if map[n] >= more_than:
#     #             return n
#     #     return -1

#     def majorityElement(self, nums: List[int]) -> int:
#         counter, num = 0, 0
#         for n in nums:
#             if counter == 0:
#                 num = n
#             counter += (1 if n == num else -1)
#         return num


# solution = Solution()
# print(solution.majorityElement([3, 2, 3]))  # 3
# print(solution.majorityElement([8, 8, 7, 7, 7]))  # 7
# print(solution.majorityElement([2, 2, 1, 1, 1, 2, 2]))  # 2
# print(solution.majorityElement([10, 9, 9, 9, 10]))  # 9
# print(solution.majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]))  # 1

# class Solution:
#     def maxOperations(self, nums: List[int], k: int) -> int:
#         res = 0
#         map: Dict[int, int] = defaultdict(int)
#         for i in range(len(nums)):
#             curr = nums[i]

#             if curr in map:
#                 res += 1
#                 if map[curr] == 1:
#                     del map[curr]
#                 else:
#                     map[curr] -= 1
#             else:
#                 if k-curr > 0:
#                     map[k-curr] += 1

#         return res


# solution = Solution()
# print(solution.maxOperations([1, 2, 3, 4], 5))  # 2
# print(solution.maxOperations([3, 1, 3, 4, 3], 6))  # 1
# print(solution.maxOperations(
#     [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3))  # 4


# class Solution:
#     def firstPalindrome(self, words: List[str]) -> str:
#         for w in words:
#             L, R = 0, len(w) - 1
#             while w[L] == w[R]:
#                 L += 1
#                 R -= 1
#                 if L >= R:
#                     return w
#         return ''


# solution = Solution()
# print(solution.firstPalindrome(["abc", "car", "ada", "racecar", "cool"]))


# class Solution:
#     def rearrangeArray(self, nums: List[int]) -> List[int]:
#         l = len(nums)
#         middle = l // 2
#         res: List[int] = []

#         nums = sorted(nums, key=lambda n: 0 if n > 0 else 1)

#         for i in range(middle):
#             res.append(nums[i])
#             res.append(nums[i + middle])
#         return res


# solution = Solution()
# print(solution.rearrangeArray([3, 1, -2, -5, 2, -4]))  # [3,-2,1,-5,2,-4]


# class Solution:
#     def maxVowels(self, s: str, k: int) -> int:
#         vowels = ['a', 'e', 'i', 'o', 'u']
#         maxCount = 0

#         for i in range(k):
#             if s[i] in vowels:
#                 maxCount += 1
#         res = maxCount

#         for i in range(k, len(s)):
#             if s[i] in vowels:
#                 maxCount += 1
#             if s[i - k] in vowels:
#                 maxCount -= 1
#             res = max(maxCount, res)

#         return res


# solution = Solution()
# print(solution.maxVowels("abciiidef", 3))  # 3
# print(solution.maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33))  # 7
# print(solution.maxVowels("aeiou", 2))  # 2
# print(solution.maxVowels("weallloveyou", 7))  # 4


# class Solution:
#     def largestPerimeter(self, nums: List[int]) -> int:
#         l = len(nums)
#         nums.sort(reverse=True)
#         tempSum = 0
#         sumsArr = [0] * l
#         for i in reversed(range(l)):
#             tempSum += nums[i]
#             sumsArr[i] = tempSum

#         for i in range(l-1):
#             if nums[i] < sumsArr[i + 1]:
#                 return sumsArr[i]

#         return -1


# solution = Solution()
# print(solution.largestPerimeter([5, 5, 5]))  # 15
# print(solution.largestPerimeter([1, 12, 1, 2, 5, 50, 3]))  # 12
# [1, 1, 2, 3, 5, 12, 50]
# 1 + 1 + 2 + 3 + 5 = 12.
# print(solution.largestPerimeter([5, 5, 50]))  # -1

# [74, 24, 12, 7, 4, 2, 1 ]
# [50, 12, 5,  3, 2, 1, 1 ]

# class Solution:
#     def longestOnes(self, nums: List[int], k: int) -> int:
#         L = 0
#         max_res = 0

#         for R, n in enumerate(nums):
#             k -= 1 - n
#             if k < 0:
#                 k += 1 - nums[L]
#                 L += 1
#             else:
#                 max_res = max(max_res, R-L + 1)
#         return max_res


# solution = Solution()

# print(solution.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
# # 6 [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]

# print(solution.longestOnes(
#     [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))
# # 10 [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]

# print(solution.longestOnes([0, 0, 1, 1, 1, 0, 0], 0))  # 3
# print(solution.longestOnes([0, 0, 0, 1], 4))  # 4
# print(solution.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0))  # 4


# class Solution:
#     def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
#         map = Counter(arr)
#         l = len(map)
#         sorted_vals = sorted(map.values())
#         for v in sorted_vals:
#             if not k:
#                 return l
#             if v <= k:
#                 k -= v
#                 l -= 1

#         return l


# print(solution.findLeastNumOfUniqueInts([5, 5, 4], 1))  # 1
# print(solution.findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))  # 2


# class Solution:
#     def longestSubarray(self, nums: List[int]) -> int:
#         L = 0
#         can_delete = True
#         max_count = 0
#         for R in range(len(nums)):
#             if not nums[R]:
#                 if can_delete:
#                     can_delete = False
#                 else:
#                     max_count = max(max_count, R-L - 1)
#                     if nums[L]:
#                         while nums[L] != 0:
#                             L += 1
#                     L += 1
#             max_count = max(max_count, R-L)

#         return max_count


# max_count = max(max_count, R-L if not can_delete else R-L + 1)
# solution = Solution()
# print(solution.longestSubarray([1, 1, 0, 1]))  # 3
# print(solution.longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))  # 5
# print(solution.longestSubarray([1, 1, 1]))  # 2
# print(solution.longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]))  # 4


# class Solution:
#     def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
#         l = len(heights)
#         heap = []

#         for i in range(l - 1):
#             curr = heights[i]
#             next = heights[i + 1]
#             delta = next - curr
#             if delta <= 0:
#                 continue
#             bricks -= delta
#             heapq.heappush(heap, -delta)

#             if bricks < 0:
#                 if not ladders:
#                     return i
#                 ladders -= 1
#                 bricks += -heapq.heappop(heap)
#         return l - 1


# solution = Solution()
# print(solution.furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1))    # 4
# print(solution.furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2))    # 7
# print(solution.furthestBuilding([14, 3, 19, 3], 17, 0))    # 3
# print(solution.furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1))    # 5


# class Solution:
#     def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
#         meetings.sort()
#         rooms = [i for i in range(n)]
#         live_meetings = []  # (end_time , room)
#         rooms_usage = [0] * n

#         for start, end in meetings:
#             while live_meetings and live_meetings[0][0] <= start:
#                 endtime, room = heapq.heappop(live_meetings)
#                 heapq.heappush(rooms, room)
#             if rooms:
#                 room = heapq.heappop(rooms)
#                 heapq.heappush(live_meetings, (end, room))
#             else:
#                 new_meet_start, room = heapq.heappop(live_meetings)
#                 new_meet_end = new_meet_start + end - start
#                 heapq.heappush(live_meetings, (new_meet_end, room))
#             rooms_usage[room] += 1
#         max_used = max(rooms_usage)
#         return rooms_usage.index(max_used)


# solution = Solution()
# solution.mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]])  # 0
# solution.mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]])  # 1

# class Solution:
#     def isPowerOfTwo(self, n: int) -> bool:
#         if n == 1:
#             return True
#         if n % 2 != 0 or n == 0:
#             return False

#         return self.isPowerOfTwo(n // 2)


# solution = Solution()
# print(solution.isPowerOfTwo(1))  # True
# print(solution.isPowerOfTwo(16))  # True
# print(solution.isPowerOfTwo(3))  # True
# print(solution.isPowerOfTwo(6))  # False
# print(solution.isPowerOfTwo(0))  # False


# class Solution:
#     def largestAltitude(self, gain: List[int]) -> int:
#         alts = [0] * (len(gain) + 1)
#         for i in range(len(alts) - 1):
#             alts[i + 1] = alts[i] + gain[i]
#         return max(alts)


# solution = Solution()
# print(solution.largestAltitude([-5, 1, 5, 0, -7]))  # 1 [0,-5,-4,1,1,-6]
# print(solution.largestAltitude([-4, -3, -2, -1, 4, 3, 2]))  # 0

# class Solution:
#     def pivotIndex(self, nums: List[int]) -> int:
#         left, right = [0] * (len(nums)), [0] * (len(nums))
#         l = len(nums)
#         for i in range(l):
#             left[i] = (left[i-1] if i != 0 else 0) + nums[i]

#             right[l - 1 - i] = (right[l - i] if l - i <
#                                 l else 0) + nums[l - 1 - i]
#         for i in range(l):
#             if right[i] == left[i]:
#                 return i

#         return -1


# solution = Solution()

# print(solution.pivotIndex([1, 7, 3, 6, 5, 6]))  # 3
# print(solution.pivotIndex([1, 2, 3]))  # -1
# print(solution.pivotIndex([2, 1, -1]))  # 0


# class Solution:
#     def missingNumber(self, nums: List[int]) -> int:
#         l = len(nums)
#         nums.sort()
#         if nums[0] != 0:
#             return 0
#         i = 0
#         while i < l and i == nums[i]:
#             i += 1

#         return i


# solution = Solution()


# print(solution.missingNumber([0]))  # 1
# print(solution.missingNumber([1]))  # 0
# print(solution.missingNumber([1, 2]))  # 0
# print(solution.missingNumber([3, 0, 1]))  # 2
# print(solution.missingNumber([0, 1]))  # 2
# print(solution.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))  # 8

# class Solution:
#     def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
#         set1 = set(nums1)
#         set2 = set(nums2)

#         for n in list(set1):
#             if n in set2:
#                 set1.remove(n)
#                 set2.remove(n)

#         return [list(set1), list(set2)]


# solution = Solution()
# print(solution.findDifference([1, 2, 3], [2, 4, 6]))  # [[1,3],[4,6]]
# print(solution.findDifference([1, 2, 3, 3], [1, 1, 2, 2]))  # [[3],[]]

# class Solution:
#     def uniqueOccurrences(self, arr: List[int]) -> bool:
#         counter = Counter(arr)
#         return len(counter.values()) == len(set(counter.values()))


# solution = Solution()
# print(solution.uniqueOccurrences([1, 2, 2, 1, 1, 3]))  # true
# print(solution.uniqueOccurrences([1, 2]))  # false
# print(solution.uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))  # true


# class Solution:
#     def closeStrings(self, word1: str, word2: str) -> bool:
#         if len(word1) != len(word2):
#             return False
#         counter1 = Counter(word1)
#         counter2 = Counter(word2)
#         if set(word1) != set(word2):
#             return False
#         return sorted(counter1.values()) == sorted(counter2.values())


# solution = Solution()
# print(solution.closeStrings("abc", "bca"))  # true
# print(solution.closeStrings("a", "aa"))  # false
# print(solution.closeStrings("cabbba", "abbccc"))  # true
# print(solution.closeStrings("uau", "ssx"))  # false

# class Solution:
#     def rangeBitwiseAnd(self, left: int, right: int) -> int:
#         i = 0
#         while left != right:
#             left >>= 1
#             right >>= 1
#             i += 1
#         return right << i


# solution = Solution()
# print(solution.rangeBitwiseAnd(5, 7))  # 4
# print(solution.rangeBitwiseAnd(1, 2147483647))  # 0


# class Solution:
#     def equalPairs(self, grid: List[List[int]]) -> int:
#         rows = len(grid)
#         cols = len(grid[0])

#         rowsMap: Dict[str, int] = defaultdict(int)
#         colsMap: Dict[str, int] = defaultdict(int)
#         count = 0
#         for r in range(rows):
#             row = '.'.join(str(n) for n in grid[r])
#             rowsMap[row] += 1
#             col: List[int] = []
#             for c in range(cols):
#                 col.append(grid[c][r])
#             colsMap['.'.join(str(n) for n in col)] += 1

#         for k in set(rowsMap) & set(colsMap):
#             count += (rowsMap[k] * colsMap[k])
#         return count


# solution = Solution()
# print(solution.equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))  # 1
# print(solution.equalPairs(
#     [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))  # 3

# print(solution.equalPairs([[13, 13], [13, 13]]))  # 4
# print(solution.equalPairs([[11, 1], [1, 11]]))  # 4

# class Solution:
#     def removeStars(self, s: str) -> str:
#         stack = []
#         for c in s:
#             if c == '*':
#                 if len(stack) >= 1:
#                     stack.pop()
#                 else:
#                     return ''.join(stack)
#             else:
#                 stack.append(c)
#         return ''.join(stack)


# solution = Solution()
# print(solution.removeStars("leet**cod*e"))  # "lecoe"
# print(solution.removeStars("erase*****"))  # ""

# class Solution:
#     def asteroidCollision(self, asteroids: List[int]) -> List[int]:
#         stack: List[int] = []
#         for a in asteroids:
#             if a > 0 or not stack:
#                 stack.append(a)
#             else:
#                 while stack and stack[-1] > 0 and stack[-1] < abs(a):
#                     stack.pop()
#                 if stack and stack[-1] == abs(a):
#                     stack.pop()
#                 elif not stack or stack[-1] < 0:
#                     stack.append(a)
#         return stack


# solution = Solution()

# print(solution.asteroidCollision([5, 10, -5]))  # [5, 10]
# print(solution.asteroidCollision([8, -8]))  # []
# print(solution.asteroidCollision([10, 2, -5]))  # [10]
# print(solution.asteroidCollision([-2, -2, -2, -2]))  # [-2,-2,-2,-2]
# print(solution.asteroidCollision([-2, 1, -2, -2]))  # [-2,-2,-2]
# print(solution.asteroidCollision([-2, -1, 1, 2]))  # [-2, -1, 1, 2]
# print(solution.asteroidCollision([-2, -2, 1, -1]))  # [-2,-2]
# print(solution.asteroidCollision([1, -2, -2, -2]))  # [-2,-2,-2]


# class Solution:
#     def decodeString(self, s: str) -> str:
#         stack: List[str] = []
#         for c in s:
#             if c != ']':
#                 stack.append(c)
#             else:
#                 substr = ''
#                 while stack[-1] != '[':
#                     substr = stack.pop() + substr
#                 stack.pop()  # remove '['
#                 counter = ''
#                 while stack[-1].isdigit():
#                     counter = stack.pop() + counter
#                 stack.append(substr * int(counter))
#         return ''.join(stack)


# solution = Solution()


# class Solution:
#     def findJudge(self, n: int, trust: List[List[int]]) -> int:
#         trusted = defaultdict(int)
#         isTrusting = set()
#         for a, b in trust:
#             isTrusting.add(a)
#             trusted[b] += 1

#         for person in range(1, n + 1):
#             if person not in isTrusting and trusted[person] == n - 1:
#                 return person
#         return -1

# # 2: [1]
# # 3: [2]


# solution = Solution()
# print(solution.findJudge(2, [[1, 2]]))  # 2
# print(solution.findJudge(3, [[1, 3], [2, 3]]))  # 3
# print(solution.findJudge(3, [[1, 3], [2, 3], [3, 1]]))  # -1
# print(solution.findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]))  # 3
# print(solution.findJudge(3, [[1, 2], [2, 3]]))  # -1


# class Solution:
#     def generateParenthesis(self, n: int) -> List[str]:
#         stack = []
#         res = []

#         def backtrack(openedP: int, closedP: int):
#             if openedP == closedP == n:
#                 print(stack)
#                 res.append(''.join(stack))
#             if openedP < n:
#                 stack.append('(')
#                 backtrack(openedP + 1, closedP)
#                 print(111, stack)
#                 stack.pop()
#             if closedP < openedP:
#                 print(222, stack)
#                 stack.append(')')
#                 backtrack(openedP, closedP + 1)
#                 print(333, stack)
#                 stack.pop()
#         backtrack(0, 0)
#         return res


# solution = Solution()
# # ["((()))","(()())","(())()","()(())","()()()"]
# print(solution.generateParenthesis(3))


# class Solution:
#     def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
#         prices = [float('inf')] * n
#         prices[src] = 0
#         for _ in range(k+1):
#             tmpPrices = prices.copy()

#             for source, dest, price in flights:
#                 if prices[source] == float('inf'):
#                     continue
#                 if prices[source] + price < tmpPrices[dest]:
#                     tmpPrices[dest] = prices[source] + price
#             print('tmpPrices', tmpPrices)
#             prices = tmpPrices
#         print('RES', prices)
#         return -1 if prices[dst] == float('inf') else prices[dst]


# solution = Solution()
# print(solution.findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [
#       2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))  # 700
# print(solution.findCheapestPrice(
#     3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))  # 200


# class Solution:
#     def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
#         know_secret = set([0, firstPerson])
#         time_map = {}  # time -> adj list meetings
#         for src, dst, hour in meetings:
#             if hour not in time_map:
#                 time_map[hour] = defaultdict(list)
#             time_map[hour][src].append(dst)
#             time_map[hour][dst].append(src)

#         def dfs(src, adj_list):
#             if src in visit:
#                 return
#             visit.add(src)
#             know_secret.add(src)
#             for neighbor in adj_list[src]:
#                 dfs(neighbor, adj_list)

#         for t in sorted(time_map.keys()):
#             visit = set()
#             for src in time_map[t]:
#                 if src in know_secret:
#                     dfs(src, time_map[t])

#         return list(know_secret)


# solution = Solution()
# print(solution.findAllPeople(
#     6, [[1, 2, 5], [2, 3, 8], [1, 5, 10]], 1))
# print(solution.findAllPeople(
#     4, [[3, 1, 3], [1, 2, 2], [0, 3, 3]], 3))  # [0,1,3]
# print(solution.findAllPeople(11, [[5, 1, 4], [0, 4, 18]], 1))  # [0,1,4,5]
# print(solution.findAllPeople(5, [[1, 4, 3], [0, 4, 3]], 3))  # [0,1,3,4]
# print(solution.findAllPeople(
#     6, [[0, 2, 1], [1, 3, 1], [4, 5, 1]], 1))  # [0,1,2,3]


# class UnionFind:
#     def __init__(self, n) -> None:
#         self.par = [i for i in range(n)]
#         self.size = [1] * n
#         self.count = n

#     def find(self, x):
#         if self.par[x] != x:
#             self.par[x] = self.find(self.par[x])
#         return self.par[x]

#     def union(self, x, y):
#         px, py = self.find(x), self.find(y)
#         if px == py:
#             return
#         if self.size[px] < self.size[py]:
#             self.par[px] = py
#             self.size[py] += self.size[px]
#         else:
#             self.par[py] = px
#             self.size[px] += self.size[py]
#         self.count -= 1


# class Solution:
#     def canTraverseAllPairs(self, nums: List[int]) -> bool:
#         uf = UnionFind(len(nums))
#         factor_index = {}  # f = index of value with factor f
#         for i, n in enumerate(nums):
#             f = 2
#             while f * f <= n:
#                 if n % f == 0:
#                     if f in factor_index:
#                         uf.union(i, factor_index[f])
#                     else:
#                         factor_index[f] = i
#                     while n % f == 0:
#                         n = n // f
#                 f += 1
#             if n > 1:
#                 if n in factor_index:
#                     uf.union(i, factor_index[n])
#                 else:
#                     factor_index[n] = i
#         return uf.count == 1


# solution = Solution()
# print(solution.canTraverseAllPairs([2, 3, 6]))  # True
# print(solution.canTraverseAllPairs([3, 9, 5]))  # False
# print(solution.canTraverseAllPairs([4, 3, 12, 8]))  # True


# class Solution:
#     def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
#         if not p and  not q:
#             return True
#         if not p or not q or p.val != q.val:
#             return False

#         return self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)


# print(solution.isSameTree([1,2,3],[1,2,3])) # True
# # print(solution.isSameTree([1,2],[1,None,2])) # False
# # print(solution.isSameTree([1,2,1],[1,1,2]))# False


# class Solution:
#     def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:

#         def dfs(root):
#             nonlocal diameter
#             if root is None:
#                 return 0
#             left = dfs(root.left)
#             right = dfs(root.right)
#             diameter = max(left + right, diameter)
#             return max(left, right) + 1

#         diameter = 0
#         dfs(root)
#         return diameter

# solution = Solution()
# tree = to_binary_tree([1,2,3,4,5])
# print(solution.diameterOfBinaryTree(tree))


# class Solution:
#     def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
#         queue = deque([root])
#         leftmost_value = None

#         while queue:
#             node = queue.popleft()

#             if node.right:
#                 queue.append(node.right)
#             if node.left:
#                 queue.append(node.left)

#         return node.val


# solution = Solution()
# tree = array_to_binary_tree([2,1,3])
# tree2 = array_to_binary_tree([1,2,3,4,None,5,6,None,None,7])
# print(solution.findBottomLeftValue(tree)) # 1
# print(solution.findBottomLeftValue(tree2)) # 7


# class Solution:
#     def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
#         q = deque([root])
#         res: List[List[int]] = []
#         while q:
#             l = len(q)
#             level = []
#             for i in range(l):
#                 node = q.popleft()
#                 if node:
#                     level.append(node.val)
#                     q.append(node.left)
#                     q.append(node.right)
#             if level:
#                 res.append(level)
#         return res


# solution = Solution()
# tree = array_to_binary_tree([3, 9, 20, None, None, 15, 7])  # [[3],[9,20],[15,7]])
# tree2 = array_to_binary_tree([1, 2, 3, 4, None, None, 5])
# print(solution.levelOrder(tree))
# print(solution.levelOrder(tree2))


# class Solution:
#     def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
#         if root.val % 2 == 0:
#             return False
#         q = deque([root])
#         level = 0
#         while q:
#             level_is_even = level % 2 == 0
#             l = len(q)
#             level_vals = []
#             for i in range(l):
#                 node = q.popleft()

#                 if node:
#                     node_is_even = node.val % 2 == 0
#                     q.append(node.left)
#                     q.append(node.right)
#                     if level_is_even:
#                         if node_is_even or (
#                             len(level_vals) > 0 and level_vals[-1] >= node.val
#                         ):
#                             return False
#                     else:
#                         if not node_is_even or (
#                             len(level_vals) > 0 and level_vals[-1] <= node.val
#                         ):
#                             return False
#                     level_vals.append(node.val)
#             level += 1
#         return True


# solution = Solution()
# tree = array_to_binary_tree([1, 10, 4, 3, None, 7, 9, 12, 8, 6, None, None, 2])  # True
# tree2 = array_to_binary_tree([5, 4, 2, 3, 3, 7])  # False
# print(solution.isEvenOddTree(tree))
# print(solution.isEvenOddTree(tree2))


# class Solution:
#     def maximumOddBinaryNumber(self, s: str) -> str:
#         map = defaultdict(int)
#         res = ""
#         for c in s:
#             map[c] += 1
#         while map["1"] > 1:
#             res += "1"
#             map["1"] -= 1

#         while map["0"] > 0:
#             res += "0"
#             map["0"] -= 1
#         res += "1"
#         return res


# solution = Solution()
# print(solution.maximumOddBinaryNumber("010"))  # 001
# print(solution.maximumOddBinaryNumber("0101"))  # 1001


# class Solution:
#     def sortedSquares(self, nums: List[int]) -> List[int]:
#         for i in range(len(nums)):
#             nums[i] = pow(nums[i], 2)

#         return sorted(nums)


# class Solution:
#     def sortedSquares(self, nums: List[int]) -> List[int]:
#         res = []
#         l, r = 0, len(nums) - 1
#         while l <= r:
#             l_sq = nums[l] * nums[l]
#             r_sq = nums[r] * nums[r]
#             if l_sq > r_sq:
#                 res.append(l_sq)
#                 l += 1
#             else:
#                 res.append(r_sq)
#                 r -= 1
#         print(res)
#         return res[::-1]


# solution = Solution()
# print(solution.sortedSquares([-4, -1, 0, 3, 10]))  # [0,1,9,16,100]


# class Solution:
#     def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
#         dummy = ListNode(0, head)
#         L = dummy
#         R = head
#         while n > 0 and R:
#             R = R.next
#             n -= 1

#         while R:
#             L = L.next
#             R = R.next

#         L.next = L.next.next

#         return dummy.next


# solution = Solution()


# class Solution:
#     def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
#         l = len(tokens)
#         if l == 0:
#             return 0
#         score = 0
#         L, R = 0, l - 1
#         tokens_left = l
#         tokens.sort()
#         while tokens_left:
#             if tokens[L] <= power:
#                 power -= tokens[L]
#                 score += 1
#                 L += 1
#                 tokens_left -= 1
#             elif score > 0:
#                 if tokens_left == 1:
#                     return score
#                 score -= 1
#                 power += tokens[R]
#                 tokens_left -= 1
#                 R -= 1
#             else:
#                 L += 1
#                 tokens_left -= 1

#         return score


# solution = Solution()
# print(solution.bagOfTokensScore([100, 200, 300, 400], 200))  # 2
# print(solution.bagOfTokensScore([100], 50))  # 0
# print(solution.bagOfTokensScore([200, 100], 150))  # 1
# print(solution.bagOfTokensScore([58, 91], 50))  # 1


# class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:
#         uniq: Set[ListNode] = set()
#         if head:
#             uniq.add(head)
#         else:
#             return False
#         node = head
#         while node:
#             node = node.next
#             if node:
#                 if node in uniq:
#                     return True
#                 else:
#                     uniq.add(node)
#             else:
#                 return False

#         return False

# class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:
#         slow, fast = head, head

#         while fast and fast.next:
#             assert slow is not None
#             slow = slow.next
#             fast = fast.next.next
#             if fast == slow:
#                 return True

#         return False


# class Solution:
#     def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
#         nums1[m:] = nums2
#         nums1.sort()
#         return


# solution = Solution()
# print(solution.merge([1, 2, 3, 0, 0, 0], m=3,
#       nums2=[2, 5, 6], n=3))  # [1,2,2,3,5,6]


# class Solution:
#     def maxFrequencyElements(self, nums: List[int]) -> int:
#         res = 0
#         counter = Counter(nums)
#         max_freq = max(counter.values())
#         for v in counter.values():
#             if v == max_freq:
#                 res += v
#         return res


# solution = Solution()
# print(solution.maxFrequencyElements([1, 2, 2, 3, 1, 4]))  # 4
# print(solution.maxFrequencyElements([1, 2, 3, 4, 5]))  # 5


# class Solution:
#     def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
#         L, R = 0, 0
#         while L < len(nums1) and R < len(nums2):
#             left = nums1[L]
#             right = nums2[R]
#             if left == right:
#                 return left
#             if left < right:
#                 L += 1
#             if right < left:
#                 R += 1

#         return -1


# solution = Solution()
# print(solution.getCommon([1, 2, 3, 6], [2, 3, 4, 5]))  # 2
# print(solution.getCommon([1, 2], [2, 4]))  # 2


# class Solution:
#     def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
#         return list(set(nums1) & set(nums2))


# class Solution:
#     def customSortString(self, order: str, s: str) -> str:
#         count = Counter(s)
#         res = ''
#         for c in order:
#             if c in count:
#                 res += c * count[c]
#                 del count[c]
#         if len(count):
#             for char, freq in count.items():
#                 res += char * freq
#         return res

# solution = Solution()
# print(solution.customSortString("cba", "abcd"))  # "cbad"
# print(solution.customSortString("bcafg", "abcd"))  # "bcad"
# print(solution.customSortString("kqep", "pekeq"))  # "kqeep"


# class Solution:
#     def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         dummy = ListNode(0, head)
#         L = dummy
#         while L:
#             prefix_sum = 0
#             R = L.next

#             while R:
#                 prefix_sum += R.val
#                 if prefix_sum == 0:
#                     L.next = R.next
#                 R = R.next

#             L = L.next
#         return dummy.next

# class Solution:
#     def subarraySum(self, nums: List[int], k: int) -> int:
#         count = 0
#         for i in range(len(nums)):
#             sum = 0
#             for j in range(i, len(nums)):
#                 sum += nums[j]
#                 if sum == k:
#                     count +=1
#         return count

# class Solution:
#     def subarraySum(self, nums: List[int], k: int) -> int:
#         count = 0
#         sum = 0
#         map = defaultdict(int)
#         map[0] = 1
#         for n in nums:

#             sum += n
#             if sum - k in map:
#                 print('map', map.items(), 'sum', sum, 'sum - k', sum - k)
#                 count += map[sum-k]
#             map[sum] = map[sum] + 1

#         return count


# solution = Solution()
# print(solution.subarraySum([1, 2, 3], 3))
# print(solution.subarraySum([1, 1, 1], 2))


# class Solution:
#     def pivotInteger(self, n: int) -> int:
#         pivot = n - 1
#         while pivot > 0:
#             left_sum = ((1 + pivot) * pivot) / 2
#             right_sum = ((pivot + n) * (n - pivot + 1)) / 2
#             if left_sum == right_sum:
#                 return pivot
#             pivot -= 1
#         return -1


# 1234567  8
# solution = Solution()
# print(solution.pivotInteger(8))  # 6   1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.


# class Solution:
#     def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
#         sum_count = 0
#         current_sum = 0
#         freq = defaultdict(int)
#         for n in nums:
#             current_sum += n
#             if current_sum == goal:
#                 sum_count += 1
#             if current_sum - goal in freq:
#                 sum_count += freq[current_sum - goal]
#             freq[current_sum] += 1
#         return sum_count
# class Solution:
#     def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
#         start = 0
#         prefix_zeros = 0
#         win_sum = 0
#         res = 0

#         for end, num in enumerate(nums):
#             win_sum += num
#             while start < end and (nums[start] == 0 or win_sum > goal):
#                 if nums[start] == 1:
#                     prefix_zeros = 0
#                 else:
#                     prefix_zeros += 1

#                 win_sum -= nums[start]
#                 start += 1

#             if win_sum == goal:
#                 res += 1 + prefix_zeros

#         return res


# solution = Solution()
# print(solution.numSubarraysWithSum([1, 0, 1, 0, 1], 2))  # 4
# print(solution.numSubarraysWithSum([0, 0, 0, 0, 0], 0))  # 15

# class Solution:
#     def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
#         if not intervals:
#             return [newInterval]
#         res: List[List[int]] = []
#         for i in range(len(intervals)):
#             curr_start, curr_end = intervals[i]
#             new_start, new_end = newInterval
#             if new_end < curr_start:
#                 res.append(newInterval)
#                 return res + intervals[i:]
#             if new_start > intervals[-1][1]:
#                 intervals.append(newInterval)
#                 return intervals

#             if new_start > curr_end:
#                 res.append(intervals[i])
#             else:
#                 newInterval = [min(new_start, intervals[i][0]),
#                                max(new_end, intervals[i][1])]

#         res.append(newInterval)

#         return res


# solution = Solution()
# print(solution.insert([[1, 3], [6, 9]], [2, 5]))  # [[1,5],[6,9]]

# print(solution.insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
# # [[1,2],[3,10],[12,16]]
# print(solution.insert([[1, 5]], [2, 7]))  # [[1,7]]


# [1, 2], [3, 5], [4, 8], [8, 10], [12, 16]


# class Solution:
#     def findMinArrowShots(self, points: List[List[int]]) -> int:
#         l = len(points)
#         if l == 1:
#             return 1
#         points = sorted(points, key=lambda x: x[0])
#         arrows = 1
#         prev = points[0]
#         for i in range(1, l):
#             curr = points[i]
#             if curr[0] <= prev[1]:

#                 prev = [curr[0], min(prev[1], curr[1])]
#             else:
#                 arrows += 1
#                 prev = curr
#         return arrows


# [[1, 6], [2, 8], [7, 12], [10, 16]]
# [[1, 2], [3, 4], [5, 6], [7, 8]]
# solution = Solution()
# print(solution.findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))  # 2
# print(solution.findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]))  # 4


# class Solution:
#     def leastInterval(self, tasks: List[str], n: int) -> int:
#         task_counter = Counter(tasks)
#         max_heap = [-count for count in task_counter.values()]
#         heapq.heapify(max_heap)
#         time = 0
#         q = deque()  # [-count, idleTime]
#         print(max_heap)
#         while max_heap or q:
#             time += 1
#             if max_heap:
#                 count = 1 + heapq.heappop(max_heap)
#                 if count:
#                     q.append([count, time + n])
#             if q and q[0][1] == time:
#                 heapq.heappush(max_heap, q.popleft()[0])
#         return time


# { "A": 2, "B": 2 }

# solution = Solution()
# A -> B -> idle -> A -> B -> idle -> A -> B.
# print(solution.leastInterval(["A", "A", "A", "B", "B", "B"], 2))


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         if not head:
#             return None

#         newHead = head
#         if head.next:
#             newHead = self.reverseList(head.next)
#             head.next.next = head
#         head.next = None
#         return newHead

#     def reverseList(self, head):
#         def reverse(cur, prev):
#             if cur is None:
#                 return prev
#             nxt = cur.next
#             cur.next = prev
#             return reverse(nxt, cur)
#         return reverse(head, None)
# [1,2,3,4,5] -> [5,4,3,2,1]


# list = lst2link([1, 2, 2, 1])


# class Solution:
#     def isPalindrome(self, head: Optional[ListNode]) -> bool:
#         if not head:
#             return True
#         vals = []
#         while head:
#             vals.append(head.val)
#             head = head.next
#         L, R = 0, len(vals) - 1
#         while L < R:
#             if vals[L] != vals[R]:
#                 return False
#             L += 1
#             R -= 1
#         return True


# solution = Solution()
# print(solution.isPalindrome(list))  # type: ignore


# class Solution:
#     def findDuplicate(self, nums: List[int]) -> int:
#         slow, fast = 0, 0
#         while True:
#             slow = nums[slow]
#             fast = nums[nums[fast]]
#             if slow == fast:
#                 break
#         slow2 = 0
#         while True:
#             slow = nums[slow]
#             slow2 = nums[slow2]
#             if slow == slow2:
#                 return slow


# solution = Solution()
# print(solution.findDuplicate([1, 3, 4, 2, 2]))


# class Solution:
#     def permute(self, nums: List[int]) -> List[List[int]]:
#         res: List[List[int]] = []

#         if len(nums) == 1:
#             return [nums.copy()]

#         for i in range(len(nums)):
#             n = nums.pop(0)
#             perms = self.permute(nums)
#             nums.append(n)
#             for p in perms:
#                 p.append(n)
#             res.extend(perms)

#         return res


# solution = Solution()
# [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
# print(solution.permute([1, 2, 3]))


# class Solution:
#     def firstMissingPositive(self, nums: List[int]) -> int:
#         max_end = len(nums) + 1
#         res = 0
#         # mark every num out of bound of [1...len(nums) + 1] with len(nums) + 1
#         for i in range(len(nums)):
#             if nums[i] > len(nums) or nums[i] <= 0:
#                 nums[i] = max_end

#         # mark every num IN range of [1...len(nums)-1] with minus sign
#         for n in nums:
#             val = abs(n) - 1
#             if 0 <= val <= len(nums) - 1 and nums[val] > 0:
#                 nums[val] *= - 1
#         # check every num IN range of [1...len(nums)+1] to be there by checking minus sign
#         for i in range(1, max_end):
#             if nums[i - 1] >= 0:
#                 return i

#         # if no num in range found -> return len(nums) + 1
#         return max_end


# solution = Solution()
# print(solution.firstMissingPositive([1, 2, 0]))  # 3
# print(solution.firstMissingPositive([3, 4, -1, 1]))  # 2
# print(solution.firstMissingPositive([7, 8, 9, 11, 12]))  # 1
# print(solution.firstMissingPositive([1]))  # 2
# print(solution.firstMissingPositive([1, 1]))  # 2
# print(solution.firstMissingPositive([0, 1, 2]))  # 3


# class Solution:
#     def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
#         if k <= 0:
#             return 0
#         L, R = 0, 0
#         total_count = 0
#         current_product = 1

#         while R < len(nums):
#             current_product *= nums[R]

#             while current_product >= k and L <= R:
#                 current_product /= nums[L]
#                 L += 1

#             total_count += R - L + 1
#             R += 1
#         return total_count


# solution = Solution()
# print(solution.numSubarrayProductLessThanK([10, 5, 2, 6], 100))  # 8
# print(solution.numSubarrayProductLessThanK([1, 1, 1], 1))  # 1
# print(solution.numSubarrayProductLessThanK([1, 2, 3], 0))  # 0


# class Solution:
#     def maxSubarrayLength(self, nums: List[int], k: int) -> int:
#         max_length = 1
#         L = 0
#         freq_map = defaultdict(int)
#         for R, n in enumerate(nums):
#             freq_map[n] += 1
#             while freq_map[n] > k:
#                 freq_map[nums[L]] -= 1
#                 L += 1

#             max_length = max(max_length, R - L + 1)
#         return max_length


# solution = Solution()
# print(solution.maxSubarrayLength([1, 1, 1, 3], 2))  # 3


# class Solution:
#     def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
#         count = 0
#         min_i = max_i = -1
#         bad_i = -1
#         for i in range(len(nums)):
#             if minK <= nums[i] <= maxK:
#                 if nums[i] == minK:
#                     min_i = i
#                 if nums[i] == maxK:
#                     max_i = i
#                 if max_i >= 0 and min_i >= 0:
#                     count += min(min_i, max_i) - bad_i  # !!!!!!!!!!!!!!!!!
#             else:
#                 min_i, max_i = -1, -1
#                 bad_i = i
#         return count


# solution = Solution()
# print(solution.countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))   # 2
# print(solution.countSubarrays([4, 2, 1, 3, 5, 2, 7, 5, 1, 3], 1, 5))   # 6
# print(solution.countSubarrays([1, 1, 1, 1], 1, 1))   # 10


# class Solution:
#     def lengthOfLastWord(self, s: str) -> int:
#         return len(s.rstrip().split()[-1])


# solution = Solution()
# print(solution.lengthOfLastWord('Hello World'))  # 5
# print(solution.lengthOfLastWord('   fly me   to   the moon  '))  # 4
# print(solution.lengthOfLastWord('luffy is still joyboy'))  # 6


# class Solution:
#     def isIsomorphic(self, s: str, t: str) -> bool:
#         char_mapS: Dict[str, str] = {}
#         char_mapT: Dict[str, str] = {}
#         for i in range(len(s)):
#             # s to t
#             if s[i] in char_mapS:
#                 if char_mapS[s[i]] != t[i]:
#                     return False
#             else:
#                 char_mapS[s[i]] = t[i]
#             # t to s
#             if t[i] in char_mapT:
#                 if char_mapT[t[i]] != s[i]:
#                     return False
#             else:
#                 char_mapT[t[i]] = s[i]

#         return True


# solution = Solution()
# print(solution.isIsomorphic('egg', 'add'))  # True
# ('ea', )

# print(solution.isIsomorphic('foo', 'bar'))  # False
# print(solution.isIsomorphic('paper', 'title'))  # True
# print(solution.isIsomorphic("bbbaaaba", "aaabbbba"))  # False
# print(solution.isIsomorphic("badc", "baba"))  # False


# class Solution:
#     def exist(self, board: List[List[str]], word: str) -> bool:
#         ROWS = len(board)
#         COLS = len(board[0])

#         def dfs(row: int, col: int, i: int) -> bool:
#             if i == len(word):
#                 return True
#             # out of bound
#             if row < 0 or row >= ROWS or col < 0 or col >= COLS:
#                 return False
#             # not char we looking for
#             if board[row][col] != word[i]:
#                 return False
#             # mark current char visited
#             board[row][col] = ""
#             next_i = i + 1
#             res = (
#                 dfs(row - 1, col, next_i)
#                 or dfs(row + 1, col, next_i)
#                 or dfs(row, col + 1, next_i)
#                 or dfs(row, col - 1, next_i)
#             )
#             # set back visited char
#             board[row][col] = word[i]
#             return res

#         for r in range(ROWS):
#             for c in range(COLS):
#                 if dfs(r, c, 0):
#                     return True
#         return False


# class Solution:
#     def maxDepth(self, s: str) -> int:
#         depth = 0
#         max_depth = 0

#         for char in s:
#             if char == '(':
#                 depth += 1
#             elif char == ')':
#                 depth -= 1
#             max_depth = max(depth, max_depth)

#         return max_depth


# class Solution:
#     def makeGood(self, s: str) -> str:
#         if len(s) == 1:
#             return s
#         stack: List[str] = []

#         def areGoodChars(char1: str, char2: str) -> bool:
#             return not (char1 != char2 and char1.upper() == char2.upper())

#         for i in range(len(s)):
#             if len(stack) == 0 or areGoodChars(s[i], stack[-1]):
#                 stack.append(s[i])
#             else:
#                 stack.pop()

#         return ''.join(stack)


# solution = Solution()
# print(solution.makeGood("leEeetcode"))
# print(solution.makeGood("abBAcC"))


# # "abBAcC" --> "aAcC" --> "cC" --> ""
# # "abBAcC" --> "abBA" --> "aA" --> ""


# class Solution:
#     def minRemoveToMakeValid(self, s: str) -> str:
#         opened = 0
#         stack: List[str] = []
#         for c in s:
#             if c == '(':
#                 opened += 1
#                 stack.append(c)
#             else:
#                 if c == ')':
#                     if opened >= 1:
#                         opened -= 1
#                         stack.append(c)
#                 else:
#                     stack.append(c)
#         if not opened:
#             return ''.join(stack)

#         i = len(stack) - 1

#         while opened:
#             if stack[i] == '(':
#                 stack[i] = ''
#                 opened -= 1
#             i -= 1
#         return ''.join(stack)


# solution = Solution()
# print(solution.minRemoveToMakeValid("lee(t(c)o)de)"))  # "lee(t(c)o)de"
# print(solution.minRemoveToMakeValid("a)b(c)d"))  # "ab(c)d"
# print(solution.minRemoveToMakeValid("))(("))  # ""
# print(solution.minRemoveToMakeValid("())()((("))  # ""

# class Solution:
#     def countSquares(self, matrix: List[List[int]]) -> int:
#         ROWS = len(matrix)
#         COLS = len(matrix[0])
#         dp = [[0] * (COLS + 1) for _ in range(ROWS + 1)]
#         res = 0
#         for r in range(1, ROWS + 1):
#             for c in range(1, COLS + 1):
#                 if matrix[r-1][c-1] == 1:
#                     dp[r][c] = min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1
#                     res += dp[r][c]
#         print(dp)
#         return res


# solution = Solution()
# print(solution.countSquares([
#     [0, 1, 1, 1],
#     [1, 1, 1, 1],
#     [0, 1, 1, 1]
# ]))  # 15
# [[0, 0, 0, 0, 0],
#  [0, 0, 1, 1, 1],
#  [0, 1, 1, 2, 2],
#  [0, 0, 1, 2, 3]
# ]


# greedy
# class Solution:
#     def checkValidString(self, s: str) -> bool:
#         opened_brackets_min = 0
#         opened_brackets_max = 0

#         for c in s:
#             if c == '(':
#                 opened_brackets_min += 1
#                 opened_brackets_max += 1
#             if c == ')':
#                 opened_brackets_max -= 1
#                 opened_brackets_min = max(opened_brackets_min-1, 0)
#             if c == '*':
#                 opened_brackets_max += 1
#                 opened_brackets_min = max(opened_brackets_min-1, 0)
#             if opened_brackets_max < 0:
#                 return False

#         return opened_brackets_min == 0


# class Solution:
#     def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
#         count = Counter(students)
#         res = len(students)
#         for s in sandwiches:
#             if count[s] > 0:
#                 count[s] -= 1
#                 res -= 1
#             else:
#                 return res
#         return res


# solution = Solution()
# # print(solution.countStudents([1, 1, 0, 0], [0, 1, 0, 1]))
# print(solution.countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))


# class Solution:
#     def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
#         if tickets[k] == 1:
#             return k + 1
#         time = 0
#         current_tickets = tickets[k]
#         for i in range(len(tickets)):
#             el = tickets[i]
#             if i <= k:
#                 time += min(el, current_tickets)
#             else:
#                 time += min(el, current_tickets-1)
#         return time


# class Solution:
#     def trap(self, height: List[int]) -> int:
#         if not height:
#             return 0
#         L, R = 0, len(height) - 1
#         left_max, right_max = height[L], height[R]
#         water = 0

#         while L < R:
#             if left_max < right_max:
#                 L += 1
#                 left_max = max(left_max, height[L])
#                 water  += left_max - height[L]
#             else:
#                 R -= 1
#                 right_max = max(right_max, height[R])
#                 water  += right_max - height[R]

#         return water


# solution = Solution()
# print(solution.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

# class Solution:
#     def largestRectangleArea(self, heights: List[int]) -> int:
#         max_area = 0
#         stack = []  # (index, height)

#         for i, h in enumerate(heights):
#             start = i
#             while stack and stack[-1][1] > h:
#                 index, height = stack.pop()
#                 max_area = max(max_area, height * (i-index))
#                 start = index
#             stack.append((start, h))

#         for i, h in stack:
#             max_area = max(max_area, height * (len(height) - i))
#         return max_area


# solution = Solution()
# print(solution.largestRectangleArea([2, 1, 5, 6, 2, 3]))  # 10


# print(solution.largestRectangleArea([2, 4]))  # 4


# class Solution:
#     def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
#         sum = 0
#         def traverse(root: Optional[TreeNode], is_left: bool):
#             nonlocal sum
#             if not root:
#                 return
#             if is_left and not root.left and not root.right:
#                 sum += root.val
#             traverse(root.right, False)
#             traverse(root.left, True)

#         traverse(root, False)
#         return sum


# root = array_to_binary_tree([3, 9, 20, None, None, 15, 7])  # 24

# solution = Solution()
# print(solution.sumOfLeftLeaves(root))


# class Solution:
#     def islandPerimeter(self, grid: List[List[int]]) -> int:
#         perimeter = 0
#         ROWS, COLS = len(grid), len(grid[0])

#         def countSides(row, col):
#             res = 0
#             print((row, col))
#             if row == 0 or grid[row-1][col] == 0:
#                 res += 1
#             if row == ROWS-1 or grid[row+1][col] == 0:
#                 res += 1
#             if col == COLS-1 or grid[row][col + 1] == 0:
#                 res += 1
#             if col == 0 or grid[row][col - 1] == 0:
#                 res += 1
#             return res

#         for r in range(ROWS):
#             for c in range(COLS):
#                 el = grid[r][c]
#                 if el == 0:
#                     continue
#                 else:
#                     perimeter += countSides(r, c)

#         return perimeter


# solution = Solution()
# print(solution.islandPerimeter(
#     [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]))  # 16

# class Solution:
#     def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
#         ROWS = len(land)
#         COLS = len(land[0])
#         res: List[List[int]] = []

#         def traverse(row: int, col: int):
#             if (row >= ROWS or
#                 row < 0 or
#                 col >= COLS or
#                 col < 0 or
#                     land[row][col] != 1):
#                 return
#             land[row][col] = -1
#             res[-1][2] = max(row, res[-1][2])
#             res[-1][3] = max(col, res[-1][3])
#             traverse(row + 1, col)
#             traverse(row - 1, col)
#             traverse(row, col+1)
#             traverse(row, col-1)

#         for r in range(ROWS):
#             for c in range(COLS):
#                 el = land[r][c]
#                 if el == 1:
#                     res.append([r, c, r, c])
#                     traverse(r, c)

#         return res


# solution = Solution()
# # [[0,0,0,0],[1,1,2,2]]
# print(solution.findFarmland([[1, 0, 0], [0, 1, 1], [0, 1, 1]]))
# print(solution.findFarmland([[1, 1], [1, 1]]))  # [[0,0,1,1]]


# class Solution:
#     def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
#         if len(edges) == 0:
#             return False

#         adjacency_list = {}

#         # BI-directional loop
#         for [src, dst] in edges:
#             if src in adjacency_list:
#                 adjacency_list[src].append(dst)
#             else:
#                 adjacency_list[src] = [dst]

#             if dst in adjacency_list:
#                 adjacency_list[dst].append(src)
#             else:
#                 adjacency_list[dst] = [src]

#         if source not in adjacency_list.keys():
#             return False
#         q = deque()
#         q.append(source)
#         visited: Set[int] = set()

#         while q:
#             curr_node = q.popleft()
#             if curr_node == destination:
#                 return True
#             if curr_node not in visited:
#                 for neighbor in adjacency_list[curr_node]:
#                     q.append(neighbor)
#             visited.add(curr_node)

#         return False


# solution = Solution()
# print(solution.validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))  # True
# print(solution.validPath(
#     6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5))  # False


# class Solution:
#     def openLock(self, deadends: List[str], target: str) -> int:
#         if '0000' in deadends:
#             return -1

#         def get_possible_turns(lock)-> List[str]:
#             res = []
#             for i in range(4):
#                 digit = str((int(lock[i]) + 1) % 10)
#                 res.append(lock[:i] + digit + lock[i+1:])
#                 digit = str((int(lock[i]) -1 + 10) % 10)
#                 res.append(lock[:i] + digit + lock[i+1:])
#             return res

#         q = deque()
#         q.append(['0000', 0]) # [lock, turns]
#         visited: Set[str] = set(deadends)
#         while q:
#             lock, turns = q.popleft()
#             if lock == target:
#                 return turns
#             for turn in get_possible_turns(lock):
#                 if turn not in visited:
#                     visited.add(turn)
#                     q.append([turn, turns + 1])

#         return -1

# solution = Solution()
# print(solution.openLock(["0201","0101","0102","1212","2002"], '0202')) # 6
# print(solution.openLock(["8888"], '0009')) # 1
# print(solution.openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], '8888')) # -1


class Solution:
    def tribonacci(self, n: int) -> int:
        queue = deque()
        queue.extend([0, 1, 1])
        if n < 3:
            return queue[n]
        for _ in range(3, n+1):
            queue.append(queue[0] + queue[1]+queue[2])
            queue.popleft()
        return queue.pop()


solution = Solution()
print(solution.tribonacci(4)) # 4