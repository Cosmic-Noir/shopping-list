// Need to link jQuery using "CDN-hosted" version
// App will: "add item" button will take INPUT and ADD item to list,
// Must also "add item" when RETURN is keyed (for accessibility)
// "check" button should TOGGLE item to be be crossed or not
// "delete" button will REMOVE item from list
// Must use "this" to reference event object and use "event delegation" (belive this is referencing using parent container to watch for events so that this will include items later added to the list)
// Do Not alter index.html or index.css except for adding links.
// Use - .submit(), preventDefault(), toggleClass(), and closest().

// Per CSS style sheet - .shopping-item__checked - class will apply strikethrough, so we really need to just toggle this class off and on with toggleClass() with the "check" button. 

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
    $(".shopping-item-toggle").click(event => {
        // $(".shopping-item-toggle").closest("span").toggleClass(".shopping-item__checked");

        // $(this).closest(".shopping-item").css({"background": "blue"}); // Does not work

        // let selectedSpan = $(".shopping-item-toggle").closest(".shopping-item"); // Not selecting the correct element. 
        // console.log(selectedSpan); // Returns 4 objects?

        // selectedSpan.toggleClass(".shopping-item__checked"); // Not working
        // selectedSpan.fadeToggle(); // Not working
        // selectedSpan.addClass(".shopping-item__checked"); // Not working.

        // $(".shopping-item-toggle").css({"background": "blue"}) // Works, when clicked, so function is working. 

        // $(selectedSpan).css({"background": "chocolate"}); // Not working
    })
    ;


})