var images = ["https://i.postimg.cc/bNv3h86y/IMG-20150321-WA0009-2.jpg","https://i.postimg.cc/CLtHp8B7/IMG20180616141752-2.jpg"];
var names = ["Fmaily Book","DAD", "MOM"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    <img src=""></img>
    <img src=""></img>
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

    var y=0;
    function update(){
      if (y==3)
      {
        y=0;
      }
}
