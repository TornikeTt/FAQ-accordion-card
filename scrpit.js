function Arrows(text, mainpid , pid , hr){
    this.Question = document.getElementById(mainpid);
    //for Answer 
    this.answerParagraph = document.getElementById(pid);
    this.answerParagraph.textContent = text;
    this.answerParagraph.style.opacity = 0.7; 
    //for Answer
    this.hr = document.getElementById(hr)
}

Arrows.prototype = {
    upAroow: function(rotateId , onclick){
        this.up = document.getElementById(rotateId);
        this.up.style.marginTop = "-50px"
        this.up.style.transform = 'rotate(180deg)';
        this.up.style.transitionDuration = "0.9s"
        this.up.setAttribute( "onClick", onclick );
    },
    //for Question
    upQuestionText: function(onClikcText){
        this.Question.style.fontWeight = "bold";
        this.Question.style.transform = "translateY(-25px)";
        this.Question.style.transitionDuration = "0.9s"
        this.Question.setAttribute( "onClick", onClikcText );
    },
    //for Answer
    AnswerUpParagraph:function(){
        this.answerParagraph.style.transitionDuration = "0.9s";
        this.answerParagraph.style.marginTop = "-16px"
    },
    //for Answer

    hrDown: function(){
        this.hr.style.marginTop= "10px";
        this.hr.style.transitionDuration = "0.9s";
    }
}

function firstClick(){  
    var firstArrow = new Arrows(
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan",
        "main-first-paragraph",
        "firstShow-paragraph",
        "hr1"
    )

    firstArrow.upAroow("1Rotate" , "downfirst()")
    firstArrow.upQuestionText("downfirst()")
    firstArrow.AnswerUpParagraph()
    firstArrow.hrDown();
}



function secondClick(){
    var seoncdAroow = new Arrows(
        "No more than 2GB. All files in your account must fit your allotted storage space.",
        "main-second-paragraph",
        "secondShow-paragraph",
        "hr2"
    )
    seoncdAroow.upAroow("2Rotate" , "downSecond()");
    seoncdAroow.upQuestionText( "downSecond()")
    seoncdAroow.AnswerUpParagraph()
    seoncdAroow.hrDown();
}

function thirdClick(){
    var thirdArrow = new Arrows(
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        "main-third-paragraph",
        "thirdShow-paragraph",
        "hr3"
    )
    thirdArrow.upAroow("3Rotate" , "downthird()");
    thirdArrow.upQuestionText("downthird()")
    thirdArrow.AnswerUpParagraph()
    thirdArrow.hrDown()
}

function fourthClick(){
    var fourthArrow = new Arrows(
        "Yes! Send us a message and we’ll process your request no questions asked.",
        "main-fourth-paragraph",
        "fourthShow-paragraph",
        "hr4"
    )
    fourthArrow.upAroow("4Rotate" , "downfourth()");
    fourthArrow.upQuestionText("downfourth()")
    fourthArrow.AnswerUpParagraph()
    fourthArrow.hrDown()
}

function fifthClick(){
    var fifthArrow = new Arrows(
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
        "main-fifth-paragraph",
        "fifthShow-paragraph",
        "hr5"
    )
    fifthArrow.upAroow("5Rotate" , "downfifth()");
    fifthArrow.upQuestionText("downfifth()")
    fifthArrow.AnswerUpParagraph()
    fifthArrow.hrDown()
}




// delate onClick and return onClick

function Delate(delateid, delatemain , delateParagraph , hrDelate){
    this.delatebyId = document.getElementById(delateid);
    this.question_delate = document.getElementById(delatemain)
    this.delate_Answer_Paragraph = document.getElementById(delateParagraph);
    this.hrDelate = document.getElementById(hrDelate)
    
    this.delate_Answer_Paragraph.textContent = "";
    this.delate_Answer_Paragraph.style.transitionDuration = "0.9s";
    this.delate_Answer_Paragraph.style.marginTop = "0px"
}

Delate.prototype = {
    downArrow: function(returnclick){
        this.delatebyId.style.marginTop = "4px"
        this.delatebyId.style.transform = 'rotate(0deg)';
        this.delatebyId.style.transitionDuration = "0.9s"
        this.delatebyId.setAttribute( "onClick", returnclick);
    },
    downText: function(return_click_with_text){
        this.question_delate.style.fontWeight = "";
        this.question_delate.style.transform = "translateY(0px)";
        this.question_delate.style.transitionDuration = "0.9s"
        this.question_delate.setAttribute("onClick" , return_click_with_text)
    },

    downHr: function(){
        this.hrDelate.style.marginTop= "0px";
        this.hrDelate.style.transitionDuration = "0.9s";
    }
}



function downfirst(){
    var delateFirst = new Delate("1Rotate" , "main-first-paragraph" , "firstShow-paragraph", "hr1");
    delateFirst.downArrow("firstClick()")
    delateFirst.downText("firstClick()")
    delateFirst.downHr()
}

function downSecond(){
    var delateSecond = new Delate("2Rotate" , "main-second-paragraph" , "secondShow-paragraph", "hr2");
    delateSecond.downArrow("secondClick()")
    delateSecond.downText("secondClick()")
    delateSecond.downHr()
}


function downthird(){
    var delatethird = new Delate("3Rotate" , "main-third-paragraph" , "thirdShow-paragraph", "hr3");
    delatethird.downArrow("thirdClick()")
    delatethird.downText("thirdClick()")
    delatethird.downHr()
}

function downfourth(){
    var delatethird = new Delate("4Rotate" , "main-fourth-paragraph" , "fourthShow-paragraph", "hr4");
    delatethird.downArrow("fourthClick()")
    delatethird.downText("fourthClick()")
    delatethird.downHr()
}


function downfifth(){
    var delatethird = new Delate("5Rotate" , "main-fifth-paragraph" , "fifthShow-paragraph", "hr5");
    delatethird.downArrow("fifthClick()")
    delatethird.downText("fifthClick()")
    delatethird.downHr()
}