nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
var merge = function(nums1, m, nums2, n) {
    let first= m-1;
    let second=n-1;
    let i = m+n-1;

    while(second >= 0){
        let fval=nums1[first];
        let sval=nums2[second];
        
        if(fval > sval)
        {
            nums1[i] = fval;
            i--;
            first--;
        }
        else 
        {
            nums1[i] = sval;
            i--;
            second--;

        }

    }
}