!function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-hc21k2jx1ej"]=window.__ectimmers["ecom-hc21k2jx1ej"]||{},!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),o=e.querySelector(".ecom-text_view-less-btn"),i=e.querySelector(".text-content.ecom-html");!i||(t&&t.addEventListener("click",()=>{i.classList.remove("ecom-text--is-mark"),i.style.maxHeight="",t.style.display="none",o.style.display=""}),o&&o.addEventListener("click",()=>{i.classList.add("ecom-text--is-mark"),i.style.maxHeight="var(--ecom-text-height)",o.style.display="none",t.style.display=""}))};document.querySelectorAll(".ecom-hc21k2jx1ej").forEach((function(t){e.call({$el:t,id:"ecom-hc21k2jx1ej",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-p6zbe0n96o").forEach((function(t){e.call({$el:t,id:"ecom-p6zbe0n96o",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-sb8hw2gm7d").forEach((function(t){e.call({$el:t,id:"ecom-sb8hw2gm7d",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-36hdf2u2dl"]=window.__ectimmers["ecom-36hdf2u2dl"]||{},!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const o=e.querySelector(".ecom__element--button");if(!o)return;let i=1e3*parseInt(t.settings.animation_loop_time)||6e3;window.__ectimmers["ecom-36hdf2u2dl"].qwebwzm3v=setInterval((function(){o.classList.add("animated"),setTimeout((function(){o.classList.remove("animated")}),1e3)}),i)}(this);var t=e.querySelector(".ecom__element--button");this.isLive&&t&&t.dataset.ecTrackingId&&t.addEventListener("click",(function(e){if(window.Shopify.analytics){e.preventDefault();let o=document.createElement("div");document.body.appendChild(o),o.click();let i=window.EComposer.PAGE||window.EComposer.TEMPLATE||window.EComposer.SECTION||window.EComposer.BLOCK||{};const c=Object.assign({button_id:t.id,tracking_id:t.dataset.ecTrackingId},i);Shopify.analytics.publish("ec_custom_events",c),t.cloneNode(!0).click()}}),{once:!0}),this.isLive&&t&&t.dataset.eventTrackingFb&&t.addEventListener("click",(function(e){window.fbq&&window.fbq("track",""+t.dataset.eventTrackingFb)}),{once:!0})};document.querySelectorAll(".ecom-36hdf2u2dl").forEach((function(t){e.call({$el:t,id:"ecom-36hdf2u2dl",settings:{animation:!1},isLive:!0})})),document.querySelectorAll(".ecom-w3o2zbdk8e").forEach((function(t){e.call({$el:t,id:"ecom-w3o2zbdk8e",settings:{animation:!1},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t,o,i;if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-oqwowdjtkyf"]=window.__ectimmers["ecom-oqwowdjtkyf"]||{},!this.$el)return;const c=this.$el.querySelector(".ecom-product-single__description-view-more-btn");if("tab"===this.settings.type){const e=this.$el.querySelectorAll(".ecom-product-description-tab__item"),t=this.$el.querySelectorAll(".ecom-product-description-tab__content");e.length&&e.forEach((o,i)=>{o.onclick=function(){this.classList&&!this.classList.contains("ecom-item-active")&&(e.forEach(e=>e.classList.remove("ecom-item-active")),t.forEach(e=>e.classList.remove("ecom-item-active")),o.classList.add("ecom-item-active"),t[i].classList.add("ecom-item-active"))}})}if("accordion"===this.settings.type){let c=function(e){e.classList.remove("ecom-item-active"),e.querySelector(".ecom-accordion__body").style.height="0"},n=function(e){e.forEach((e,t)=>{let o=e.parentNode,i=o.querySelector(".ecom-accordion__body");!a&&i&&i.classList.add("ecom-effect-accodion"),0==t&&o.querySelector(".ecom-item-active")?i.style.height=a?"auto":i.clientHeight+"px":i.style.height=0,e.onclick=function(t){t.preventDefault();let i=this.parentNode,n=o.parentNode,d=n.querySelectorAll(".ecom-product-description__accordion-item"),m=n.querySelectorAll(".ecom-product-description__accordion-title");if(this.classList&&this.classList.contains("ecom-item-active"))r&&innerWidth<768||l&&innerWidth>767&&innerWidth<1025||s&&innerWidth>1024?(this.classList.remove("ecom-item-active"),o.querySelector(".ecom-accordion__body").style.height="0px",o.classList.remove("ecom-item-active")):(d.forEach(e=>c(e)),m.forEach(e=>e.classList.remove("ecom-item-active")));else{r&&innerWidth<768||l&&innerWidth>767&&innerWidth<1025||s&&innerWidth>1024||(d.forEach(e=>c(e)),m.forEach(e=>e.classList.remove("ecom-item-active"))),e.classList.add("ecom-item-active"),i.classList.add("ecom-item-active");let t=e.parentNode.querySelector(".ecom-accordion__body"),o="auto";a||(o=t.scrollHeight+"px",t.classList.add("ecom-effect-accodion")),setTimeout(()=>{t.style.height=o},20)}}})};const s=null!=(e=this.settings.disable_auto_close)&&e,l=null!=(t=this.settings.disable_auto_close__tablet)&&t,r=null!=(o=this.settings.disable_auto_close__mobile)&&o,a=null!=(i=this.settings.disable_effect)&&i;n(this.$el.querySelectorAll(".ecom-product-description__accordion-item > .ecom-product-description__accordion-title"))}const n=this.settings.content_type,s=this.$el.querySelector(".ecom-product-single__description--full"),l=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),r=this.$el.querySelector(".ecom-product-single__description--paragraph .ecom-text-des"),a=this.$el.querySelector(".ecom-product-single__description--paragraph .ecom-html-des");c&&(c&&c.addEventListener("click",(function(){"text"===n&&s?(s.style.display="block",r.style.display="none"):a.style.maxHeight=null,this.style.display="none",l&&(l.style.display="flex")})),l&&l.addEventListener("click",(function(){c.style.display="flex",this.style.display="none","text"===n&&s?(s&&(s.style.display="none"),r.style.display="block"):a.style.maxHeight="var(--ecom-description-height)"})))};document.querySelectorAll(".ecom-oqwowdjtkyf").forEach((function(t){e.call({$el:t,id:"ecom-oqwowdjtkyf",settings:{type:"full",disable_effect:!1,content_type:"html"},isLive:!0})}))}(),function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-zixz4en78h"]=window.__ectimmers["ecom-zixz4en78h"]||{};let e=this.$el;if(!e)return;let t=e.querySelectorAll(":scope > .tabs__wrapper > .tabs__navs > .tabs__navs--items > .tabs__nav"),o=e.querySelectorAll(":scope > .tabs__wrapper > .core__group--items > .tab__item"),i=this.settings.action;function c(){let t=window.location.hash;if(t){let o=e.querySelector(`[data-target="${t}"]`);if(o){o.click();let e=new MouseEvent("mouseover",{bubbles:!0,cancelable:!0,view:window});o.dispatchEvent(e);let t=o.getBoundingClientRect().top+window.pageYOffset-window.innerHeight/2;window.scrollTo(0,t)}}}function n(){window.dispatchEvent(new window.Event("resize")),setTimeout(()=>{window.dispatchEvent(new window.Event("resize"))},500)}t.forEach((e,c)=>{"click"===i||window.screen.width<1025?e.onclick=function(){this.classList&&this.classList.contains("ecom-item-active")?(t.forEach(e=>e.classList.remove("ecom-item-active")),o.forEach(e=>e.classList.remove("ecom-item-active"))):(t.forEach(e=>e.classList.remove("ecom-item-active")),o.forEach(e=>e.classList.remove("ecom-item-active")),e.classList.add("ecom-item-active"),o[c].classList.add("ecom-item-active")),n()}:e.onmouseover=function(){this.classList&&this.classList.contains("ecom-item-active")?(t.forEach(e=>e.classList.remove("ecom-item-active")),o.forEach(e=>e.classList.remove("ecom-item-active"))):(t.forEach(e=>e.classList.remove("ecom-item-active")),o.forEach(e=>e.classList.remove("ecom-item-active")),e.classList.add("ecom-item-active"),o[c].classList.add("ecom-item-active")),n()}}),setTimeout(()=>{c()},300),window.addEventListener("hashchange",c,!1)};document.querySelectorAll(".ecom-zixz4en78h").forEach((function(t){e.call({$el:t,id:"ecom-zixz4en78h",settings:{action:"click"},isLive:!0})})),document.querySelectorAll(".ecom-un1yn74vmmp").forEach((function(t){e.call({$el:t,id:"ecom-un1yn74vmmp",settings:{action:"click"},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-mbi8jae1u0p"]=window.__ectimmers["ecom-mbi8jae1u0p"]||{},"lightbox"===this.settings.link&&"yes"===this.settings.lightbox&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let t=this.$el;function o(){let e=t.querySelector(".ecom-element.ecom-base-image"),o=t.closest(".core__row--columns");e&&(function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom-e.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)?(e.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(e.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}t&&this.settings.highligh_on_viewport&&window.addEventListener("scroll",(function(){o()}))};document.querySelectorAll(".ecom-mbi8jae1u0p").forEach((function(t){e.call({$el:t,id:"ecom-mbi8jae1u0p",settings:{link:"none",lightbox:"no",highligh_on_viewport:!1},isLive:!0})})),document.querySelectorAll(".ecom-4bowj3pin8e").forEach((function(t){e.call({$el:t,id:"ecom-4bowj3pin8e",settings:{link:"custom",lightbox:"no"},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t;window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-b1c6bg3cbw"]=window.__ectimmers["ecom-b1c6bg3cbw"]||{};const o=this.$el;if(!o)return;const i=o.querySelector(".ecom-autoplay-progress svg"),c=o.querySelector(".ecom-autoplay-progress span"),n=null!=(e=this.settings.disable_lazy)&&e,s=this.settings,l=this.settings.slider_loop,r=this.settings.slider_center,a=this.settings.slider_center__tablet,d=this.settings.slider_center__mobile,m=this.settings.slider_group,u=this.settings.slider_items,p=this.settings.slider_group__tablet,_=this.settings.slider_items__tablet,h=this.settings.slider_group__mobile,f=this.settings.slider_items__mobile,w=this.settings.slider_speed,y=this.settings.slider_speed__tablet,g=this.settings.slider_speed__mobile,v=function(e,t={},o=""){return"loop"==o?((window.innerWidth>1024&&(e.items.length<m+u||e.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(e.items.length<p+_||e.slider_autoplay)||e.items.length<h+f||e.slider_autoplay)&&(t.loop=!1),t):(window.innerWidth>1024&&e.speed&&(t[""+o]=e[0]),window.innerWidth<=1024&&window.innerWidth>768&&e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),window.innerWidth<768&&e[2]?t[""+o]=e[2]:e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),t)};let b={};i&&c&&(b={autoplayTimeLeft(e,t,o){i.style.setProperty("--progress",1-o),c.textContent=Math.ceil(t/1e3)+"s"}});const S=o.querySelector(".ecom-swiper-container"),q=null==(t=this.settings.disable_touch_move)||t;if(!S)return;let E=JSON.parse(S.dataset.optionSwiper);E.pagination.el=o.querySelector(`.ecom-swiper-pagination[data-ecnav-id="${this.id}"]`),E.navigation.nextEl=o.querySelector(`.ecom-swiper-button-next[data-ecnav-id="${this.id}"]`),E.navigation.prevEl=o.querySelector(`.ecom-swiper-button-prev[data-ecnav-id="${this.id}"]`),E.pagination.renderBullet=(e,t)=>`<span class="${t}">\n                          ${this.settings.items[e]&&this.settings.items[e].slider_pagination_image?`<img src="${this.settings.items[e].slider_pagination_image}">`:""}</span>`,b.init=function(){this.el.parentNode.classList.add("ecom-swiper-initialized-wrapper")};const L={allowTouchMove:this.isLive&&q,on:b};if(E.watchSlidesProgress=!0,window.EComSwiper){let e=function(){l&&(E.loop=!0,E=v(s,E,"loop")),E.centeredSlides=!1,E=v([r,a,d],E,"centeredSlides"),E=v([w,y,g],E,"speed"),t=new window.EComSwiper(S,Object.assign(E,L)),E.autoplay.enabled&&(t.on("touchStart",(function(e,t){e.params.speed=300,e.autoplay.stop()})),t.on("touchEnd",(function(e,t){window.innerWidth>1024&&w&&(e.params.speed=w),window.innerWidth<=1024&&window.innerWidth>768&&y?e.params.speed=y:w&&(e.params.speed=w),window.innerWidth<768&&g?e.params.speed=g:y?e.params.speed=y:w&&(e.params.speed=w),e.autoplay.start()}))),t.on("slideChange",(function(){const e=0==t.activeIndex?t.slides.length-1:t.activeIndex-1,o=t.slides[e];if(o){const e=o.querySelectorAll(".ecom-animation.ecom-animated");e.length&&e.forEach((function(e){e.classList.remove("ecom-animated","animated"),e.classList.add("ecom-animated-slider")}))}t.el&&t.slides.filter(e=>e.classList.contains("ecom-swiper-slide-visible")).forEach(e=>{let t=null;e&&1===e.nodeType&&(t=e.querySelectorAll(".ecom-animation.ecom-animated-slider"),t&&t.length&&t.forEach((function(e){e.classList.add("ecom-animated")})))})}))},t=null;var k;this.isLive&&window.addEventListener("resize",(function(){k&&clearTimeout(k),k=setTimeout(()=>{t.update()},200)})),this.isLive?e():setTimeout((function(){e()}),200)}S.querySelectorAll("img").length&&S.querySelectorAll("img").forEach((function(e,t){n&&e.removeAttribute("loading")}))};document.querySelectorAll(".ecom-b1c6bg3cbw").forEach((function(t){e.call({$el:t,id:"ecom-b1c6bg3cbw",settings:{slider_loop:!0,slider_center:!1,slider_items:1,slider_speed:500,items:[{img_size:"cover",img_size__mobile:"cover",overlay:!1,img_position__mobile:"top-center",img_position:"top-center",visibility:!0,blocks:[],hasElementRequestLiquid:!1,id:"ecom-q4yce9n0fb",image:{id:"gid://shopify/MediaImage/51636227670362",name:"J22-OUTLET",ext:"jpg",url:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J22-OUTLET.jpg?v=1738252987",width:1920,height:829,value:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J22-OUTLET.jpg?v=1738252987",thumbnail:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J22-OUTLET.jpg?v=1738252987",alt:"J22-OUTLET"},link:{href:"https://it.just1racing.com/products/j22-1"}},{img_size:"cover",img_size__mobile:"cover",overlay:!1,img_position__mobile:"top-center",image:{name:"J18-MIPS-OUTLET",ext:"png",url:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/bb1a1c7ebcd96811ceda5eb149d3eb7.png?v=1728638712",value__mobile:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",thumbnail__mobile:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",width:1920,height:829,value:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J18-MIPS-OUTLET.jpg?v=1738252995",thumbnail:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J18-MIPS-OUTLET.jpg?v=1738252995",alt:"20241011171709",id:"raGhNH0K"},img_position:"top-center",link:{href:"https://it.just1racing.com/products/j18-mips"},visibility:!0,blocks:[],hasElementRequestLiquid:!1,id:"ecom-hpazg9lru2j"},{img_size:"cover",img_size__mobile:"cover",overlay:!1,img_position__mobile:"top-center",image:{name:"J38_Email_Banner",ext:"png",url:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/bb1a1c7ebcd96811ceda5eb149d3eb7.png?v=1728638712",value__mobile:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",thumbnail__mobile:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",width:3800,height:1800,value:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",thumbnail:"https://cdn.shopify.com/s/files/1/0828/5477/3082/files/J38_Email_Banner.png?v=1728975613",alt:"20241011171709"},img_position:"top-center",link:{href:"https://it.just1racing.com/collections/home-showcase/products/j38"},visibility:!0,hasElementRequestLiquid:!1,id:"ecom-89n68fgfulo",blocks:[]}]},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t,o;window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-qz0g4wzjft"]=window.__ectimmers["ecom-qz0g4wzjft"]||{};let i=this.$el;if(!i)return;let c=!0,n=i.querySelectorAll(".ecom-collection__product-variants"),s=this.isLive,l=null!=(e=this.settings.show_featured_media)&&e,r=null!=(t=this.settings.bage_sale)?t:"",a=null!=(o=this.settings.enable_progress_pagination)&&o,d=this.settings.price_type,m="bullets";const u=this.settings.slider_center,p=this.settings.slider_center__tablet,_=this.settings.slider_center__mobile;"progress"===this.settings.slider_pagination_style&&(m="progressbar");const h=this.settings.sale_badge_type;let f=this.settings.slider_speed,w=this.settings.slider_speed__tablet,y=this.settings.slider_speed__mobile;const g=function(e,t={},o=""){return window.innerWidth>1024&&e[0]&&(t[""+o]=e[0]),window.innerWidth<=1024&&window.innerWidth>768&&e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),window.innerWidth<768&&e[2]?t[""+o]=e[2]:e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),t};let v=i.querySelectorAll(".ecom-collection__product-item");function b(e=!1,t){const o=i.querySelector(".ecom-paginate__progress-bar--outner"),c=i.querySelector(".ecom-paginate__progress-bar--inner"),n=i.querySelector(".ecom-paginate__progress-text");if(!(a&&s&&o&&c&&n))return;let{total:l,initProduct:r}=o&&o.dataset,d=n&&n.dataset.text,m=0,u=1,p=0,_=0;r=parseInt(r),e?(u=1,p=r*t):(window.location.href.match(/page=\d*/gm)&&(m=new URL(window.location.href).searchParams.get("page"),u=1===m?1:r*(m-1)+1),p=u+r-1),p>l&&(p=l),_=Math.round(p/l*100),c.style.width=_+"%",d=d.replace("{_start}",u),d=d.replace("{_end}",p),d=d.replace("{_total}",l),n.innerText=d}function S(e,t){var o=t.variantIdField.closest(".ecom-collection__product-item");let c=o.querySelector(".ecom-collection__product-submit"),n=o.querySelector(".ecom-collection__product-quantity-input"),a=o.querySelector(".ecom-collection__product-price"),m=o.querySelector(".ecom-collection__product-price--regular"),u=o.querySelector(".ecom-unit-price");m&&m.classList.add("ecom-collection__product--compare-at-price");let p=o.querySelector(".ecom-collection__product-price--bage-sale"),_=o.querySelector(".ecom-collection__product-badge--sale"),f=o.querySelector(".ecom-collection__product-badge--sold-out"),w=o.querySelector(".ecom-collection__product-item-sku-element"),y="";if(null===e||o.hasAttribute("ec-variant-init")&&"first_price"===d){let t=o.querySelector('select[name="variant_id"]'),i=o.querySelector(".product-json"),c=null;try{c=JSON.parse(i.innerHTML)}catch(e){return 1}if(o.hasAttribute("ec-variant-init")&&"first_price"===d)o.removeAttribute("ec-variant-init"),null==(e=c.variants.find(e=>e.available))&&(e=c.variants[0]);else{let i=o.querySelector("select#"+t.id+"-option-0");if(!i)return;const n=i.value;n&&c.variants.forEach((function(t){t.options.includes(n)&&(e=t)}))}}if(e){if(a&&(a.innerHTML=window.EComposer.formatMoney(e.price)),m&&(m.innerHTML=window.EComposer.formatMoney(e.compare_at_price)),u){e.unit_price?u.style.display="block":u.style.display="none";const t=u.querySelector(".ecom-ground-price_unit-price");t&&(t.innerHTML=window.EComposer.formatMoney(e.unit_price))}if(e.compare_at_price>e.price){m&&(m.style.display="inherit");let t="";t=i.querySelector(".ecom-collection__product-main").dataset.sale,"false"==i.querySelector(".ecom-collection__product-main").dataset.translate&&(t=r),_&&f&&(_.style.display="block",f.style.display="none"),"amount"===h?(y=e.compare_at_price-e.price,p&&(p.style.display="inherit",p.innerHTML=t.replace(/\{{.*\}}/g,window.EComposer.formatMoney(y)))):(y=100*(e.compare_at_price-e.price)/e.compare_at_price,p&&(p.style.display="inherit",p.innerHTML=t.replace(/\{{.*\}}/g,Math.round(y))))}else m&&(m.style.display="none"),_&&f&&(_.style.display="none",f.style.display="none"),p&&(p.style.display="none",p.innerHTML="");if(w&&(e.sku?(w.querySelector(".ecom-collection__product-item-sku").innerHTML=e.sku,w.style.display="flex"):w.style.display="none"),e.featured_image){let t=o.querySelector(".ecom-collection__product-media img");if(!l){let o=t.closest("div");o.classList.add("ecom-product-image-loading"),t.setAttribute("src",e.featured_image.src),t.removeAttribute("srcset"),t.addEventListener("load",(function(){o.classList.remove("ecom-product-image-loading")}))}}if(e.options.length,o.querySelector(".ecom-collection__product-submit"))if(e.available){const t=c.closest(".ecom-collection__product--wrapper-items");if(t.dataset.iconAdd&&c.querySelector(".ecom-collection__product-add-cart-icon")&&(c.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=t.dataset.iconAdd),!e.inventory_management||e.inventory_management&&e.inventory_quantity>0){if(c.removeAttribute("disabled"),n){let t=n.closest(".ecom-collection__product-quantity--wrapper");t&&(t.style.display="flex"),n.style.display="flex",e.inventory_management?n.max=e.inventory_quantity:n.max=9999}c.classList.add("ecom-collection__product-form__actions--add"),c.classList.remove("ecom-collection__product-form__actions--soldout"),c.classList.remove("ecom-collection__product-form__actions--unavailable"),c.querySelector(".ecom-add-to-cart-text").innerHTML=c.getAttribute("data-text-add-cart")}else if("continue"==e.inventory_policy&&e.inventory_quantity<=0){if(c.removeAttribute("disabled"),n){let e=n.closest(".ecom-collection__product-quantity--wrapper");e&&(e.style.display="flex"),n.max=9999,n.style.display="flex"}c.classList.add("ecom-collection__product-form__actions--add"),c.classList.remove("ecom-collection__product-form__actions--soldout"),c.classList.remove("ecom-collection__product-form__actions--unavailable"),c.querySelector(".ecom-add-to-cart-text").innerHTML=c.getAttribute("data-text-pre-order")}c.dataset.childName="add_to_cart_button",c.dataset.childTitle="Add to cart button"}else{if(_&&f&&(_.style.display="none",f.style.display="block"),s&&c.setAttribute("disabled","disabled"),n){let e=n.closest(".ecom-collection__product-quantity--wrapper");e&&(e.style.display="none"),n.style.display="none"}const e=c.closest(".ecom-collection__product--wrapper-items");e.dataset.iconSoldout&&c.querySelector(".ecom-collection__product-add-cart-icon")&&(c.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=e.dataset.iconSoldout),c.classList.add("ecom-collection__product-form__actions--soldout"),c.classList.remove("ecom-collection__product-form__actions--add"),c.classList.remove("ecom-collection__product-form__actions--unavailable"),c.querySelector(".ecom-add-to-cart-text").innerHTML=c.getAttribute("data-text-sold-out"),c.dataset.childName="sold_out_button",c.dataset.childTitle="Sold out button"}}else a.html=window.EComposer.formatMoney(0),m&&(m.innerHTML=window.EComposer.formatMoney(0),m.style.display="none"),c&&(c.setAttribute("disabled","disabled"),c.classList.add("ecom-collection__product-form__actions--unavailable"),c.classList.remove("ecom-collection__product-form__actions--add"),c.classList.remove("ecom-collection__product-form__actions--soldout"),c.querySelector(".ecom-add-to-cart-text").innerHTML=c.getAttribute("data-text-unavailable"))}function q(e){e.classList.add("ecom-swatch-init");let t=e.querySelector(".ecom-collection__product-form");if(!t)return;let o=t.querySelector('select[name="variant_id"]'),i=e.querySelector(".product-json"),c=null;try{c=JSON.parse(i.innerHTML)}catch(e){return 1}window.EComposer&&window.EComposer.OptionSelectors&&new window.EComposer.OptionSelectors(o.id,{product:c,onVariantSelected:S,enableHistoryState:!1}),e.querySelectorAll(".ecom-collection__product-swatch-item").forEach((function(t){t.addEventListener("click",(function(){l=!1;var t=this.closest("li");if(t.classList.contains("ecom-product-swatch-item--active"))return!1;t.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach((function(e){e.classList.remove("ecom-product-swatch-item--active")})),t.classList.add("ecom-product-swatch-item--active");var i=t.getAttribute("data-option-index"),c=t.getAttribute("data-value");let n=e.querySelector("select#"+o.id+"-option-"+i);n.value=c,n.dispatchEvent(new Event("change"))}))})),e.querySelectorAll("select.ecom-collection__product-swatch-select").forEach((function(t){t.addEventListener("change",(function(){var t=this.getAttribute("data-option-index"),i=this.value;e.querySelectorAll("select#"+o.id+"-option-"+t).forEach((function(e){e.value=i,e.dispatchEvent(new Event("change"))}))}))}))}if(v&&v.forEach((function(e){let t=e.querySelector(".ecom-collection__product-quantity-input"),o=e.querySelector(".ecom-collection__quantity-controls-plus"),i=e.querySelector(".ecom-collection__quantity-controls-minus");i&&i.addEventListener("click",(function(){t.stepDown(),t.dispatchEvent(new Event("change"))})),o&&o.addEventListener("click",(function(){t.stepUp(),t.dispatchEvent(new Event("change"))})),t&&t.addEventListener("change",(function(t){let o=e.querySelector("a.ecom-collection__product-submit");if(t.target.value>parseInt(t.target.max)&&(t.target.value=parseInt(t.target.max)),o){let e=o.getAttribute("href");o.setAttribute("href",e.replace(/quantity=(\d*)/gm,"quantity="+t.target.value))}}))})),b(!1,1),"slider"===this.settings.layout){let e=function(e){let t=e.querySelector(".ecom-swiper-container"),o=t&&t.dataset.optionSwiper;if(!o)return;o=JSON.parse(o),o.pagination={el:e.querySelector(".ecom-swiper-pagination"),type:m,clickable:!0},o.navigation={nextEl:e.querySelector(".ecom-swiper-button-next"),prevEl:e.querySelector(".ecom-swiper-button-prev")},o.autoHeight=!1,o.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let i=[f,w,y];if(s){o=g(i,o,"speed"),o=g([u,p,_],o,"centeredSlides");const e=new window.EComSwiper(t,o);o.autoplay.enabled&&(e.on("touchStart",(function(e,t){e.params.speed=300,e.autoplay.stop()})),e.on("touchEnd",(function(e,t){window.innerWidth>1024&&f&&(e.params.speed=f),window.innerWidth<=1024&&window.innerWidth>768&&w?e.params.speed=w:f&&(e.params.speed=f),window.innerWidth<768&&y?e.params.speed=y:w?e.params.speed=w:f&&(e.params.speed=f),e.autoplay.start()})))}else setTimeout((function(){o=g(i,o,"speed"),o=g([u,p,_],o,"centeredSlides"),new window.EComSwiper(t,o)}),200)},t=this.$el,o=t.querySelector(".ecom-collection__product-container");e(t),o.addEventListener("ecom-products-init-slider",(function(t){e(t.detail.wrapper)}))}n.forEach(q);const E=function(e){e.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach((function(e){e.addEventListener("click",(function(e){this.style.display="none";let t=this.closest(".ecom-collection__product-item");t.querySelectorAll(".ecom-collection__product-variants").forEach((function(e){e.classList.add("ecom-active")})),t.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach((function(e){e.style.display="inherit"}))}))})),e.querySelectorAll(".ecom-collection__product-close").forEach((function(e){e.addEventListener("click",(function(e){let t=this.closest(".ecom-collection__product-item");t.querySelectorAll(".ecom-collection__product-variants").forEach((function(e){e.classList.remove("ecom-active")})),t.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach((function(e){e.style.display="none"})),t.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach((function(e){e.style.display="inherit"}))}))}))};E(i);const L=i.querySelector(".ecom-collection__product-main");let k=L.dataset,A=L.dataset.countdownShows;const x=/\[([^\]]+)\]/gm;var T="";if(A.indexOf("week")>=0&&k.week){let e="",t=k.week.replace(x,(...t)=>(e=t[1],""));T+=`\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>`}if(A.indexOf("day")>=0&&k.day){let e="",t=k.day.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div> `}if(A.indexOf("hour")>=0&&k.hour){let e="",t=k.hour.replace(x,(...t)=>(e=t[1],""));T+=`\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>\n                        `}if(A.indexOf("minute")>=0&&k.minute){let e="",t=k.minute.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>\n                            `}if(A.indexOf("second")>=0&&k.second){let e="",t=k.second.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>`}function $(e){let t=this.closest(".ecom-collection__product-countdown-wrapper"),o=t.querySelector(".ecom-collection__product-countdown-progress-bar"),i=t.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),c=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=e.strftime(T),o&&c){let t=(new Date).getTime(),n=new Date(c).getTime(),s=e.finalDate.getTime();if(n<t&&s>n){o.style.removeProperty("display");let e=s-n,c=s-t,l=Math.round(100*c/e)+"%";i.style.width=l}else o.style.display="none"}}function C(e){if(e.dataset.ecomCountdown){if(e.dataset.ecomCountdownFrom&&(new Date).getTime()>new Date(e.dataset.ecomCountdown).getTime()&&s)return e.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(e,new Date(e.dataset.ecomCountdown),$),e.addEventListener("stoped.ecom.countdown",()=>{e.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(i.querySelectorAll(".ecom-collection__product-countdown-time").forEach((function(e){C(e)})),s){const e=i.querySelector(".ecom-collection__product-main");let t=1;const o=function(e){e.preventDefault();const o=this.dataset.get,c=this.closest(".ecom-sections[data-section-id]"),n=i.closest(".ecom-row.ecom-section");if(!o||!c||!c.dataset.sectionId)return;const l=`${o}&section_id=${c.dataset.sectionId}`;t++,b(!0,t),this.classList.add("ecom-loading"),s(l,c,this,"loadmore",n)},n=function(e){var t,o;t=e,o={},new IntersectionObserver((e,n)=>{e.forEach(e=>{e.isIntersecting&&(o.cb?o.cb(t):function(e){const t=e.dataset.get,o=e.closest(".ecom-sections[data-section-id]"),n=e.closest(".ecom-row.ecom-section");if(!t||!o||!o.dataset.sectionId)return;const l=o.dataset.sectionId,r=`${t}&section_id=${l}`;c&&(i.classList.add("ecom-doing-scroll"),s(r,o,e,"infinite",n))}(e.target),n.unobserve(e.target))})},o).observe(t)},s=function(t,o,s,l,r){c=!1,async function(e){return(await fetch(e,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(t).then((function(t){const o=document.createElement("div");o.innerHTML=t;const i=o.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items");if(!i)return;const c=r.querySelector(".ecom-collection__product--wrapper-items"),a=r.querySelector(".ecom-products-pagination-loadmore");for(;i.firstChild;)c.appendChild(i.firstChild);if(i.parentNode.removeChild(i),"loadmore"===l){const e=o.querySelector(".ecom-products-pagination-loadmore");e?a.innerHTML=e.innerHTML:a.remove()}else{s.remove();const e=o.querySelector(".ecom-products-pagination-infinite");e&&(c.after(e),n(e))}e.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:e}}))})).finally((function(){window.EComposer&&window.EComposer.initQuickview(),c=!0,i.classList.remove("ecom-doing-scroll"),s.classList.remove("ecom-loading")}))};if(e&&e.dataset.pagination){const t=e.dataset.pagination;if("loadmore"===t)i.querySelector(".ecom-products-pagination-loadmore-btn")&&i.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o);else if("infinit"===t){const e=i.querySelector(".ecom-products-pagination-infinite");e&&n(e)}}e.addEventListener("ecom-products-init",(function(t){const c=t.detail.wrapper;if(!c)return;if(e&&e.dataset.pagination){const t=e.dataset.pagination;if("loadmore"===t)i.querySelector(".ecom-products-pagination-loadmore-btn")&&i.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o);else if("infinit"===t){const e=i.querySelector(".ecom-products-pagination-infinite");e&&n(e)}}c.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&c.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(q),c.querySelectorAll(".ecom-collection__product-countdown-time").length&&c.querySelectorAll(".ecom-collection__product-countdown-time").forEach((function(e){C(e)})),E(c),c.querySelector(".ecom-products-pagination-loadmore-btn")&&c.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o),window.EComposer&&"function"==typeof window.EComposer.init&&window.EComposer.init(),M(c);j(c.querySelector(".ecom-collection__product--wishlist-wrapper"))}))}function M(e){if(e&&e.dataset.reviewPlatform)switch(e.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(e){console.info(e.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(e){console.info(e.message)}i.querySelectorAll('[data-average-rating="0.00"]').forEach((function(e){e.style.display="block !important"}))}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":void 0!==window.SMARTIFYAPPS&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break;case"air-reviews":"function"==typeof window.avadaAirReviewRerender&&window.avadaAirReviewRerender()}}function j(e){if(e)switch(e.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":i.querySelectorAll(".wishlist-hero-custom-button").forEach((function(e){var t=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:e});document.dispatchEvent(t)}))}}if(!s){M(i.querySelector(".ecom-collection__product-main"));j(i.querySelector(".ecom-collection__product--wishlist-wrapper"))}this.settings.enable_preload&&i.querySelectorAll(".ecom-collection__product-item").forEach((function(e){e.addEventListener("mouseenter",(function(){let e=document.createElement("link");e.rel="prefetch",document.head.appendChild(e);var t=this.querySelector("a.ecom-collection__product-item-information-title").getAttribute("href");e.href=t}),{once:!0})}));this.settings.show_compare&&!s&&i.querySelectorAll(".ecom-product__compare-link").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")}))}));this.settings.show_wishlist&&!s&&i.querySelectorAll(".ecom-product__wishlist-link").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")}))}));if("recommendations"===this.settings.show_product_by&&s){let e=i.closest(".ecom-builder");if(e){let t=e.querySelector(".ecom-sections").dataset.sectionId,o=e.querySelector('input[name="product-id"]')?e.querySelector('input[name="product-id"]').value:"",i=8,c=e.querySelector(`[data-section-id="${t}"]`),n=c.querySelector(".ecom-collection__product-container"),s=c.querySelector(".ecom-collection__product-main");s.classList.contains("ecom-collection_product_template_product")&&"recommendations"===this.settings.show_product_by&&(i=this.settings.limit_recommended_products),fetch(`${window.EComposer.routes.root_url}recommendations/products?product_id=${o}&limit=${i}&section_id=${t}`).then(e=>e.text()).then(e=>{const o=document.createElement("div");o.innerHTML=e;const i=o.querySelector(`[data-section-id="${t}"]`),c=i.querySelector(".ecom-collection__product-main");i.innerHTML.trim().length&&s&&(s.innerHTML=c.innerHTML,s.querySelector(".ecom-collection__product--wrapper-items")&&s.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:s}})),n.dispatchEvent(new CustomEvent("ecom-products-init-slider",{detail:{wrapper:n}})))}).catch(e=>{console.error(e)})}}};document.querySelectorAll(".ecom-qz0g4wzjft").forEach((function(t){e.call({$el:t,id:"ecom-qz0g4wzjft",settings:{show_featured_media:!1,bage_sale:"-{{sale}}%",price_type:"first_price",sale_badge_type:"percent",slider_speed:200,layout:"grid",enable_preload:!1},isLive:!0})})),document.querySelectorAll(".ecom-jo694d7loln").forEach((function(t){e.call({$el:t,id:"ecom-jo694d7loln",settings:{show_featured_media:!1,bage_sale:"-{{sale}}%",price_type:"first_price",sale_badge_type:"percent",slider_speed:200,layout:"grid",enable_preload:!1},isLive:!0})}))}();