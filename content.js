console.log("active");
un = "f20250966"; // write your username here
pd = "Fd*25057101"; //write your pwd here

un_box = document.getElementById("ft_un");
un_pd = document.getElementById("ft_pd");

try{
    un_box.value = un;
    un_pd.value = pd;
    console.log(un, pd);
    button = document.getElementsByClassName("primary")[0];
    button.click();
}catch(err){
    console.log("err")
}
