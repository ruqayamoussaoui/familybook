var images = ["https://www.notimeforflashcards.com/wp-content/uploads/2012/02/The-Family-Book.jpg","https://webstockreview.net/images/jeans-clipart-girl-jeans-2.jpg", "https://clipartion.com/wp-content/uploads/2015/11/clip-art-dad.png" , "https://img.freepik.com/free-vector/muslim-mother-hugging-her-son_29190-4546.jpg?size=338&ext=jpg", "https://i.pinimg.com/236x/d4/d0/ea/d4d0eae1b40dfa0b02ed2a3ff6c32710--clip-art-happy.jpg?b=t", "https://i.pinimg.com/736x/fc/60/f2/fc60f2ea42d7bd98a89661d11c4d6652--gray-videos.jpg"];
var names = ["Fmaily Book","Me!", "Father", "Mother", "Middle Brother", "Oldest Brother"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
