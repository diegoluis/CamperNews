$(document).ready(function() { 
  //$.getJSON("js/offline.json", function(json) {
  $.getJSON("http://www.freecodecamp.com/news/hot", function(json) {
    //----------- preloader ---------------//
    $('.preloader').delay(400).fadeOut(500);
    //--- do the things with the json-------//
    function readJson(json) {
        //read each item in the json and extract each element we need
        for(var i= 0; i<json.length ; i++){
          //-----capture all the info from json--------//
          var headline = json[i].headline;
          var timePosted = json[i].timePosted;
          //conver to date
          var t = new Date(timePosted);
          //convert to string
          t = t.toString();
          //cut out the hours and left only day, month and year
          var newT = t.substring(4,t.length-23);
          var link = json[i].link;
          var metaDescription = json[i].metaDescription;
          var rank = json[i].rank;
          var image = json[i].image;
          var authorPic = json[i].author.picture;
          var authorName = json[i].author.username;
          //image replacement in case there is no image
          var imgReplace = "http://diegoluis.net/imageRep/camperNews/freeCodeSymbol.svg";
          //------Create a div that holds the bottom line----//
          //var bottomLine = document.createElement("div");
          //-----Create the card container--------------//
          var card = document.createElement("div");
          card.className = "card";
          //set unique id to each card
          card.setAttribute("id", "card"+i);
          //attach it to main container
          var news= document.getElementById("news");
          news.appendChild(card);
          //-----------Create article image--------------//
          var img = document.createElement("img");
          img.src = image;
          //If image is empty
          var imgDiv = document.createElement("div");
          imgDiv.className = "artImage";
          if(image ===""){
            img.src = imgReplace;
            img.className = "imgReplace";
            imgDiv.className += " grayBg";
          }
          imgDiv.appendChild(img);
          //create the link
          var linkImage = document.createElement("a");
          linkImage.href = link;
          linkImage.target = "_blank";
          linkImage.appendChild(imgDiv);
          card.appendChild(linkImage);

          //--------Create title------------------------//
          //create div
          var headHtml = document.createElement("div");
          headHtml.className = 'headLine';
          //create an h2
          var headH2 = document.createElement("h2");
          //add the text to the div
          var headText = document.createTextNode(headline);
          headH2.appendChild(headText);
          headHtml.appendChild(headH2);
          //append it to the card
          //create a link
          var linkTitle = document.createElement("a");
          linkTitle.href = link;
          linkTitle.target = "_blank";
          linkTitle.appendChild(headHtml);
          card.appendChild(linkTitle);
          //------------------Description-----------------//
          var descriptionHtml = document.createElement("div");
          var descriptionText = document.createTextNode(metaDescription);
          descriptionHtml.appendChild(descriptionText);
          descriptionHtml.className = "description";
          card.appendChild(descriptionHtml);
          //----------------Footer of card-----------------//
          var footCard = document.createElement("div");
          footCard.className = "footCard";
          card.appendChild(footCard);
          //----------------Author-----------------------//
          //div for name and pic of user
          var author = document.createElement("div");
          author.className = "author";
          footCard.appendChild(author);
          //pic of Author
          var authorPicHtml = document.createElement("img");
          authorPicHtml.className = "authorPic";
          authorPicHtml.src = authorPic;
          author.appendChild(authorPicHtml);
          //name of author
          var authorNameHtml = document.createElement("div");
          authorNameHtml.className = "authorName";
          var authorText = document.createTextNode(authorName);
          authorNameHtml.appendChild(authorText);
          author.appendChild(authorNameHtml);

          //-----------Votes and Dates-------------------//

          //-------------date
          var dateHtml = document.createElement("div");
          dateHtml.className = "date";
          var dateText = document.createTextNode("Posted: " + newT);
          dateHtml.appendChild(dateText);
          footCard.appendChild(dateHtml);
          //-------------votes
          //-----heart
          var heart = document.createElement("img");
          heart.className = "heart";
          heart.src = "http://diegoluis.net/imageRep/camperNews/heart.svg";
          //----votes
          var votesHtml = document.createElement("div");
          var votesText = document.createTextNode(rank);
          votesHtml.className = "votes";
          //appent heart
          votesHtml.appendChild(heart);
          votesHtml.appendChild(votesText);
          footCard.appendChild(votesHtml);
        }
    }
    readJson(json);
  });
});
