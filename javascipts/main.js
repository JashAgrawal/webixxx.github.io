var input23 ;
var currentid;
var favcolor1 ;
var imgid;
var currentid2;
var alignid;
var chbg;
var btnicon;
var btn;
var status = 1;
var htmlbef;

function store_id(clicked_id) {
  currentid = clicked_id;
  testiing();
  console.log(currentid);
  //  hovering();
  // document.getElementById(currentid).setAttribute("class","myhover");
}

//event listeners

function testiing() {
  document.getElementById(currentid).addEventListener("dblclick", edittextbef);
  document.getElementById(currentid).addEventListener("dragstart", savloc);
  document.getElementById("saveme").addEventListener("click", save);
  document.getElementById(currentid).addEventListener("click", function(){document.getElementById(currentid).contentEditable = "true";document.getElementById(currentid).style.resize = "both";})
  // document.getElementById(currentid).addEventListener("contextmenu", del_dom);
  // document.getElementById(currentid).addEventListener("click", store_c_id(this.id));
  // document.getElementById(currentid).addEventListener("mouseover", hovering);
  // document.getElementById("icon").addEventListener("click", changeimg);
  // document.getElementById("adbtnicon").addEventListener("click", add_menu);
  //  document.getElementById("delete").addEventListener("click", deleteing);

}

//form hml

function edittextbef() {
  htmlbef = document.getElementById(currentid).innerHTML;
  document.getElementById(currentid).innerHTML += "<button id='moretools' onclick='edittextbef2()' > EDIT MORE</button>"
  
  

}
function edittextbef2(){
  document.getElementById(currentid).innerHTML = htmlbef;
  var try4 = document.getElementById(currentid).innerHTML;
  var cur_fsize = document.getElementById(currentid).style.fontSize;
  document.getElementById(currentid).innerHTML +=
  `<form  id="form" style="max-width:500px;max-height:400px;padding:20px 20px 20px 20px;align-items:left;background:cornflowerblue;justify-items:left;border-radius:20px;" onsubmit="return false;">
  <p id ="bigX" onclick="closemenu()">X</p>
  <input type="text" id="userInput" style="height:40px;width:300px;margin:10px 10px 10px 10px;font-size:21px;border-radius:10px;" placeholder="your text here">
  <input  style="height:40px;width:100px;padding:10px 10px 10px 10px;margin:10px 10px 10px 10px;font-size:16px;border-radius:10px;" type="number" id="fsize1" placeholder="size"> 
  <button  style="height:80px;width:80px;margin:10px 10px 10px 10px;font-size:21px;border-radius:10px;" id="b1" onclick="align23(this.id)">LEFT ALIGN</button>
  <button style="height:80px;width:80px;margin:10px 10px 10px 10px;font-size:21px;border-radius:10px;"  id="b2" onclick="align23(this.id)">CENTER ALIGN</button>
  <button style="height:80px;width:80px;margin:10px 15px 10px 10px;font-size:21px;border-radius:10px;" id="b3" onclick="align23(this.id)">RIGHT ALIGN</button>
  <input type="color" style="width:100px;height:40px;margin:10px 10px;border-radius:10px;" id="favcolor"   value="#ffffff">
  <select id="input-font"  class="input" onchange="changeFontStyle (this);">
  <option value="Times New Roman" selected="selected"> Times New Roman</option> 
  <option value="Arial">Arial</option> <option value="fantasy">Fantasy</option> 
  <option value="cursive">cursive</option> 
  </select>
  <input style="width:100px;height:40px;border-radius:20px;font-size:21px;margin:0px 0px" type="submit" onclick="name23()">`;
    document.getElementById("userInput").value = try4;
  }
//calling functions
function name23() {
  input23 = document.getElementById("userInput").value;
  favcolor1 = document.getElementById("favcolor").value;
  fsize2 = document.getElementById("fsize1").value;
  edittext();
  editcolor();
  fsize();
  
}
function closemenu(){
  document.getElementById(currentid).innerHTML = htmlbef;
}

//font size

function fsize() {
  document.getElementById(currentid).style.fontSize = `${fsize2}px`;
}

//chaging color

function editcolor() {
  document.getElementById(currentid).style.color = favcolor1;
}

//chaging text

function edittext() {
  document.getElementById(currentid).innerHTML = input23;
  
  
}

//changing font family

