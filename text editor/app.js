// Function to bold selected text
function boldText() {
    document.execCommand("bold", false, null);
  }
  
  // Function to italicize selected text
  function italicText() {
    document.execCommand("italic", false, null);
  }
  
  // Function to attach file (placeholder function)
  function attachFile() {
    // Your implementation to handle file attachment
    console.log("File attached");
  }
  
  // Function to insert an image (placeholder function)
  function insertImage() {
    // Your implementation to insert an image
    console.log("Image inserted");
  }
  
  // Function to increase indentation
  function incrementIndentation() {
    document.execCommand("indent", false, null);
  }
  
  // Function to decrease indentation
  function decrementIndentation() {
    document.execCommand("outdent", false, null);
  }