let n=6;
let str = '';
for(i=0;i<n;i++)         //this is for Row 
{
    for(j=0;j<n-i;j++)       //this is for Column
    {
        str+="*";
    }
    str+="\n";
}
console.log(str);