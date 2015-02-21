$(document).ready(function() {
    // Exercise 1
    ul = $("ul");
    ul.before("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.<p>");
    
    //Exercise 2
    h2 = $("h2:last-of-type");
    h2.text(h2.text() + " " + "today");
    
    //Exercise 3
    p = $("p:first-of-type");
    pt = p.text();
    p.text(pt.replace("many", 10000*10000/5));
    
    //Exercise 4
    console.log($("#extension").text());
    
    //Exercise 5
    h3 = $("#qv");
    h3.text("Quicker Viewer");
    
    //Exercise 6
    fruits = ["strawberry", "blueberry", "mango", "blackberry", "raspberry", "guayaba", "cactusfruit", "fig", "persimmon", "coconut"];
    p.after(fruits[1] + " and " + fruits[4]);
    
    //Exercise 7 & 8
    replace_h3 = function(text) {
        text = text.toUpperCase();
        console.log($("h3").text());
        $("h3").text(text);
    }
    
    replace_h3("replaced h3 text");
    
    //Exercise 9
    $("h1").after("width: " + window.innerWidth + ", height: " + window.innerHeight);
    
    //Exercise 10
    $("body").css("background-color", "red");
    
    //Exercise 11: see HTML
    
    //Exercise 12
    $("h1").after(fruits[Math.floor(Math.random()*fruits.length)] + "<br/>");
    
});