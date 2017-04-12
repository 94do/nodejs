/**
 * Created by Administrator on 2015/11/10.
 */
function getCookie(name)
{
    if (document.cookie.length>0)
    {
        start = document.cookie.indexOf(name + "=")
        if (start != -1)
        {
            start = start + name.length + 1;
            end = document.cookie.indexOf(";",start)
            if(end != -1) end = document.cookie.substring(start,end)
        }
    }
    return""
}
function setCookie (name,value,expiredays)
{
    var exdate = new Date()
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie = name +"=" + escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}
function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {alert('Welcome again '+username+'!')}
    else
    {
        username=prompt('Please enter your name:',"")
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}