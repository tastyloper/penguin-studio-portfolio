import Isotope from 'isotope-layout';
import smoothscroll from 'smoothscroll-polyfill';

class Penguin {
  constructor (portfolios) {
    this.portfolios = portfolios;
    this.$grid= document.querySelector('.grid');

    // this.render();

    this.$menuBtn = document.querySelector('.menu-btn');
    this.$menuCloseBtn = document.querySelector('.menu-close-btn');
    this.$menuOpenBg = document.querySelector('.menu-open-bg');
    this.$navigation = document.querySelector('.navigation');
    this.$layerAreaImg = document.querySelector('.layer_area > .img');
    this.$infoDateTime = document.querySelector('.info-date > time');
    this.$youtubeWrap = document.querySelector('.youtube-wrap');
    this.$youtubeLink = document.querySelector('.youtube-link');
    this.$infoTitle = document.querySelector('.info-title');
    this.$body = document.querySelector('body');
    this.$layer = document.querySelector('#layer');
    this.$layerClose = document.querySelector('#layer-close');

    this.$menuBtn.addEventListener('click', this.menuEvent.bind(this));
    this.$menuCloseBtn.addEventListener('click', this.menuEvent.bind(this));
    this.$menuOpenBg.addEventListener('click', this.menuEvent.bind(this));
    this.$navigation.addEventListener('click', this.menuEvent.bind(this));
    this.$grid.addEventListener('click', this.detailEvent.bind(this));
    this.$layerClose.addEventListener('click', this.layerCloseEvent.bind(this));
  }

  menuEvent() {
    this.$navigation.classList.toggle('nav-act');
    this.$menuOpenBg.classList.toggle('menu-bg-act');
  }

  detailEvent(e) {
    if (
      !(e.target.parentElement.classList.contains('grid-item') ||
      e.target.parentElement.parentElement.classList.contains('grid-item'))
    ) return;

    let gridItem = e.target.parentElement;
    if (!e.target.classList.contains('subject-bg')) {
      gridItem = e.target.parentElement.parentElement;
    }

    this.$layerAreaImg.style.backgroundImage = `url(${gridItem.querySelector('img').getAttribute('src')})`;
    
    if (gridItem.dataset.date) {
      this.$infoDateTime.textContent = gridItem.dataset.date;
    } else {
      this.$infoDateTime.textContent = ' ';
    }

    console.log(!!gridItem.dataset.youtube);
    
    if (gridItem.dataset.youtube) {
      this.$youtubeWrap.style.display = 'block';
      this.$youtubeLink.setAttribute('href', gridItem.dataset.youtube);
    } else {
      this.$youtubeWrap.style.display = 'none';
    }
    
    this.$infoTitle.textContent = gridItem.querySelector('p').textContent;
    this.$body.classList.add('layer-show');
    this.$layer.classList.add('layer-show');
  }

  layerCloseEvent() {
    this.$body.classList.remove('layer-show');
    this.$layer.classList.remove('layer-show');
  }

  render() {
    console.log(this.portfolios);
    let html = '';

    this.portfolios.reverse().forEach(({ id, type, date, title, youtube, img }) => {
      html += `<div class="grid-item ${type}" data-id="${id}" data-date="${date}" data-youtube="${youtube}">
      <img src="${img}" alt="${title}">
      <div class="subject-bg">
        <p>${title}</p>
      </div>
    </div>`
    });
    this.$grid.innerHTML += html;
  }
}

