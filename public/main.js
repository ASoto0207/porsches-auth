var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let porsche1 = document.querySelector('#p1')
let porscheTwo = document.querySelector('#p2')
let porscheThree = document.querySelector('#p3')
let porscheFour = document.querySelector('#p4')
let porscheFive = document.querySelector('#p5')
let porscheSix = document.querySelector('#p6')
let porscheSeven = document.querySelector('#p7')
let porscheEight = document.querySelector('#p8')
let porscheNine = document.querySelector('#p9')
let porscheTen = document.querySelector('#p10')



const porsches = [
  {
    model: '2010 GT3',
    price: `114,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LCXdLzzPtDCMhHG5P0lN7AHaE8%26pid%3DApi&f=1&ipt=f47b50ae85b4ff8eba85b4c5faccc5f432ea4a8fc63debbb986020ace0344a59&ipo=images',
  },
  {

    model: '2011 GT3 RS 4.0 (997)',
    price: `186,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ryanfriedmanmotorcars.com%2Fgalleria_images%2F802%2F802_p3_l.jpg&f=1&nofb=1&ipt=3008df7ed1a1456fd56425c731aeea886c88d89afe2305faacfa7d11e744be5b&ipo=images'

  },
  {

    model: '2012 911 Tubro S ',
    price: `160,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcimg1.ibsrv.net%2Fgimg%2Frennlist.com-vbulletin%2F2000x1504%2Fimg_0089_e73da898192eb06cb48bd2da11bee8d42cd53600.jpg&f=1&nofb=1&ipt=75157bed9d9de0612c703df25aab9029a19fa0d71f6a3c6658dbf35fe0082147&ipo=images',

  },
  {

    model: '1997 911 Turbo S',
    price: `50,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frmsothebys-cache.azureedge.net%2F3%2Fb%2F5%2F0%2Fb%2Fb%2F3b50bb21f71dfca3881ce210d1e0a9cea07b966e.jpg&f=1&nofb=1&ipt=7bba00074be27c6bb568c1079a96a6800eb855d0729fb00daac6726afc6dbed0&ipo=images',

  },
  {
    model: '2019 GT3 RS ',
    price: `145,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bjmotors.biz%2Fimagetag%2F13412%2F44%2Fl%2FUsed-2019-Porsche-911-GT3-RS.jpg&f=1&nofb=1&ipt=9e0e660032bf82e0842a3feec1d90f024a1b5c880c8f3c89d6770b5b9eb9f8fa&ipo=images',

  },
  {

    model: '2022 911 GT3',
    price: `163,000`,
    image_url: 'https://hips.hearstapps.com/hmg-prod/images/2022-porsche-911-gt3-pdk-36-1618931369.jpg?crop=0.753xw:0.635xh;0.0785xw,0.296xh&resize=1200:*',

  },
  {

    model: '1991 911 Turbo',
    price: `136,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.barrett-jackson.com%2Fstaging%2Fcarlist%2Fitems%2FFullsize%2FCars%2F75614%2F75614_Side_Profile_Web.jpg&f=1&nofb=1&ipt=21a1614e4183bc75feb14f3d2e9b4b1cb95bdf4e26474ba40232b11275b194e2&ipo=images',

  },
  {

    model: '1979 911 Turbo ',
    price: `140,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dealeraccelerate.com%2Fcanepa%2F3%2F204%2F48614%2F790x1024%2F1979-porsche-911-turbo&f=1&nofb=1&ipt=34f773a40984107deba4b9277e6068c99dd017c4deb4a5958d95af5cc9cf90be&ipo=images',

  },
  {
    model: '2018 Cayman GT4 ',
    price: `105,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fgallery%2FPORSCHE-Cayman-GT4--981C--5691_13.jpg&f=1&nofb=1&ipt=cf86182f17ce05cf207f7550b169cc26f593cb529627ec9be5e2102e19b34ac9&ipo=images',

  },
  {
    model: '2011 Boxster Spyder',
    price: `60,000`,
    image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbringatrailer.com%2Fwp-content%2Fuploads%2F2019%2F03%2F2011_porsche_boxster_spyder_15531938033f53ab7bdfIMG_20190316_145756.jpg&f=1&nofb=1&ipt=14fd4c0a7be3a5443081391f012780a0f3afa217ca61ba1a678c1ab8e929f2e9&ipo=images',
  }
];

porscheOne.src = porsches[0].image_url
porscheTwo.src = porsches[1].image_url
porscheThree.src = porsches[2].image_url
porscheFour.src = porsches[3].image_url
porscheFive.src = porsches[4].image_url
porscheSix.src = porsches[5].image_url
porscheSeven.src = porsches[6].image_url
porscheEight.src = porsches[7].image_url
porscheNine.src = porsches[8].image_url
porscheTen.src = porsches[9].image_url


Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
})






Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
const displayPorsche = (index) => {
  const porsche = porsche[index];
  const details = `<h2>${porsche.model} ${porsche.price} </h2>`;
  const detailsDiv = document.getElementById('porsche-details');
  detailsDiv.innerHTML = details;
};

const imageElements = document.querySelectorAll('.porsche-image');
imageElements.forEach((image, index) => {
  image.addEventListener('click', () => {
    displayPorsche(index);
  });
});