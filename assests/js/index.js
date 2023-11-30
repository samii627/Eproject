
// men card sec start

var data3 = [
    {
        pName: "T.shirts",
        pimg: "./assests/images/men/levis.png",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Shirt",
        pimg: "./assests/images/men/outfitter.webp",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Kurta",
        pimg: "./assests/images/men/kurta.jpg",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "Jeans",
        pimg: "./assests/images/Men/jeans l.webp",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Sando",
        pimg: "./assests/images/Men/sando.jpg",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "coat",
        pimg: "./assests/images/Men/coat1.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    
   
  
  ]

   
  

  if(document.querySelector(".con")){
    for(var i=0; i<data3.length; i++){
        document.querySelector(".con").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data3[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data3[i].pName}</h2>
        <p>${data3[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClickMen(${i})'>Read more</button>

        </div>
        </div>
        
        
        `
  
    }
  
  }
  let getModal = document.querySelector(".modal-dialog")
  function handleClickMen(id){
    console.log(id)
        getModal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="card1" style="--clr: #009688;" >
        <div class="imgBx">
        <img src="${data3[id].pimg}" alt="" style="width: -webkit-fill-available;" height="300px">
        </div>
        <div class="content1">
        <h2>${data3[id].pName}</h2>
        <p>${data3[id].pread}</p>

        </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="button" data-bs-dismiss="modal"></button>
        </div>
      </div>
        
        `
  }
  


// men  card sec end


// womens card sec start



  var data4 = [
    {
        pName: "Suite",
        pimg: "./assests/images/women/gul.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Kurti",
        pimg: "./assests/images/women/gul2.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more..",
       
    },
    {
        pName: "J.Suite",
        pimg: "./assests/images/women/j..jpg",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Lawn",
        pimg: "./assests/images/women/khaadi.jpg",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J.Suite",
        pimg: "./assests/images/women/j.2.jpg",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Suite",
        pimg: "./assests/images/women/khaadi2.jpg",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    
   
  
  ]


  if(document.querySelector(".con2")){
    for(var i=0; i<data4.length; i++){
        document.querySelector(".con2").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data4[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data4[i].pName}</h2>
        <p>${data4[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClickWomen(${i})'>Read more</button>

        </div>
        </div>
        
        
        `
  
    }
  
}
let get = document.querySelector(".modal-dialog")
function handleClickWomen(id){
      getModal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label=></button>
      </div>
      <div class="modal-body">
      <div class="card1" style="--clr: #009688;" >
      <div class="imgBx">
      <img src="${data4[id].pimg}" alt="" style="width: -webkit-fill-available;" height="300px">
      </div>
      <div class="content1">
      <h2>${data4[id].pName}</h2>
      <p>${data4[id].pread}</p>

      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button" data-bs-dismiss="modal"></button>
      </div>
    </div>
      
      `
}

  

//   women sec end

// J. sec cards start


var data2 = [
    {
        pName: "J. Kurta",
        pimg: "./assests/images/j.page/kurta 1.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat...",
       
    },
    {
        pName: "J. kurta",
        pimg: "./assests/images/j.page/kurta 2.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat...",
       
    },
    {
        pName: "J. Kurta",
        pimg: "./assests/images/j.page/kurta 3.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat...",
       
    },
    {
        pName: "J. Waiscoat",
        pimg: "./assests/images/j.page/w1.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat...",
       
    },
    {
        pName: "J. Waiscoat",
        pimg: "./assests/images/j.page/w2.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Waiscoat",
        pimg: "./assests/images/j.page/w3.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Kurti",
        pimg: "./assests/images/j.page/kurti1.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Kurti",
        pimg: "./assests/images/j.page/kurti2.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Kurti",
        pimg: "./assests/images/j.page/kurti3.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Suite",
        pimg: "./assests/images/j.page/suite 1.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Suite",
        pimg: "./assests/images/j.page/suite2.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
    {
        pName: "J. Suite",
        pimg: "./assests/images/j.page/suite3.webp",
        pread: "J. kurta, J. Junaid jamshed is a premium brand which deal all kinds of garments like kameez shalwar,kurta and coat..",
       
    },
  ]
 

  if(document.querySelector(".con3")){
    for(var i=0; i<data2.length; i++){
        document.querySelector(".con3").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data2[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data2[i].pName}</h2>
        <p>${data2[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClick(${i})'>Read more</button>
        </div>
        </div>
        
        
        `
  
    }
  
  }
  let Get = document.querySelector(".modal-dialog")
  function handleClick(id){
        getModal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label=></button>
        </div>
        <div class="modal-body">
        <div class="card1" style="--clr: #009688;" >
        <div class="imgBx">
        <img src="${data2[id].pimg}" alt="" style="width: -webkit-fill-available;" height=300px">
        </div>
        <div class="content1">
        <h2>${data2[id].pName}</h2>
        <p>${data2[id].pread}</p>

        </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="button" data-bs-dismiss="modal"></button>
        </div>
      </div>
        
        `
  }
  

//   J. sec end


// levis sec start


var data1 = [
    {
        pName: "Dress",
        pimg: "./assests/images/levis/dress1.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Dress",
        pimg: "./assests/images/levis/dress2.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Dress",
        pimg: "./assests/images/levis/dress3.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Jeans for Men",
        pimg: "./assests/images/levis/mjeans1.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Jeans for Men",
        pimg: "./assests/images/levis/mjeans2.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Jeans for Men",
        pimg: "./assests/images/levis/mjeans3.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Shirts",
        pimg: "./assests/images/levis/shirts1.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Shirts",
        pimg: "./assests/images/levis/shirts2.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Shirts",
        pimg: "./assests/images/levis/shirts3.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Sweats shirts",
        pimg: "./assests/images/levis/wswit1.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Sweats shirts",
        pimg: "./assests/images/levis/wswit2.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Sweats shirts",
        pimg: "./assests/images/levis/wswit3.avif",
        pread: "Levis Casual wear T shirt, Levis is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
   
   
  ]


  if(document.querySelector(".con4")){
    for(var i=0; i<data1.length; i++){
        document.querySelector(".con4").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data1[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data1[i].pName}</h2>
        <p>${data1[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClickLevis(${i})'>Read more</button>
        </div>
        
        
        `
  
    }
  
  }

let getmodal = document.querySelector(".modal-dialog")
function handleClickLevis(id){
      getModal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label=></button>
      </div>
      <div class="modal-body">
      <div class="card1" style="--clr: #009688;" >
      <div class="imgBx">
      <img src="${data1[id].pimg}" alt="" style="width: -webkit-fill-available;" height="300px">
      </div>
      <div class="content1">
      <h2>${data1[id].pName}</h2>
      <p>${data1[id].pread}</p>

      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button" data-bs-dismiss="modal"></button>
      </div>
    </div>
      
      `
}



//   levis sec end

// out fitter sec start

var data5 = [
    {
        pName: "t shirt",
        pimg: "./assests/images/outfitter/tshirt1.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "t shirt",
        pimg: "./assests/images/outfitter/tshirt2.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "t shirt",
        pimg: "./assests/images/outfitter/tshirt3.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Hoddie",
        pimg: "./assests/images/outfitter/hoddie1.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Hoddie",
        pimg: "./assests/images/outfitter/hoddie2.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Hoddie",
        pimg: "./assests/images/outfitter/hoddie3.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando..",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/outfitter/wsuite1.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/outfitter/wsuite2.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/outfitter/wsuite3.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando....",
       
    },
    {
        pName: "Jacket",
        pimg: "./assests/images/outfitter/jacket1.webp",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Jacket",
        pimg: "./assests/images/outfitter/jacket2.jpg",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
    {
        pName: "Jacket",
        pimg: "./assests/images/outfitter/jacket3.jpg",
        pread: "Outfitter Casual wear T shirt, Outfitter is a premium brand which deal all kinds of garments like Shirts, t.shirts and sando...",
       
    },
  
  
   
  ]


  if(document.querySelector(".con5")){
    for(var i=0; i<data5.length; i++){
        document.querySelector(".con5").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data5[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data5[i].pName}</h2>
        <p>${data5[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClickOutfitter(${i})'>Read more</button>
        </div>
        </div>
        
        
        `
  
    }
  
  }
  let getmodel = document.querySelector(".modal-dialog")
function handleClickOutfitter(id){
      getModal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label=></button>
      </div>
      <div class="modal-body">
      <div class="card1" style="--clr: #009688;" >
      <div class="imgBx">
      <img src="${data5[id].pimg}" alt="" style="width: -webkit-fill-available;" height="300px">
      </div>
      <div class="content1">
      <h2>${data5[id].pName}</h2>
      <p>${data5[id].pread}</p>

      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button" data-bs-dismiss="modal"></button>
      </div>
    </div>
      
      `
}


  var data6 = [
    {
        pName: "Kurta",
        pimg: "./assests/images/gul/kurta1.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Kurta",
        pimg: "./assests/images/gul/kurta2.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Kurta",
        pimg: "./assests/images/gul/kurta3.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Abaya",
        pimg: "./assests/images/gul/abaya1.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Abaya",
        pimg: "./assests/images/gul/abaya2.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Abaya",
        pimg: "./assests/images/gul/abaya3.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Shirt",
        pimg: "./assests/images/gul/shirt1.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Shirt",
        pimg: "./assests/images/gul/shirt2.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Shirt",
        pimg: "./assests/images/gul/shirt3.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/gul/suite1.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/gul/suite2.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
    {
        pName: "Suite",
        pimg: "./assests/images/gul/suite3.webp",
        pread: "Gul Ahmed wear Three piece, Gul Ahmed is a premium brand which deal all kinds of garments like Ladies kurti, Khameez shalwar and much more...",
       
    },
   
  
   
  ]


  if(document.querySelector(".con6")){
    for(var i=0; i<data6.length; i++){
        document.querySelector(".con6").innerHTML += `
        
        <div class="card1" style="--clr: #009688;">
        <div class="imgBx">
        <img src="${data6[i].pimg}" alt="">
        </div>
        <div class="content1">
        <h2>${data6[i].pName}</h2>
        <p>${data6[i].pread}</p>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  style="margin-left: 2px;" onclick='handleClickGul(${i})'>Read more</button>
        </div>
        </div>
        
        
        `
  
    }
  
  }
  let getmodol = document.querySelector(".modal-dialog")
function handleClickGul(id){
      getModal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label=></button>
      </div>
      <div class="modal-body">
      <div class="card1" style="--clr: #009688;" >
      <div class="imgBx">
      <img src="${data6[id].pimg}" alt="" style="width: -webkit-fill-available;" height="300px">
      </div>
      <div class="content1">
      <h2>${data6[id].pName}</h2>
      <p>${data6[id].pread}</p>

      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button" data-bs-dismiss="modal"></button>
      </div>
    </div>
      
      `
}

 