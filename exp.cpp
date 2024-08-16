#include<iostream>
using namespace std;

class expdemo{

void fun1(){
    int n,m,res;
    cout<<"Enter the value "<<endl;
    cin>>n;
    cout<<"Enter the second value "<<endl;
    cin>>m;
    res=n+m;
}
void fun2(){
    cout<<"function is working ";
}
};
int main()
{
    expdemo obj;
    obj.fun1();
    obj.fun2();
}