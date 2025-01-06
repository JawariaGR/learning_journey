// QUESTION NO 37 (MODIFY THE FUNCTION (QUESTION NO 36) MAKE A SHIRT WITH DIFFERENT SIZE AND DEFAULT MESSAGE )
//METHOD 01
function MAKE_SHIRTS(
  size: string,
  text: string,
  color: string,
  text_color: string
) {
  console.log(
    `\nMake a ${color} ${size} size shirt and print a message ${text} and message color is ${text_color}`
  );
}
MAKE_SHIRTS("small", "Viva la vida ", "yellow", "black");
MAKE_SHIRTS("medium", "Viva Libertad", "white", "black");
MAKE_SHIRTS("large", "live a long life ", "blue", "black");

//  METHOD 02

function shirt(
  size: string = "medium",
  message: string = "Love yourself",
  color: string = "black"
) {
  console.log(
    `\nMake a ${size} size ${color} shirt and a message in shirt ${message}`
  );
}
shirt();
shirt("large");
shirt("small", "believe yourself", "white");
