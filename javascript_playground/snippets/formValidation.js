
// Example of how to init validation for each field
nameValidation($name1);
nameValidation($name2);
emailValidation($email);


// Validates name field
function nameValidation(inputField){
	inputField.on("keydown", removeSpecialChars);
	
	inputField.on("keyup", function(){
		switch(inputField.attr("id")){
			case "your_name":
				stafName1 = $(this).val().charAt(0).toUpperCase() + $(this).val().slice(1);
				checkSendBtn();
			break;
			case "friend_name":
				stafName2 = $(this).val().charAt(0).toUpperCase() + $(this).val().slice(1);
				checkSendBtn();
			break;
		}
		removeErrorState(inputField);
	});

	inputField.on("blur", function(){

		if(!isClean($(this).val()))
		{
			$(this).val("");
		}

		if($(this).val().length == 0){
			addErrorState(inputField);
		}

	});
}

// Validates email field
function emailValidation(thisField){
	thisField.on("keyup", function(){
		if($(this).val().length){
			removeErrorState(thisField);
			if(emailRegex(thisField.val())){
				stafEmail = thisField.val();
			}else{
				stafEmail = "";
			}
			checkSendBtn();
		}
	});

	thisField.on("blur", function(){
		if($(this).val().length == 0){
			stafEmail = "";
			addErrorState(thisField);
		}else{
			if(emailRegex(thisField.val())){
				stafEmail = thisField.val();
			}else{
				stafEmail = "";
				addErrorState(thisField);				
			}
		}
		checkSendBtn();
	});
}

// Checks submit button
function checkSendBtn(){
	if(stafName1 && stafName2 && stafEmail){
		$send.addClass("active");
	}else{
		$send.removeClass("active");
	}
}

// Adds error state to element
function addErrorState(field){	
	field.addClass("form-error");
	field.attr("placeholder", field.data("needed") + " needed");
}

// Removes error state from element
function removeErrorState(field){
	field.removeClass("form-error");
	field.attr("placeholder", "");
}

// Removes non-alpha characters
function removeSpecialChars(e){
	if (e.keyCode != 229) {
		if(!(e.keyCode >= 65 && e.keyCode <= 90) && e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 32) {
		  return false;
		}
	}
}
