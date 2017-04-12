/**
 * Created by Administrator on 2015/11/15.
 */
function valide()
{
    x=document.getElementById("text").value;
    if(x==""||isNaN(x))
    {
        alert("您输入的不是数字，请输入数字")
    }
    else
    {
        alert("您输入的是"+x)
    }
}