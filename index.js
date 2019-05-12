// Need to link jQuery using "CDN-hosted" version
// App will: "add item" button will take INPUT and ADD item to ul,
// "check" button should TOGGLE item to be be crossed or not
// "delete" button will REMOVE item from list
// Must use "this" to reference event object and use "event delegation" 


// Per CSS style sheet - .shopping-item__checked - class will apply strikethrough, use with toggleClass() with the "check" button. 

// .submit() and preventDefault() will target the form and stop default action of submitting. 

// .closest() - "given a jQuery object, this method searches through these elements and their ancestors in the DOM and constructs a new jQuery object from the matching elements". Similar to .parents() as they both traverse up the DOM tree - to find and manipulate the correct span. 

// Per index.html, should be adding li items to ul, which should  match already existing li format. 

// Test to ensure is linked:
console.log("We're live!");

// Should run when page loads:
$(function() {
    // First, prevent default function of form. 
    // Believe that adding of text input field to list should be done in form function? 
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        let userText = $("#shopping-list-entry").val();
        console.log(userText); // correctly stores value of input field.
        $(".shopping-list").append(`<li>
        <span class="shopping-item">${userText}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        // Above code works!
    })
    // Write code that uses "check" button to toggle between classes - MAY need to use .closest() which will target the closes ANCESTOR of the selected element in the DOM tree. 
    $(".shopping-item-toggle").click(function(event) {
      let selected = $(this).parent().prev();
      console.log(selected); 
      selected.css({"color": "red"}); // proves we are selecting correct element. 
      selected.addClass(".shopping-item__checked"); // Still not working.
    });


    // Write code to remove items from the list when delete button is clicked. This is going to have to work on parent container though.

    // $(".shopping-item-delete").click(function(event) {
      // this.closest("li").remove(); // W ! but not on new li items.
    // });

    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      this.closest("li").remove();
    }); // W ! 

})