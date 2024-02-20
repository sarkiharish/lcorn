#include<bits/stdc++.h>
using namespace std;
#define MAX 9999
int main() {
	int n;
	cin>>n;
	int arr[MAX];
    int i = 0;
    int j, r;
  
    
    while (n != 0) {
        r = n % 10;
        arr[i] = r;
        i++;
        n = n / 10;
    }
    for (j = i - 1; j > -1; j--) {
        if(arr[j]%2==0)
            arr[j]=arr[j]+1;
        else
            arr[j]=arr[j]-1;
    }
    for(j=i-1;j>-1;j--){
        cout<<arr[j];
    }
}