var changeFontStyle = function f_family(font) {
  document.getElementById(currentid).style.fontFamily = font.value;
};
// removing 
function deleteing(){
  document.getElementById(currentid).children.remove;
}

function savloc(){
      $(function () {
        var xpos = $(`#${currentid}`).position();
        console.log(xpos.top);
    var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
    $.each(positions, function (id, pos) {
      $("#" + id).css(pos)
        console.log("it saves")
      })
      $(`#${currentid}`).draggable({
        cancel:false,
      containment: "#body1",
      scroll: false,
      stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
        console.log("itloads")
      }
    });
  });
}
function dom_loc(){
  console.log("jsdj")
  var all = document.getElementsByTagName("*");
  
  for (var i=0, max=all.length; i < max; i++) {
  // Do something with the element here
  my_id = all[i];
  positions[my_id] = ui.position
  localStorage.positions = JSON.stringify(positions)
  
  
}
}
    
//
function reset(){
  localStorage.clear();
  location = location;
  location.reload();
}

//alignment of text
function align23(clicked_id3) {
  alignid = clicked_id3;
  
  if (alignid == "b1") {
    document.getElementById(currentid).style.textAlign = "left";
    console.log("l");
  } else if (alignid == "b2") {
    document.getElementById(currentid).style.textAlign = "center";
    console.log("c");
  } else if (alignid == "b3") {
    document.getElementById(currentid).style.textAlign = "right";
    console.log("r");
  }
  
  //changing background
}

function changeimg() {
  
  chbg = document.getElementById("inp").innerHTML;
  document.getElementById("inp").innerHTML +=
  `<div  id="addmenu"style="margin-left: 50px;padding:1em 1em 1em 1em;justify-content:center; width: fit-content; height : fit-content;">
  <form onsubmit="return false;">
    <p style="cursor:pointer;" onclick="CLOSE_img_MENU()">X</p>
    <input type="text" style="margin:5px 5px 5px 5px; border-radius:20px;font-size:16px;" id="myimg" placeholder="enter your url here">
    <input type="file" style="margin:5px 5px 5px 5px; border-radius:20px;font-size:16px;" id="imginp" name="img" accept="image/*"><br>solid color<br>
    <input type="color" style="border-radius:10px" id="bgcolor" value="#ffffff">
    <input type="submit" style="margin-left:80px;padding:3px 3px 3px 3px;width:auto;border-radius:20px" onclick="changeimgapp()"></form>
     </div>`;
  
}
function changeimgapp() {
  var imgurl = document.getElementById("myimg").value;
  var bgbodycolor = document.getElementById("bgcolor").value;
  // var img = document.getElementById("imginp").value;
  console.log(imgurl);
  
  document.getElementById("home").style.backgroundImage = `url(${imgurl}) no-repeat cover`;
  // document.getElementById("home").style.background = img;
  document.getElementById("body1").style.background = bgbodycolor;
  document.getElementById("inp").innerHTML = chbg;
}
function CLOSE_img_MENU() {
  document.getElementById("inp").innerHTML = chbg;
}

//add menu

function add_menu() {
  btnicon = document.getElementById("adbtn").innerHTML;
  document.getElementById("adbtn").innerHTML +=
  `<div class="well" id="addmenu"style="margin-left: 50px; width: fit-content">
  <ul class="option"><li class="item"><p style="align:right;cursor:pointer;"onclick="close_add_menu()">X</p>
  </li><li class="item"><a href="#" onclick="text_types()" id="texts">TEXT</a></li>
  <li class="item" ><a href="#" id="buts" onclick="but_types()" >BUTTONS</a></li>
  <li><a href="#" id="imgs">IMAGES</a></li>
  </ul>
  </div>`;
  
  
  
}
function but_types() {
  document.getElementById("buts").innerHTML +=
  `<style> 
  #btndiv {display:flex;margin:10px 10px 10px 10px;flex-direction:column;width:7em;height:14em;}
  #btndiv .mybt {margin:10px 10px 10px 10px}
  </style>
  <div class="well" id="addmenu"style="margin-left: 50px; width: fit-content;">
  <div id ="btndiv"><button id="p1" onclick="add_button(this.id)" type="button" class="btn btn-primary mybt">Primary</button>
   <button type="button" id="p2" onclick="add_button(this.id)" class="btn btn-secondary mybt">click</button> 
   <button id="p3" onclick="add_button(this.id)" type="button" class="btn btn-success mybt">Success</button>
    <button type="button" id="p4" onclick="add_button(this.id)" class="btn btn-danger mybt">Danger</button>
    </div>
    </div>`;
}
function text_types() {
  var text_but = document.getElementById("texts").innerHTML;
  document.getElementById("texts").innerHTML +=
  `<div class="well" id="addmenu"style="margin-left: 50px; width:13em;">
  <ul class="option">
  <li class="item" >
  <a href="#" onclick="add_text()" id="h1"><h1>heading-1</h1></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="h2"><h2>heading 2</h2></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="h3"><h3>heading 3</h3></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="h4"><h4>heading 4</h4></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="h5"><h5>heading 5</h5></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="h6"><h6>heading 6</h6></a></li>
  <li class="item"><a href="#"  onclick="add_text()"  id="p"><p>paragraph</p></a>
  </li>`;
}
function close_add_menu() {
  document.getElementById("adbtn").innerHTML = btnicon;
}
//add btn