const portfolios = [
  {
    id: 1,
    type: 'concert',
    date: '',
    title: '옴므 불후의 명곡 음원2',
    youtube: 'https://www.youtube.com/watch?v=Rdgvjs3887Q&t=11s',
    img: 'images/portfolio/1.jpg'
  },
  {
    id: 2,
    type: 'concert',
    date: '',
    title: '옴므 불후의 명곡 음원',
    youtube: 'https://www.youtube.com/watch?v=onnFk9U934c',
    img: 'images/portfolio/2.jpg'
  },
  {
    id: 3,
    type: 'ad',
    date: '20150831',
    title: '[팔도 왕뚜껑] 왕맛드립 혁오 편',
    youtube: 'https://www.youtube.com/watch?v=TVlpOm6PRoA',
    img: 'images/portfolio/3.jpg'
  },
  {
    id: 4,
    type: 'ad',
    date: '20150911',
    title: '[팔도 왕뚜껑] 왕맛드립 하니 편',
    youtube: 'https://www.youtube.com/watch?v=-s2Y-zy5HJE',
    img: 'images/portfolio/4.jpg'
  },
  {
    id: 5,
    type: 'tvcf',
    date: '20151022',
    title: '[삼성전자 사회봉사단] 삼성 투모로우 솔루션, 시각 장애인 지우 이야기',
    youtube: 'https://www.youtube.com/watch?v=gqGAf2EaIBs',
    img: 'images/portfolio/5.jpg'
  },
  {
    id: 6,
    type: 'ad',
    date: '20160102',
    title: '삼성노트북 9 세일즈톡- 설민석 편',
    youtube: 'https://www.youtube.com/watch?v=saIfSjd344M',
    img: 'images/portfolio/6.jpg'
  },
  {
    id: 7,
    type: 'ad',
    date: '20160104',
    title: '핫질, 당신의 심심함을 날려줄 HOT한 한방!',
    youtube: 'https://www.youtube.com/watch?v=ej_6d97FPBQ',
    img: 'images/portfolio/7.jpg'
  },
  {
    id: 8,
    type: 'ad',
    date: '20160112',
    title: '[2015] 현대카드 컬처프로젝트 19 스탠리 큐브릭 전 – 360도 영상',
    youtube: 'https://www.youtube.com/watch?v=Y8lLR-LCLq4&t=2s',
    img: 'images/portfolio/8.jpg'
  },
  {
    id: 9,
    type: 'tvcf',
    date: '20160201',
    title: '정관장 황진단',
    youtube: 'https://www.youtube.com/watch?v=628_eqUL6GI',
    img: 'images/portfolio/9.jpg'
  },
  {
    id: 10,
    type: 'tvcf',
    date: '20160207',
    title: '질레트 코리아CF [류준열,이동휘 편]',
    youtube: 'https://www.youtube.com/watch?v=lGjDAbrs4uo',
    img: 'images/portfolio/10.jpg'
  },
  {
    id: 11,
    type: 'tvcf',
    date: '20160216',
    title: '[Pizza Hut] 피자헛 the맛있는피자2',
    youtube: 'https://www.youtube.com/watch?v=RWMpdlGRXcA',
    img: 'images/portfolio/11.jpg'
  },
  {
    id: 12,
    type: 'tvcf',
    date: '20160307',
    title: 'IBK기업은행 희망음악회 시장편',
    youtube: 'https://www.youtube.com/watch?v=IlK_l92b2wI',
    img: 'images/portfolio/12.jpg'
  },
  {
    id: 13,
    type: 'tvcf',
    date: '20160308',
    title: '쌍용자동차 티볼리 에어 TVCF',
    youtube: 'https://www.youtube.com/watch?v=ZSHcOIWZm7k',
    img: 'images/portfolio/13.jpg'
  },
  {
    id: 14,
    type: 'tvcf',
    date: '20160317',
    title: '[김느안느 뷰리텔] 토니모리 CF',
    youtube: 'https://www.youtube.com/watch?v=Exh3MOaOu14',
    img: 'images/portfolio/14.jpg'
  },
  {
    id: 15,
    type: 'tvcf',
    date: '20160331',
    title: 'IBK기업은행 희망음악회 지하철편',
    youtube: 'https://www.youtube.com/watch?v=8Wn9bHn-wnw',
    img: 'images/portfolio/15.jpg'
  },
  {
    id: 16,
    type: 'tvcf',
    date: '20160331',
    title: '삼성 갤럭시 S7 유연석, 이광수, 조윤우 편',
    youtube: 'https://www.youtube.com/watch?v=V0ZwH6MYc6Q',
    img: 'images/portfolio/16.jpg'
  },
  {
    id: 17,
    type: 'music',
    date: '20160411',
    title: '유성은 - 질투(Duet.키썸) Music Video INTRO',
    youtube: 'https://www.youtube.com/watch?v=izLMZeGC30A',
    img: 'images/portfolio/17.jpg'
  },
  {
    id: 18,
    type: 'ad',
    date: '20160802',
    title: '삼성 기어 VR 프로젝트 - Be Fearless',
    youtube: 'https://www.youtube.com/watch?v=xNdCcmphxjE',
    img: 'images/portfolio/18.jpg'
  },
  {
    id: 19,
    type: 'tvcf',
    date: '20160829',
    title: '르꼬끄 골프 이보미편',
    youtube: 'https://www.youtube.com/watch?v=E3BGVL7U4dg',
    img: 'images/portfolio/19.jpg'
  },
  {
    id: 20,
    type: 'tvcf',
    date: '20161214',
    title: '동국제약 판시딜 카운셀러편',
    youtube: 'https://www.youtube.com/watch?v=JjW65KyA9CQ',
    img: 'images/portfolio/20.jpg'
  },
  {
    id: 21,
    type: 'concert',
    date: '20170613',
    title: '2017 BTS HOME PARTY',
    youtube: '',
    img: 'images/portfolio/21.jpg'
  },
  {
    id: 22,
    type: 'music',
    date: '20170704',
    title: '서태지 - COME BACK HOME 앨범',
    youtube: 'https://www.youtube.com/watch?v=Wnz0s-ff8WA',
    img: 'images/portfolio/22.jpg'
  },
  {
    id: 23,
    type: 'music',
    date: '20170918',
    title: 'BTS - LOVE YOURSELF 承 "Her" 정규 앨범',
    youtube: 'https://www.youtube.com/watch?v=ADLYklvLbws',
    img: 'images/portfolio/23.jpg'
  },
  {
    id: 24,
    type: 'music',
    date: '20171201',
    title: '이현-입술자국 싱글 음원',
    youtube: 'https://www.youtube.com/watch?v=n2gpoH373zw',
    img: 'images/portfolio/24.jpg'
  },
  {
    id: 25,
    type: 'concert',
    date: '20171202',
    title: 'MMA 2017',
    youtube: '',
    img: 'images/portfolio/25.jpg'
  },
  {
    id: 26,
    type: 'concert',
    date: '20171208-20171210',
    title: '2017 BTS LIVE WINGS TOUR',
    youtube: '',
    img: 'images/portfolio/26.jpg'
  },
  {
    id: 27,
    type: 'concert',
    date: '20180110-20180111',
    title: '2017 골든디스크',
    youtube: '',
    img: 'images/portfolio/27.jpg'
  },
  {
    id: 28,
    type: 'concert',
    date: '20180113-20180114',
    title: 'BTS 4TH MUSTER',
    youtube: '',
    img: 'images/portfolio/28.jpg'
  },
  {
    id: 29,
    type: 'music',
    date: '20180226',
    title: '이현 -다음이 있을까 싱글 음원',
    youtube: 'https://www.youtube.com/watch?v=5Lm3KTEtlBM',
    img: 'images/portfolio/29.jpg'
  },
  {
    id: 30,
    type: 'music',
    date: '20180302',
    title: 'J-hope - HOPEWORLD Mixtape',
    youtube: 'https://www.youtube.com/watch?v=Gt-yOFYSxbs',
    img: 'images/portfolio/30.jpg'
  },
  {
    id: 31,
    type: 'music',
    date: '20180404',
    title: 'BTS - FACE YOURSELF 일본 정규 앨범',
    youtube: 'https://www.youtube.com/watch?v=SEquGYMci00',
    img: 'images/portfolio/31.jpg'
  },
  {
    id: 32,
    type: 'music',
    date: '20180518',
    title: 'BTS - LOVE YOURSELF 轉 "Tear" 정규 앨범',
    youtube: 'https://www.youtube.com/watch?v=mpyzyQ9SKQs',
    img: 'images/portfolio/32.jpg'
  },
  {
    id: 33,
    type: 'ad',
    date: '20180829',
    title: '[팔도 왕뚜껑] 왕맛드립 with 1인 크리에이터',
    youtube: 'https://www.youtube.com/watch?v=WhZO0FoatQw',
    img: 'images/portfolio/33.jpg'
  }
];

