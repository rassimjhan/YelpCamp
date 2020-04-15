var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image:
      "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim mollit laborum irure cupidatat amet reprehenderit incididunt magna cupidatat. Eu qui sit nostrud laborum aute ex quis ipsum magna quis commodo cupidatat ut. Ipsum nulla enim amet amet ea tempor pariatur elit in adipisicing voluptate est. Officia aute officia sit dolore. Deserunt tempor dolor excepteur non velit enim veniam Lorem cupidatat cillum nulla tempor aliqua. Ex est ad veniam nisi."
  },
  {
    name: "Some Rest",
    image:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim mollit laborum irure cupidatat amet reprehenderit incididunt magna cupidatat. Eu qui sit nostrud laborum aute ex quis ipsum magna quis commodo cupidatat ut. Ipsum nulla enim amet amet ea tempor pariatur elit in adipisicing voluptate est. Officia aute officia sit dolore. Deserunt tempor dolor excepteur non velit enim veniam Lorem cupidatat cillum nulla tempor aliqua. Ex est ad veniam nisi."
  },
  {
    name: "Some1 Rest",
    image:
      "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim mollit laborum irure cupidatat amet reprehenderit incididunt magna cupidatat. Eu qui sit nostrud laborum aute ex quis ipsum magna quis commodo cupidatat ut. Ipsum nulla enim amet amet ea tempor pariatur elit in adipisicing voluptate est. Officia aute officia sit dolore. Deserunt tempor dolor excepteur non velit enim veniam Lorem cupidatat cillum nulla tempor aliqua. Ex est ad veniam nisi."
  },
  {
    name: "Some2 Rest",
    image:
      "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim mollit laborum irure cupidatat amet reprehenderit incididunt magna cupidatat. Eu qui sit nostrud laborum aute ex quis ipsum magna quis commodo cupidatat ut. Ipsum nulla enim amet amet ea tempor pariatur elit in adipisicing voluptate est. Officia aute officia sit dolore. Deserunt tempor dolor excepteur non velit enim veniam Lorem cupidatat cillum nulla tempor aliqua. Ex est ad veniam nisi."
  },
  {
    name: "Some2 Rest",
    image:
      "https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim mollit laborum irure cupidatat amet reprehenderit incididunt magna cupidatat. Eu qui sit nostrud laborum aute ex quis ipsum magna quis commodo cupidatat ut. Ipsum nulla enim amet amet ea tempor pariatur elit in adipisicing voluptate est. Officia aute officia sit dolore. Deserunt tempor dolor excepteur non velit enim veniam Lorem cupidatat cillum nulla tempor aliqua. Ex est ad veniam nisi."
  }
];

function seedDB() {
  //Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    Comment.remove({}, function(err) {
      if (err) {
        console.log(err);
      }
      console.log("removed comments!");
      //add a few campgrounds
      data.forEach(function(seed) {
        Campground.create(seed, function(err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
              {
                text: "This place is great, but I wish there was internet",
                author: "Homer"
              },
              function(err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              }
            );
          }
        });
      });
    });
  });
  //add a few comments
}

module.exports = seedDB;