function add_button(clickedbtid) {
  var butclass = clickedbtid;
  var btclsname = document.getElementById(butclass).className;
    console.log(btclsname);
    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.innerHTML = "BUTTON"; // Insert text
    document.getElementById("home").appendChild(btn);
  btn.className = btclsname;
  btn.setAttribute("id", "newbut");
  btn.setAttribute("onmouseover", "store_id(this.id)");
  btn.draggable = true;
  document.getElementById("adbtn").innerHTML = btnicon;
}
// adding text box

function add_text() {
  var texttagname = document.getElementById("h1").tagName;
  console.log(texttagname);
  var textbux = document.createElement(texttagname);
  textbux.innerHTML = "enter your text here";
  textbux.setAttribute("id", "newtext");
  textbux.setAttribute("onmouseover", "store_id(this.id)");
  document.getElementById("home").appendChild(textbux);
  document.getElementById("adbtn").innerHTML = btnicon;
  if (status % 2 == 0) {
    document.getElementById("adbtn").innerHTML = btnicon;
  }
}

function save() {
  var data23 = document.getElementsByTagName("html")[0].innerHTML;
  var htmlContent = [data23];
  var bl = new Blob(htmlContent, {type: "text/html"});
  var a = document.createElement("a");
  savloc();
  a.href = URL.createObjectURL(bl);
  a.download = "yourfile.html";
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
  a.click();
  
}
//random tweaks
// function hovering(){
  //   var x = document.getElementById(currentid).outerHTML;
  //   // x.style.border = "black";
  
  // }
  //storing clicked id
  // function store_c_id(my_id){
    //   var current_c_id;
    //   current_c_id = my_id;
    //   console.log(current_c_id);
    // }
    // removing dom elements
    //   function del_dom(){
      //     var rightclick;
      //     if (!e) var e = window.event;
      //     if (e.which) rightclick = (e.which == 3);
      //     else if (e.button) rightclick = (e.button == 2);
      //     {
        // draging element
        
        // function ddrag() {
        //   console.log("trigs");
        //   $(function ddrag() {
          //     $(`#${currentid}`).draggable({
            //       cancel:false
            //     });
            //   });
            // }
            // dont know what this means.....xd
        // //resizeing (in progress)
        // function resize2() {
          //   console.log("trigs");
        //   $(function resize() {
          //     $(`#${currentid}`).resizeable({});
        //   });
        // }
        
      //     var cpybtn = document.createElement("button");
  //     var delbtn = document.createElement("button");
  //     document.getElementById(currentid).appendChild(cpybtn);
  //     document.getElementById(currentid).appendChild(delbtn);
  //     cpybtn.setAttribute("class", "right-clk_btn");
  //     delbtn.setAttribute("class", "right-clk_btn");
  //     cpybtn.setAttribute("id", "cpybut");
  //     delbtn.setAttribute("id", "delbut");
  //     delbtn.onclick = del_dom2();
  //     cpybtn.onclick = dupli_dom();
  //     console.log("asvj");
  //     }
  //   }
  // function dupli_dom(){
    //   var ele = document.getElementById(currentid).outerHTML.clo;
    //   var clone = ele.cloneNode(true);
    //   document.getElementById("home").appendChild(clone);
    //   clone.setAttribute("onmouseover", "store_id(this.id)");
    //   cpybtn.remove();
    //   delbtn.remove();
    
    
    // }
    // function del_dom2(){
      
  // }
