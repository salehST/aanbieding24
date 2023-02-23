const loadMoreBtn = document.getElementById('load-more-btn');
if(loadMoreBtn){
loadMoreBtn.onclick = function() {    
const loadMore = document.getElementById('load-more');
loadMore.style.display = 'block';
loadMoreBtn.style.display = 'none'; 
};
}

//nav icon change start
let button = document.querySelector('#nav-icon');
if(button){
button.addEventListener('click', ()=>{    
    button.classList.toggle('open');
})
}
//span focus 
const inPut = document.querySelector('input[type="text"].label-span');

if(inPut){
    inPut.addEventListener('focus', () => {
        let parentSpan = document.querySelector('.parent-span');
      parentSpan.style.background = '#3b82f6';
      parentSpan.style.outlineColor = '#3b82f6';
      parentSpan.style.borderColor = '#3b82f6';
      parentSpan.style.color = '#fff';
    });
    
    inPut.addEventListener('blur', () => {
        let parentSpan = document.querySelector('.parent-span');
      parentSpan.style.background = '';
      parentSpan.style.outlineColor = '';
      parentSpan.style.borderColor = '';
      parentSpan.style.color = '';
    });
}

//Radio checked 
function addClassNameChecked(data){
  data.parentElement.parentElement.classList.add("active-border");
}

function removeClassNameChecked(data){
  alert('2');
  data.parentElement.parentElement.classList.remove("active-border");
}

function radioCheckedUnchecked(data){
  if(data.parentElement.parentElement.classList.contains('active-border')){
    data.parentElement.parentElement.classList.remove("active-border");
  }

  if(data.checked){
    data.parentElement.parentElement.classList.add("active-border");
  }

}

let pricingRadio = document.querySelector('input[type=radio].pricing-radio');

//Custom Selector Start
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("t-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);
/* custom selectors end */


// go to top start*//


// const showOnPx = 100;
// const backToTopButton = document.querySelector(".back-to-top");
// const pageProgressBar = document.querySelector(".progress-bar");

// const scrollContainer = () => {
//   return document.documentElement || document.body;
// };

// const goToTop = () => {
//   document.body.scrollIntoView({
//     behavior: "smooth"
//   });
// };

// document.addEventListener("scroll", () => {
//   console.log("Scroll Height: ", scrollContainer().scrollHeight);
//   console.log("Client Height: ", scrollContainer().clientHeight);

//   const scrolledPercentage =
//     (scrollContainer().scrollTop /
//       (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
//     100;

//   pageProgressBar.style.width = `${scrolledPercentage}%`;

//   if (scrollContainer().scrollTop > showOnPx) {
//     backToTopButton.classList.remove("hide");
//   } else {
//     backToTopButton.classList.add("hide");
//   }
// });

// backToTopButton.addEventListener("click", goToTop);


// go to top end*//


//carousal center slick




