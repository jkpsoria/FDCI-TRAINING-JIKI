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

//reusable ajax handlers

const ajaxGet = (endpoint, method) => {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  return $.ajax({
    url: baseUrl + endpoint,
    method: method,
    dataType: "json",
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log(error);
    },
  });
};

const ajaxPost = (endpoint, method, data) => {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  return $.ajax({
    url: baseUrl + endpoint,
    method: method,
    dataType: "json",
    data: data,
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log(error);
    },
  });
};

//map order of parameters: index, element
const getUsers = () => {
  ajaxGet("users", "GET").then((data) => {
    const users = $(data)
      .map((index, user) => {
        return `<li>${user.name}</li>`;
      })
      .get();

    $("#data").append(users);
  });
};

getUsers();

//filter order of parameters: index, element
const getFilteredUsers = () => {
  ajaxGet("users", "GET").then((data) => {
    const users = $(data)
      .filter((index, user) => {
        return user.name.includes("C");
      })
      .map((index, user) => {
        return `<li style="background-color: pink">${user.name}</li>`;
      })
      .get();

    $("#data").append(users);
  });
};
getFilteredUsers();

//ajax json post method
const addUsers = (name) => {
  const data = {
    name: name,
  };
  ajaxPost("users", "POST", data).then((data) => {
    $("#data").append("<li>" + data.name + "</li>");
  });
};

$("#addUser").submit((e) => {
  e.preventDefault();
  const name = $("#nameInput").val();

  addUsers(name);

  $("#nameInput").val("");
});
