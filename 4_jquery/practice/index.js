//note: I didnt separate the callback functions yet. I will do it in the next commit.

// Initialize counter
let count = 0;

// Update the count on the page

const updateCountText = () => {
  $("#count").text(count);
};

const incrementHandler = () => {
  count++;
  updateCountText();
};
$("#incrementBtn").click(incrementHandler);

//toggle the visibility of the element with id "something"
const toggleVisibilityHandler = () => {
  $("#something").toggle();
  $("#something").is(":visible")
    ? $("#show").text("Hide Something")
    : $("#show").text("Show Something");
};
$("#show").click(toggleVisibilityHandler);

// selectors
// Select all elements with class "item" and change their background color to red
$(".counter").css("background-color", "red");

// Select the element with id "myDiv" and add multiple styles
$("div").css({
  width: "200px",
  height: "200px",
  background: "red",
  border: "1px solid black",
});

// Select all input elements and disable them
//$("input").prop("disabled", true)

// Select the first paragraph element and change its font size to 20px
$("p:first").css("font-size", "20px");

// Select all elements with attribute "data-toggle" and remove the attribute
$("[data-toggle]").removeAttr("data-toggle");

//event handling
// $("div").bind('click', function () {
//   // jQuery code goes here
//   alert("hey")
// });

// $("div").click(function () {
//   // jQuery code goes here
//   alert("hey2")
// });

const dblClickHandler = () => {
  alert("hey2ss");
};
$("div").dblclick(dblClickHandler);

// $("#2ndDiv").mouseenter(function () {
//   // jQuery code goes here
//   $("#2ndDiv").css("background-color", "black");
// });

// if ($("#2ndDiv").mouseenter(function () {
//   // jQuery code goes here
//   $("#2ndDiv").css("background-color", "black");
// }));
// else {
//   $("#2ndDiv").css("background-color", "white");
// }
// ;

// $("#2ndDiv").mouseenter(function () {
//   $(this).css("background-color", "blue"); // Change background color on mouseenter
// });
// $("#2ndDiv").mouseleave(function () {
//   $(this).css("background-color", "red"); // Change background color on mouseleave
// });

//hover

const hoverBgBlue = function () {
  $(this).css("background-color", "blue");
};
const hoverBgRed = function () {
  $(this).css("background-color", "red");
};

$("#2ndDiv").hover(hoverBgBlue, hoverBgRed);

//event object
$("#3rdDiv").mousedown(function (e) {
  console.log(e);
});

//get attribute
const getAttributeHandler = () => {
  alert("The title is: " + $("#home").attr("title"));
};

$("#title").click(getAttributeHandler);

//get data-attribute
const getDataAttributeHandler = () => {
  alert(
    `The author is: ${$("#authorData").data("author-name")},  year ${$(
      "#authorData"
    ).data("year")}`
  );
};

$("#author").click(getDataAttributeHandler);

//set attribute
const setAttributeHandler = () => {
  $("#home").attr("title", "Home Page");
  alert("The NEW title is: " + $("#home").attr("title"));
};

$("#title").click(setAttributeHandler);

//set custom-attribute
const setCustomAttributeHandler = () => {
  $("#authorData").data("author-name", "John Doe");
  alert(
    `The NEW author is: ${$("#authorData").data("author-name")},  year ${$(
      "#authorData"
    ).data("year")}`
  );
};

$("#author").click(setCustomAttributeHandler);

//ajax json get method
//map order of parameters: element, index
const getUsers = () => {
  $.get("https://jsonplaceholder.typicode.com/users", (data) => {
    const users = $.map(data, function (user, index) {
      return `<li>${user.name} ${index}</li>`;
    });

    $("#data").append(users);

    console.log(users);
  });
};

getUsers();

//filter order of parameters: index, element
const getFilteredUsers = () => {
  $.get("https://jsonplaceholder.typicode.com/users", (data) => {
    const filteredUsers = $(data)
      .filter(function (index, user) {
        return user.name.includes("L");
      })
      .map(function (index, user) {
        return `<li style="background-color:pink">${user.name}</li>`;
      })
      .get();

    $("#data").append(filteredUsers);
  });
};
getFilteredUsers();
//ajax json post method

const addUsers = (username) => {
  $.post(
    "https://jsonplaceholder.typicode.com/users",
    { name: username },
    (data) => {
      $("#data").append(`<li>${data.name}</li>`);
    }
  );
};

$("#addUser").submit((e) => {
  e.preventDefault();
  const name = $("#nameInput").val();

  addUsers(name);

  $("#nameInput").val("");
});
