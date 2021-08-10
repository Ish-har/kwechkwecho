var pictures = ["IMG_3305_Original-1.jpg","IMG_3542.jpg","IMG_3560.png","IMG_4236.jpg","IMG_4312.jpg","IMG_7997.jpg"];

var name_of_member = ["My brother, Me ,and my amma","My brother and me in the car","Me inside a couch's mouth","Me with glasses and a mustache","Me and my brother sitting on a fallen tree","My brother, me, and my appa near the lighthouse"];

var i = 0;

function update(){
    i++;
    var number_of_family_members = 6;
    if(i>number_of_family_members){
        i=0;
    }
    var updated_image = pictures[i];
    var updated_name = name_of_member[i];
    document.getElementById("images").src = updated_image;
    document.getElementById("names").innerHTML = updated_name;
}