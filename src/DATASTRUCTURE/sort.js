// https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F8T2Ka%2FbtqzvpzRAvU%2FKfu9VmIN5VWHFbpMz9kjO1%2Fimg.png

// 기초 정렬 알고리즘 복습
// 안보고 다시한번 짜보자

/*
1. 퀵정렬
2. 버블정렬
3. 선택정렬
4. 합병정렬 (미리정렬된 두개의 배열) https://www.youtube.com/watch?v=QAyl79dCO_k&list=PLjSkJdbr_gFZMNhIMl2AJ9n5c2hNK-qJk&index=2
5. 삽입정렬
*/

var AA = [234,45634,23,41,2345,34,23,1,4,3,6,234,4536,55,234,23,456,45,234,1,856,9,67,56,7];

// 스왑 헬퍼 => 배열의 위치를 바꾼다.
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 1. 퀵정렬
// 퀵 정렬은 분할 정복 방법과 재귀를 통해 리스트를 정렬한다.
function QuickSort(arr) {
    if(arr.length == 0 ) {
        return [];
    }

    var middle = arr[0];
    var len = arr.length;
    var left = [], right = [];

    for(var i = 1; i < len; ++i) {
        if( arr[i] < middle ) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return QuickSort(left).concat(middle, QuickSort(right));
} // to much memory usage


// arr = [4,3,5,1,7,2,3,1,5,8,9]
//        L         P         R

var findKthLargest = function(nums, k) {
    nums = QuickSortCheapMemory(nums);
    return nums[nums.length - k];
};

function QuickSortCheapMemory(arr, left, right) {
    if(!arr || arr.length == 0 ) {
        return arr;
    }
    left = left || 0;
    right = right || arr.length - 1;
    let pivot = partition(arr, left, right); // first index of right hand side : P
    if (left < (pivot - 1)) { // # of ramaining on left is not 1
        QuickSortCheapMemory(arr, left, pivot - 1);
    }
    if (pivot < right) {
        QuickSortCheapMemory(arr, pivot, right);
    }
    function partition(arr, left, right) {
        let median = arr[Math.floor((left + right) / 2)];
        while (left <= right) {
            while (arr[left] < median) left++;
            while (median < arr[right]) right--;
            if (left <= right) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        return left;
    }
    return arr;
}


// 2. 버블정렬
// 버블 정렬은 서로 이웃한 데이터들을 비교하며 가장 큰 데이터를 가장 뒤로 보내며 정렬하는 방식
function BubbleSort(arr) {
    var len = arr.length;

    for(var outer = len; outer > 1; --outer) {
        for(var inner = 0; inner < outer; ++inner) {
            if( arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner+1);
            }
        }
    }

    return arr;
};
// 3. 선택정렬
// 선택 정렬은 정렬되지 않은 데이터들에 대해 가장 작은 데이터를 찾아 가장 앞의 데이터와 교환해나가는 방식
function SelectionSort(arr) {
    var len = arr.length;
    var min;

    for(var outer = 0; outer < length -1; ++outer) {
        min = outer;
        for(var inner = outer + 1; inner < length; ++inner) {
            if( arr[inner] < arr[min] ) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }

    return arr;
}


// 4. 합병정렬
// 퀵정렬과 마찬가지로 분할 정복 알고리즘중 하나이다.
function MergeSort(arr) {
    var len = arr.length;
    if(len == 1) {
        return arr;
    }

    var middle = Math.floor(len / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, len);

    function merge(left, right) {
        var result = [];

        while(left.length && right.length) {
            if( left[0] <= right[0] ) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while(left.length) {
            result.push(left.shift());
        }

        while(right.length) {
            result.push(right.shift());
        }

        return result;
    }

    return merge(MergeSort(left), MergeSort(right));
}


// 5. 삽입정렬
// 삽입 정렬은 아직 정렬되지 않은 임의의 데이터를 이미 정렬된 부분의 적절한 위치에 삽입해 가며 정렬하는 방식
function InsertionSort(arr) {
    var len = arr.length;
    var temp, inner;

    for(var outer = 1; outer < len; ++outer) {
        temp = arr[outer];
        inner = outer;

        while(inner > 0 && arr[inner -1] >= temp) {
            arr[inner] = arr[inner -1];
            --inner;
        }

        arr[inner] = temp;
    }

    return arr;
}

// console.log(QuickSort(AA.slice()));
console.log(QuickSortCheapMemory(AA.slice()));
// console.log(BubbleSort(AA.slice()));
// console.log(SelectionSort(AA.slice()));
// console.log(MergeSort(AA.slice()));
// console.log(InsertionSort(AA.slice()));

//출처: https://boycoding.tistory.com/74 [소년코딩]ç