let arr = [9,20,33,42,13,99,55];

for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        continue;
    }
    if(arr[i]%3==0)
    {
        console.log(arr[i]);       
    }
}
