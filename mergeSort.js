const merge = (left,right) => {
    let l = 0, r = 0, lenLeft = left.length, lenRight = right.length;
    let merged = [];

    while (l < lenLeft && r < lenRight) {
        if (left[l] < right[r]){
            merged.push(left[l]);
            l++;
        }else{
            merged.push(right[r]);
            r++;
        }
    }

    while (l < lenLeft){
        merged.push(left[l]);
        l++;
    }

    while (r < lenRight){
        merged.push(right[r]);
        r++;
    }

    return merged;
}

const mergeSort = (list) => {
    if (list.length <= 1) return list;

    let mid = Math.floor(list.length/2);
    let left = mergeSort(list.slice(0,mid));
    let right = mergeSort(list.slice(mid,list.length));

    return merge(left,right);    
}

const list = [3, 2, 1, 13, 8, 5, 0, 1];
const list2 = [105, 79, 100, 110]
console.log("list1: " + mergeSort(list));
console.log("list2: " + mergeSort(list2));