new Penguin(portfolios);

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener('click', function (event) {
    // only work with buttons
    if (!event.target.matches('button')) return;
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}

function imgCheckDirections(img) {
  var result = '';
  var width = img.width();
  var height = img.height();

  console.log(width);
  console.log(height);

  if (width >= height) {
    result = "cover";
  } else if (height > width) {
    result = "contain";
  }

  return result;
}

window.onload = function() {

  smoothscroll.polyfill();

  const $body = document.querySelector('body');

  setTimeout(() => {
    $body.classList.remove('loading');
    $body.classList.remove('loading-show');
  }, 1000);

  const $goTopIcon = document.querySelector('.gotop-icon');
  const $smoothLinks = document.querySelectorAll('.smooth-link');

  window.addEventListener('scroll', (e) => {
    const windowYOffset = window.pageYOffset;
    $goTopIcon.style.display = windowYOffset > 100 ? 'block' : 'none';
  });

  $goTopIcon.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

  for (let i = 0; i < $smoothLinks.length; i++) {
    $smoothLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'A') return;
      const targetName = e.target.getAttribute('href').split('#')[1];
      const tartget = document.getElementById(targetName);
      window.scroll({
        top: tartget.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  const $navItems = document.querySelectorAll('.menu > li');
  const $sections = document.querySelectorAll('.section-wrap');

  function changeNavItemState() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $navItems.forEach((link) => link.classList.remove('active'));
      $navItems[$navItems.length - 1].classList.add('active');
    } else {
      let index = $sections.length;
      
      while(--index && window.scrollY + 50 < $sections[index].offsetTop) {}
      
      $navItems.forEach((link) => link.classList.remove('active'));
      $navItems[index].classList.add('active');
    }
  }

  changeNavItemState();
  window.addEventListener('scroll', changeNavItemState);

  // new Glide('.glide', {
  //   type: 'carousel',
  //   startAt: 0,
  //   autoplay: 3500,
  //   keyboard: false
  // }).mount();

  const $grid = document.querySelector('.grid');
  const iso = new Isotope($grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
    }
  });

  // bind filter button click
  const $filtersElem = document.querySelector('.filters-button-group');
  $filtersElem.addEventListener('click', function (event) {
    // only work with buttons
    if (!event.target.matches('button')) return;
    const filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  const $buttonGroups = document.querySelectorAll('.button-group');
  for (var i = 0, len = $buttonGroups.length; i < len; i++) {
    radioButtonGroup($buttonGroups[i]);
  }
};
