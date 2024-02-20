/*Name this external file gallery.js*/
const choosingImage = document.getElementById("image");
const defaultContext = "Hover over an image below to display here.";
function upDate(previewPic){
    console.log("update");
    choosingImage.textContent = previewPic.alt;
  
	}

	function unDo(){
     console.log("undo");
    choosingImage.textContent = defaultContext;
		
	}
