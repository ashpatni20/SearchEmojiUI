
import data from "./data.js";
const down_container = document.getElementById('down_container');
const search = document.getElementById('search');
const img  = document.getElementById("dynamicImage");

const randomEmojiGenrator = () => {
    let random = Math.floor(Math.random() * listOfIcon.length);
    img.src = listOfIcon[random];
  
    setTimeout(randomEmojiGenrator, 1000);
  };

  randomEmojiGenrator();

function mainPage() {


    let  count = 0;
    for(let val in data){
        if(count >=30){
            break;
        }else{
            count++;
        }
     


        let div = document.createElement('div');
        let image = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/" + `${data[val].variant[0]["3D"]}`;
         
        div.classList.add('emoji_container');
            
            div.innerHTML = `
                <div class="emoji"><img src="${image}" alt="emoji"></div>
                <p >${data[val].name}</p>
                    `;
                    console.log(div);
            down_container.append(div);
    }
  
}

search.addEventListener('input', function(){
    let value = search.value.toLowerCase();
    if(value == ""){
        mainPage();
    }else{
        searchData(value);
    }
})

const searchData = (value) => {
    console.log(value);
  
    down_container.innerHTML = "";
  
    for (let key in data) {
      const item = data[key];
      if (item.keywords.some((keyword) => keyword.startsWith(value))) {
        let div = document.createElement("div");
        let image =
          "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/" +
          `${data[key].variant[0]["3D"]}`;
  
        div.innerHTML = `
              <div class="emoji"><img src ="${image}" alt=""></div>
              <div class="emojiDesc">${data[key].name}</div>
            `;
        div.classList.add("emoji_container");
        down_container.appendChild(div);
      }
    }
  };

mainPage();