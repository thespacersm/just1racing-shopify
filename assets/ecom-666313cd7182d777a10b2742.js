/* Publish by EComposer at 2024-07-31 09:20:08*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-njqb413blv"]=  window.__ectimmers["ecom-njqb413blv"] || {};
var s,o;let e=this.$el;if(!e)return;let i=e.querySelector("afterpay-placement.ecom-afterpay-integrate"),t=this.$el.closest(".ecom-product-form--single");if(t){let a=t.querySelector('[name="id"]');if(a&&a.dispatchEvent(new window.Event("ecomUpdate")),this.settings.show_total_price){const r=t.querySelector(".ecom-product-single__quantity-input"),c=e.querySelector(".ecom-product-single__price--sale");if(e.querySelector(".ecom-product-single__price--regular"),!c)return;r&&r.addEventListener("change",function(){c.innerHTML=window.EComposer.formatMoney(parseInt(c.getAttribute("data-price"))*parseInt(this.value))}),t.addEventListener("ecomVariantChange",function(u){if(u.detail.variant){const l=u.detail.variant,g=r?parseInt(r.value):1;c.setAttribute("data-price",l.price),g>1&&(c.innerHTML=window.EComposer.formatMoney(l.price*parseInt(g)))}})}}if(this.settings.enable_afterpay){let a=window.document.querySelector("#ecom-after-pay-script");if(window.afterpay_min=this.settings.lower_limit||1,a)a.dataset.analyticsEnabled=!0,a.dataset.min=(s=this.settings.lower_limit)!=null?s:1,a.dataset.max=(o=this.settings.upper_limit)!=null?o:1e3;else{let r=window.document.createElement("script");r.id="ecom-after-pay-script",r.dataset.analyticsEnabled=!0,r.dataset.min=this.settings.lower_limit||1,r.dataset.max=this.settings.upper_limit||1e3,r.src="https://js.afterpay.com/afterpay-1.x.js",window.document.head.appendChild(r)}i&&this.isLive&&window.jQuery&&window.Afterpay&&window.Afterpay.initProductPage&&window.Afterpay.initProductPage(window.jQuery)}let n=e.querySelector(".ecom-product-single__price--badges-sale");if(n&&n.dataset.haveSale=="true"){let a=n.dataset.sale,r=n.dataset.text;r=r.replace(/\{.*\}/g,a),n.innerHTML=r,n.style.display="block"}

                    });
                    
                        document.querySelectorAll('.ecom-njqb413blv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-njqb413blv', settings: {"enable_afterpay":false,"lower_limit":"100","upper_limit":"600"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-p8c7uaafm8n"]=  window.__ectimmers["ecom-p8c7uaafm8n"] || {};
if(!this.$el)return;const e=this.$el.querySelector(".ecom-product-single__description-view-more-btn");if(this.settings.type==="tab"){const o=this.$el.querySelectorAll(".ecom-product-description-tab__item"),a=this.$el.querySelectorAll(".ecom-product-description-tab__content");o.length&&o.forEach((r,c)=>{r.onclick=function(){this.classList&&!this.classList.contains("ecom-item-active")&&(o.forEach(u=>u.classList.remove("ecom-item-active")),a.forEach(u=>u.classList.remove("ecom-item-active")),r.classList.add("ecom-item-active"),a[c].classList.add("ecom-item-active"))}})}const i=this.settings.content_type,t=this.$el.querySelector(".ecom-product-single__description--full"),n=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),s=this.$el.querySelector(".ecom-product-single__description--paragraph");e&&(e&&e.addEventListener("click",function(){i==="text"&&t?(t.style.display="block",s.style.display="none"):s.style.maxHeight=null,this.style.display="none",n&&(n.style.display="flex")}),n&&n.addEventListener("click",function(){e.style.display="flex",this.style.display="none",i==="text"&&t?(t&&(t.style.display="none"),s.style.display="block"):s.style.maxHeight="var(--ecom-description-height)"}))

                    });
                    
                        document.querySelectorAll('.ecom-p8c7uaafm8n').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-p8c7uaafm8n', settings: {"type":"full","content_type":"html"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-7ojjctbbf7e"]=  window.__ectimmers["ecom-7ojjctbbf7e"] || {};
const e=this.$el;if(!e)return;const i=e.querySelector(".ecom-product-single__quantity-controls-plus"),t=e.querySelector(".ecom-product-single__quantity-controls-minus"),n=e.querySelector(".ecom-product-single__quantity-input");n.value===""&&(n.value=this.settings.quantity_min&&parseInt(this.settings.quantity_min)>0?parseInt(this.settings.quantity_min):"1"),i.addEventListener("click",function(s){s.preventDefault(),n.stepUp(),n.dispatchEvent(new Event("change"))}),t.addEventListener("click",function(s){s.preventDefault(),n.stepDown(),n.dispatchEvent(new Event("change"))}),n.addEventListener("change",function(s){n.dataset.maxValue&&parseInt(n.dataset.maxValue)<parseInt(s.target.value)&&(s.target.value=parseInt(n.dataset.maxValue)),n.dataset.minValue&&parseInt(s.target.value)<parseInt(n.dataset.minValue)&&(s.target.value=parseInt(n.dataset.minValue))})

                    });
                    
                        document.querySelectorAll('.ecom-7ojjctbbf7e').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-7ojjctbbf7e', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-tkplo4f3epe"]=  window.__ectimmers["ecom-tkplo4f3epe"] || {};
if(!this.$el)return!1;const e=this.$el,i=e.closest(".ecom-product-form--single");if(!i)return!1;const t=i.querySelector('select[name="id"]'),n=e.querySelector(".ecom-product-single__add-to-cart--submit"),s=e.closest("form");if(!s)return;function o(){let r=null;const c=s.dataset.product_id;let u=null;if(c?u=s.querySelector("[id^=product-json-"+c+"]"):u=e.querySelector("[id^=addtocart-product-json]"),!u)return;try{r=JSON.parse(u.innerHTML)}catch(g){return}let l=r.variants[0];if(l){const g=n.querySelector(".ecom-add-to-cart-text");if(!g)return;l.available==!1?(n.setAttribute("disabled","disabled"),g.innerText=n.dataset.textOutstock,n.classList.remove("ecom-product-single__pre-order")):l.inventory_quantity<=0&&l.inventory_policy=="continue"&&l.inventory_management&&(g.innerText=n.dataset.textPreOrder,n.classList.add("ecom-product-single__pre-order"))}}if(!this.isLive)i&&(t&&!t.classList.contains("ecom-product-single__picker-default-variant")?t.dispatchEvent(new window.Event("ecomUpdate")):o());else{let r=function(c){const u=i.querySelectorAll(".ecom-required--checkbox");u.length>0&&u.forEach(function(b){let h=b.querySelectorAll("input[type=checkbox]");if(h.length==0)return;let m=!1;h.forEach(function(v){v.checked&&(m=!0)}),m?h.forEach(function(v){v.required=!1}):h.forEach(function(v){v.required=!0})});const l=i.querySelectorAll(".ecom-product-single__property-file");let g=!1,f;l.length&&l.forEach(function(b){if(b.required&&(!b.value||b.value=="")){b.parentNode.parentNode.querySelector(".ecom-product-single-form--text-error").style.display="block",g=!0,f=b;return}else g=!1}),g&&(c.preventDefault(),c.stopPropagation(),f.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))};if((!s.querySelector("select[name=id]")||s.querySelector("select[name=id]")&&t.classList.contains("ecom-product-single__picker-default-variant"))&&o(),!t&&n&&n.dataset.variant_id){const c=document.createElement("input");c.type="hidden",c.value=n.dataset.variant_id,e.appendChild(c)}n.addEventListener("click",r)}const a=function(r){if(!e)return;const c=e.querySelector(".ecom-product-single__add-to-cart--submit");if(!c)return;let u=parseInt(r.settings.animation_loop_time)*1e3||6e3,l=1e3;window.__ectimmers["ecom-tkplo4f3epe"]["0by73n63x"] = setInterval(function(){c.classList.add("animated"),setTimeout(function(){c.classList.remove("animated")},l)},u)};this.settings.animation&&a(this)

                    });
                    
                        document.querySelectorAll('.ecom-tkplo4f3epe').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-tkplo4f3epe', settings: {"animation":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-728l2n52d5c"]=  window.__ectimmers["ecom-728l2n52d5c"] || {};
var oe,ae;if(!this.$el)return!1;const e=this,t=this.$el,i=this.isLive,p=this.settings.position_zoom?this.settings.position_zoom:1,_={width:this.settings.zoom_width,height:this.settings.zoom_height},a=t.closest(".ecom-product-form--single");window.innerWidth>768,window.innerWidth<768,t.closest(".ecom-row"),window.matchMedia("only screen and (max-width: 768px)");const C=this.settings.show_thumbnails?this.settings.show_thumbnails:!1,P=this.settings.layout?this.settings.layout:"slider",q=this.settings.enable_zoom?this.settings.enable_zoom:!1;var $,x,M=this.settings.thumbnail_position,j=this.settings.thumbnail_position__tablet,B=this.settings.thumbnail_position__mobile,V=!!this.settings.show_pagination,T=(oe=this.settings.enable_gallery)!=null?oe:!1,E=(ae=this.settings.gallery_name)!=null?ae:!1,I=this.settings.disable_auto_height;function A(){if(P==="slider")try{if(C){const r=e.$el.querySelector(".ecom-product-single__media--thumbs");let h=JSON.parse(r.dataset.breakpoints);Object.keys(h).forEach(y=>{let c=h[y].__screen_name,H="thumbnail_position";h[y].direction=["row","row-reverse"].includes(h[y][H])?"vertical":"horizontal"}),r.hasChildNodes()&&($=new window.EComSwiper(r,{freeMode:!1,centeredSlides:!1,loop:!1,centeredSlidesBounds:!0,slideToClickedSlide:!0,autoHeight:!!(["row","row-reverse"].includes(M)&&window.screen.width>1024||["row","row-reverse"].includes(j)&&(window.screen.width>=768||window.screen.width<=1024)||["row","row-reverse"].includes(B)&&window.screen.width<768),navigation:{nextEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-next"),prevEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-prev")},allowTouchMove:i,watchSlidesProgress:!0,grabCursor:!0,centerInsufficientSlides:!1,breakpoints:h,direction:["row","row-reverse"].includes(M)?"vertical":"horizontal",on:{slideChangeTransitionEnd:function(){},breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},init:function(){setTimeout(()=>{this.el&&this.el.classList.remove("ecom-product-single__init-thumb-hidden")},500)}}}));let k=null;r.querySelectorAll("img").forEach(function(y){y.addEventListener("load",function(){clearTimeout(k),k=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}const m=t.querySelector(".ecom-product-single__media--featured");var o=m.dataset.breakpoints;o=o?JSON.parse(o):{0:{slidesPerView:1,spaceBetween:20}},x=new window.EComSwiper(m,{autoHeight:I!=null?I:!0,lazy:!0,allowTouchMove:i,pagination:V?{el:m.querySelector(".ecom-swiper-pagination"),dynamicBullets:!0,clickable:!0}:!1,navigation:{nextEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-next"),prevEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-prev")},thumbs:C&&$?{swiper:$}:void 0,noSwiping:!0,longSwipes:!0,touchStartPreventDefault:!0,noSwipingSelector:"model-viewer",noSwipingClass:"ecom-product-single__media--model",grabCursor:!0,preloadImages:!0,breakpoints:o,on:{breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},slideChange:function(r){var k,y;if(T)return;r.activeIndex!==r.lastIndex&&(r.lastIndex=r.activeIndex+"");const h=a&&a.querySelector('[name="id"]');if(h){let c=null;if(!x||!x.slides[x.activeIndex])return;if(c=(y=(k=x.slides[x.activeIndex])==null?void 0:k.dataset)==null?void 0:y.variant_id,c){c=c+"";const H=h.value;(!H||!c.includes(H.toString()))&&(h.value=c.split(",")[0],h.dispatchEvent(new Event("swatch")))}}r.slides[r.activeIndex]&&q&&X(r.slides[r.activeIndex])},slideChangeTransitionEnd:function(r){var h,k;window.dispatchEvent(new window.Event("resize")),r.slides.forEach(y=>{if(y.classList.contains("ecom-swiper-slide-active")){let c=y.querySelector("video");c&&c.hasAttribute("autoplay")&&c.play()}else{let c=y.querySelector("iframe,video");c&&(c.nodeName==="IFRAME"?c.src=c.src:c.pause())}}),i&&(C&&$&&$.update(),r.allowTouchMove=!((k=(h=r.slides[x.activeIndex])==null?void 0:h.classList)!=null&&k.contains("ecom-swiper-no-swiping")))},init:function(r){r.slides[r.activeIndex]&&q&&X(r.slides[r.activeIndex])}}});let b=null;m.querySelectorAll("img").forEach(function(r){r.addEventListener("load",function(){clearTimeout(b),b=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})}),i||setTimeout(()=>{m.classList.remove("ecom-before-init")},200)}catch(m){console.info(m.message)}}A();async function O(o){return await(await window.fetch(o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}})).json().then(b=>b.product)}async function R(){const o=t.querySelectorAll(".ecom-product-single__media--image img"),m=t&&t.querySelector(".ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider"),b=m&&m.querySelectorAll(".ecom-product-single__media--image"),r=t&&t.querySelector(".ecom-product-single__media--featured"),h=t&&t.querySelector(".ecom-product-single__media--thumbs"),k=t&&t.querySelector(".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper"),y=h&&h.querySelectorAll(".ecom-product-single__media--thumbnail"),c=t&&t.querySelector(".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"),H=c&&c.querySelectorAll(".ecom-product-single__media--image");let se=!0;if(o&&o.forEach(function(S,L){if(S.alt.includes("ecomposer-")){se=!1;return}}),se)return;let f=null,J=a&&a.querySelector(".ecom-product-single-select-id[name=id]");if(!J)return;const ne=a&&a.querySelector("#"+J.dataset.jsonProduct);if(!ne)return;try{f=JSON.parse(ne.innerHTML)}catch(S){return}let G=null;if(i&&window.Shopify&&window.Shopify.routes.root!="/"){let S=window.location.origin+"/products/"+f.handle+".json";G=await O(S),f.options_with_values=G.options,f.variants=G.variants}let U={detail:{variant:null}};U.detail.variant=f.variants.find(function(S){if(S.id==J.value)return S});let Y=t.querySelector("#ecom-single-product-default-variant"),ce=Y&&Y.innerText,le=Y.dataset.dontSetAlt;if(le&&le=="true")return;function re(S){if(S.detail.variant&&(S.target&&S.target.querySelector(".ecom-product-single__variant-picker-container"),T&&E)){let F=function(u){let n=u.options_with_values,l=[];E.includes(",")?E.split(",").forEach((v,g)=>{n&&n.forEach(function(w){w.name.trim().toLowerCase()===v.trim().toLowerCase()&&(l=l.concat({key:w.name.trim(),value:w.values}))})}):n&&n.forEach(function(s){if(s.name.trim().toLowerCase()===E.toLowerCase()){l=l.concat({key:s.name.trim(),value:s.values});return}});let d=[];return l&&l.forEach(function(s,v){s.value.forEach(g=>{L.option1==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option1.replaceAll(" ","-").toLowerCase()}`),L.option2==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option2.replaceAll(" ","-").toLowerCase()}`),L.option3==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option3.replaceAll(" ","-").toLowerCase()}`)})}),d},de=function(u,n,l,d,s){if(d&&n&&f&&l.length){n.innerHTML="",l.forEach(function(g){let w=g.querySelector("img").alt;if(!w.includes(","))F(f).includes(w.toLowerCase())&&(g.querySelector("img").removeAttribute("loading"),n.appendChild(g));else{w=w.split(","),w=w.map(function(ie){return ie.trim().toLowerCase()});let te=F(f).filter(ie=>w.indexOf(ie)!==-1);(K(te,w)||Q(te,w)&&te.length===ee(w))&&(g.querySelector("img").removeAttribute("loading"),n.appendChild(g))}}),n.style=s,u.prepend(n);const v=e.$el.querySelector(".ecom-product-single__media--thumbs");$&&($.destroy(),v.classList.add("ecom-product-single__init-thumb-hidden")),A()}},K=function(u,n){return u.sort().join()===n.sort().join()},Q=function(u,n){return u.every(d=>n.includes(d))},ee=function(u){const n=new Set;let l=0;for(const d of u){const s=d.indexOf("-",d.indexOf("-")+1),v=d.substring(10,s);n.has(v)||(n.add(v),l++)}return l},ue=function(u){const n=a&&a.querySelector(".ecom-product-single__media--grid_default");if(!n||!u||!f)return;let l=n&&n.querySelectorAll(".ecom-product-single__media--image");l.length&&(E&&T?l.forEach(function(d){d.style.display="none";let s=d.querySelector("img").alt;if(!s.includes(","))F(f).includes(s.toLowerCase())&&(d.style.display="block");else{s=s.split(","),s=s.map(function(g){return g.trim().toLowerCase()});let v=F(f).filter(g=>s.indexOf(g)!==-1);(K(v,s)||Q(v,s)&&v.length===ee(s))&&(d.style.display="block")}}):l.forEach(function(d){d.style.display="flex"}))},ge=function(u){if(u&&c&&f){c.innerHTML="";let n=[];H.forEach(function(l,d){let s=l.querySelector("img").alt;if(!s.includes(","))F(f).includes(s.toLowerCase())&&n.push(l);else{s=s.split(","),s=s.map(function(g){return g.trim().toLowerCase()});let v=F(f).filter(g=>s.indexOf(g)!==-1);(K(v,s)||Q(v,s)&&v.length===ee(s))&&n.push(l)}}),n.forEach(function(l,d){d==0||d>=5&&d%5==0||d%5!=0&&(d+1)%2==0&&d==n.length-1||d==1&&n.length==2?l.style.paddingTop=`${l.dataset.fullWidth}%`:l.style.paddingTop=`${l.dataset.halfWidth}%`,c.appendChild(l)})}},L=S.detail.variant;i&&window.Shopify&&window.Shopify.routes.root!="/"&&(L=f.variants.find(function(u){if(u.id==a.querySelector("[name=id]").value)return u}));const pe=k&&k.style,_e=m&&m.style;if(de(r,m,b,L,_e),de(h,k,y,L,pe),ue(L),ge(L),q){let u=t.querySelectorAll(".ecom-image-zoom");if(u.length==0)return;X(u),i&&u.forEach(function(n){n.querySelector("a")&&n.querySelector("a").addEventListener("click",function(l){l.preventDefault()})})}}}U&&ce==="false"&&(re(U),a&&a.addEventListener("ecomVariantChange",re))}if(T&&R(),t.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(o){o.addEventListener("click",function(m){this.style.display="none",this.parentNode.querySelector("video").play()})}),!this.isLive)try{e.$el.querySelectorAll("model-viewer").forEach(function(o){const m=element.outerHTML;o.replaceWith(m)})}catch(o){console.info(o.message)}function z(o){if(o)return;const m=t.querySelectorAll("model-viewer");m&&m.forEach(b=>{if(b)try{new window.Shopify.ModelViewerUI(b)}catch(r){console.warn(r.message)}}),t.querySelectorAll("button").forEach(function(b){b.setAttribute("type","button")})}function Z(){if(!window.ShopifyXR)document.addEventListener("shopify_xr_initialized",function(){Z()});else{try{const o=e.$el.querySelector('[id^="Product-model-"]');o&&(window.ShopifyXR.addModels(JSON.parse(o.textContent)),o.remove())}catch(o){console.log(o.message)}window.ShopifyXR.setupXRElements()}}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let o=document.createElement("link");o.id="ModelViewerStyle",o.rel="stylesheet",o.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",o.media="print",o.onload=function(){this.media="all"},document.head.appendChild(o)}if(window.Shopify&&window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:Z},{name:"model-viewer-ui",version:"1.0",onLoad:z}]),this.settings.image_action&&this.settings.image_action==="lightbox"&&i){let o=this.$el.querySelectorAll("[ecom-modal]");o.length&&window.EComModal&&new window.EComModal(o,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}if(this.settings.position_sticky&&window.innerWidth>1024&&t.parentElement&&(this.isLive?t.style.height="100%":t.parentElement.style.height="100%"),q){let o=t.querySelectorAll(".ecom-image-zoom");if(o.length==0)return;P!=="slider"&&X(o),i&&o.forEach(function(m){m.querySelector("a")&&m.querySelector("a").addEventListener("click",function(b){b.preventDefault()})})}function X(o){if(!(!i||window.innerWidth<768)&&window.EcomImgZoom)if(o.length>0)for(var m=0,b=o.length;m<b;m++)new window.EcomImgZoom(o[m],_);else new window.EcomImgZoom(o,_)}

                    });
                    
                        document.querySelectorAll('.ecom-728l2n52d5c').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-728l2n52d5c', settings: {"zoom_width":"500px","zoom_height":"500px","show_thumbnails":true,"layout":"slider","enable_zoom":false,"thumbnail_position":"row-reverse","thumbnail_position__tablet":"column","thumbnail_position__mobile":"column","show_pagination":false,"image_action":"nothing"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-57g0fji0j1e"]=  window.__ectimmers["ecom-57g0fji0j1e"] || {};
const a=this.$el;if(!a)return;const d=this.isLive,g=this.settings.show_option_selected?this.settings.show_option_selected:!1,y=this.settings.history_state?this.settings.history_state:!1,v=this.settings.auto_variant_disable,h=this.settings.hide_soldout_variant,u=a.querySelector('[name="id"]'),c=a.closest(".ecom-product-form--single");if(!c)return;v&&c.classList.add("ecom_auto_variant_disable");const m=a.querySelector(".ecom-product-single__variant-picker-container");let b=null;if(!u)return;const q=this.$el.querySelector("#"+u.dataset.jsonProduct);if(!q)return;let x=null;try{x=JSON.parse(q.innerHTML)}catch(e){return}function C(e){const t=c.querySelector(".ecom-product-single__price--badges");if(t&&t.querySelectorAll("span").forEach(function(o){o.style.display="none"}),e)if(e.available&&e.price<e.compare_at_price){if(t&&t.querySelector(".ecom-product-single__price--badges-sale")){const o=t.querySelector(".ecom-product-single__price--badges-sale");o.style.display="block";let i=0;i=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),o.dataset.type==="amount"&&(i=window.EComposer.formatMoney(e.compare_at_price-e.price));let s=o.dataset.text;s=s.replace(/\{.*\}/g,i),o.innerHTML=s}}else e.available||t&&(t.querySelector(".ecom-product-single__price--badges-sold-out").style.display="block")}function M(e){const t=c.querySelector(".ecom-product-single__quantity-input"),o=t&&t.dataset.minValue?parseInt(t.dataset.minValue):"",i=t&&t.dataset.maxValue?parseInt(t.dataset.maxValue):"";if(t){if(e)e.available?((!t.value||o&&o>0&&t.value<o)&&(t.value=o),t.removeAttribute("disabled","disabled")):(o&&o>0&&(t.value=o),t.setAttribute("disabled","disabled"));else{t.value=o&&o>0?o:1,t.setAttribute("disabled","disabled");return}const s=e.inventory_quantity,l=e.inventory_policy;let n=i&&i>0?i:9999;e.inventory_management&&l==="deny"&&(n=i&&i>0&&i<s?i:s,(s<o||!t.value||o&&o>0&&t.value<o)&&(t.value=o)),s<1&&l=="continue"&&((!t.value||o&&o>0&&t.value<o)&&(t.value=o),n=i&&i>0?i:999999),(e&&s&&s>o||e&&l=="continue")&&(e.inventory_management&&l==="deny"?n=i&&i>0&&i<s?i:s:e.inventory_management&&l==="continue"&&(n=i&&i>0?i:999999),t.value<o&&(t.value=o)),n<0&&(n=0);let p=parseInt(t.value);!o&&p>n&&(p=n),p=isNaN(p)||!p?1:p,!o&&!e.available&&(p=0),p=p>=0?p:1,t.value=p,t.setAttribute("max",n)}}function A(e){const t=c.querySelectorAll(".ecom-product-single__media--slider");if(t.length&&e)t.forEach(function(o){var p,r;const i=o.querySelector(".ecom-product-single__media--featured"),s=i.querySelector('.ecom-product-single__media--image[data-variant_id*="'+e.id+'"]');if(!s||i.getAttribute("data-priority")==="featured")return;const l=s.dataset.index,n=(r=(p=i==null?void 0:i.swiper)==null?void 0:p.realIndex)!=null?r:0;l!=n&&i&&i.swiper&&i.swiper.slideTo(l,200)});else if(e&&e.featured_image){const o=c.querySelector(".ecom-product-single__media--single");o&&o.querySelector("img").setAttribute("src",e.featured_image.src)}}function T(e){const t=c.querySelectorAll(".ecom-product-single__add-to-cart--submit");t.length&&t.forEach(function(o){if(c.classList.contains("ecom_auto_variant_disable")&&v)o.setAttribute("disabled","disabled");else if(e)e.available?(o.removeAttribute("disabled"),o.querySelector(".ecom-add-to-cart-text")&&(!e.inventory_management||e.inventory_management&&e.inventory_quantity>0?(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textAddCart,o.classList.remove("ecom-product-single__pre-order")):e.inventory_quantity<=0&&e.inventory_policy=="continue"&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textPreOrder,o.classList.add("ecom-product-single__pre-order")))):(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")&&(o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textOutstock,o.classList.remove("ecom-product-single__pre-order")));else if(o.setAttribute("disabled","disabled"),o.querySelector(".ecom-add-to-cart-text")){let i=!1;m.querySelectorAll(".single-option-selector").forEach(function(s){if(s.value===""){i=!0;return}}),i?o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textAddCart:o.querySelector(".ecom-add-to-cart-text").innerHTML=o.dataset.textUnavailable}})}function H(e){if(!(c.classList.contains("ecom_auto_variant_disable")&&v)&&e&&e.options.length)for(let t=0;t<e.options.length;t++)c.querySelectorAll(`.ecom-product-single__swatch-item[data-option-index="${t}"][data-value="${e.options[t].replace(/'/g,"'").replace(/"/g,'\\"')}"]`).forEach(o=>{o.parentNode.childNodes.forEach(function(i){i.classList&&(i.classList.remove("ecom-box-active"),i.classList.remove("ecom-button-active"),i.classList.remove("ecom-image-active"))}),o.classList.add("ecom-box-active"),o.classList.add("ecom-button-active"),o.classList.add("ecom-image-active")}),c.querySelectorAll(`select.ecom-product-single__swatch-select[data-option-index="${t}"]`).forEach(function(o){o.value=e.options[t]})}function I(e){const t=c.querySelector(".ecom-product-single__countdown");t&&e&&(d||(t.firstElementChild.style.display=""),t.dataset.showOnSale==="true"?e.compare_at_price>e.price&&e.available?(t.style.display="inherit",t.classList.remove("ecom-placeholder-on-builder-mode")):(d&&(t.style.display="none"),t.classList.add("ecom-placeholder-on-builder-mode"),t.classList.add("ecom-force-show"),t.dataset.ecomPlaceholder="This feature not match with your condition",d||(t.firstElementChild.style.display="none")):(t.classList.remove("ecom-placeholder-on-builder-mode"),t.style.display="inherit"))}function z(e){const t=c.querySelectorAll(".ecom-product-single__media-label");e&&t.length&&t.forEach(function(o){const i=o.querySelector("span.ecom-product-single__media-label-sale");i&&(i.style.display=e.available&&e.compare_at_price&&e.compare_at_price>e.price?"block":"none");const s=o.querySelector(".ecom-product-single__media-label-sold-out");s&&(s.style.display=e.available?"none":"block");const l=o.querySelector(".ecom-product-single__media-label--bage-sale");if(l){const n=l.dataset.labelType;if(e.compare_at_price>e.price){let p=l.dataset.sale,r="";n==="amount"?(r=e.compare_at_price-e.price,l.style.display="inherit",l.innerHTML=p.replace(/\[.*\]/g,window.EComposer.formatMoney(r))):(r=Math.round((e.compare_at_price-e.price)*100/e.compare_at_price),l.style.display="inherit",l.innerHTML=p.replace(/\[.*\]/g,Math.floor(r))),l.style.display=e.available?"inherit":"none"}else l.style.display="none"}})}function N(e){const t=c.querySelectorAll(".ecom-product-single__price--regular"),o=c.querySelectorAll(".ecom-product-single__price--sale"),i=c.querySelectorAll(".ecom-product-single__price--badges-pecent-wrapper"),s=c.querySelectorAll(".ecom-product_ground-price"),l=c.querySelector(".ecom-unit-price"),n=c.querySelectorAll(".ecom-ground-price_unit-price-measurement");e&&(c.querySelector("shopify-payment-terms")&&c.querySelector("shopify-payment-terms").setAttribute("variant-id",e.id),o.length&&p(o,e),i.length&&i.forEach(function(r){const _=r.dataset.labelType;if(e.compare_at_price&&e.compare_at_price>e.price){let f=Math.round((e.compare_at_price-e.price)/e.compare_at_price*100);_==="amount"&&(f=window.EComposer.formatMoney(e.compare_at_price-e.price)),r.querySelector("span")&&(r.style.display="block",r.querySelector("span").innerText=`-${f}%`)}else r.style.display="none"}),t.length&&t.forEach(function(r){r.innerHTML=window.EComposer.formatMoney(e.compare_at_price),e.compare_at_price>e.price?r.style.display="inherit":r.style.display="none"}),s.length&&(s.forEach(function(r){e.unit_price?(r.style.display="block",l&&(l.style.display="block")):(r.style.display="none",l&&(l.style.display="none"));const _=r.querySelector(".ecom-ground-price_unit-price");_&&(_.innerHTML=window.EComposer.formatMoney(e.unit_price))}),n.length&&n.forEach(function(r){e.unit_price_measurement.reference_value!=1?r.innerHTML=e.unit_price_measurement.reference_value+e.unit_price_measurement.reference_unit:r.innerHTML=e.unit_price_measurement.reference_unit})));function p(r,_){r.forEach(function(f){!_.compare_at_price||_.compare_at_price<_.price?f.classList.add("ecom-product-single__price-normal"):f.classList.remove("ecom-product-single__price-normal"),f.innerHTML=window.EComposer.formatMoney(_.price)})}}function j(e){const t=c.querySelector(".ecom-product-single__variant-attributes--barcode"),o=c.querySelector(".ecom-product-single__variant-attributes--sku");e?(t&&(t.style.removeProperty("display"),t.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.barcode?e.barcode:"N/A"}`),o&&(o.style.removeProperty("display"),o.querySelector(".ecom-product-single__variant-attributes--text").innerHTML=`${e.sku?e.sku:"N/A"}`)):(t&&(t.style.display="none"),o&&(o.style.display="none"))}function O(e){const t=a.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');if(t.length>0&&t.forEach(s=>{const l=s.textContent;s.childNodes.length&&s.childNodes[0].remove();const n=document.createElement("span");n.className="ecom-product-variant--option-label-text",n.innerText=`${l}${l.endsWith(":")?"":":"}`,s.prepend(n)}),!m||!e)return!1;if(u.dispatchEvent(new Event("change")),m.querySelectorAll(".ecom-product-single__variant-picker--selected-value").forEach(function(s){s.remove()}),v&&c.classList.contains("ecom_auto_variant_disable")&&(c.classList.remove("ecom_auto_variant_disable"),c.querySelectorAll(".ecom-product-single__add-to-cart--submit").forEach(function(s){s.removeAttribute("disabled")})),!g)return 1;const o=e.options.length,i=m.querySelectorAll(".selector-wrapper");for(let s=0;s<o;s++)i[s]&&i[s].querySelectorAll("label").forEach(l=>{const n=document.createElement("span");n.className="ecom-product-single__variant-picker--selected-value",n.innerHTML=e.options[s],l.appendChild(n)}),m.querySelectorAll(`.ecom-product-single__picker--option-label[data-option-index="${s}"]`).forEach(function(l){let n=document.createElement("span");n.classList.add("ecom-product-single__variant-picker--selected-value"),n.innerHTML=e.options[s],l.appendChild(n)})}function $(e){C(e),A(e),T(e),M(e),H(e),N(e),I(e),j(e),O(e),z(e);const t=new CustomEvent("ecomVariantChange",{detail:{variant:e}});c.dispatchEvent(t)}if((!u||!u.classList.contains("ecom-product-single__picker-default-variant"))&&window.EComposer&&window.EComposer.OptionSelectors){let e=function(){const o=t.product.getVariantById(u.value);o&&$(o)};const t=new window.EComposer.OptionSelectors(u.id,{product:x,onVariantSelected:$,enableHistoryState:y,autoVariantDisabled:v});if(u.addEventListener("swatch",function(o){t.selectVariant(o.target.value)}),u.addEventListener("ecomUpdate",function(){clearTimeout(b),b=setTimeout(e,1e3)}),EComposer.optionsMap={},EComposer.updateOptionsInSelector=function(o){switch(o){case 0:var i="root",s=m.querySelectorAll(".single-option-selector")[0];break;case 1:var i=m.querySelectorAll(".single-option-selector")[0].value,s=m.querySelectorAll(".single-option-selector")[1];break;case 2:var i=m.querySelectorAll(".single-option-selector")[0].value;i+=" / "+m.querySelectorAll(".single-option-selector")[1].value;var s=m.querySelectorAll(".single-option-selector")[2];break}if(!!s){var l=s.value;s.innerHTML="";var n=EComposer.optionsMap[i]||[];if(!!n){for(var p=0;p<n.length;p++){var r=n[p],_=document.createElement("option");_.value=r,_.innerHTML=r,s.append(_)}var f=c.querySelector('.ecom-product-single__swatch-select[data-option-index="'+o+'"]');f&&(f.innerHTML=s.innerHTML),c.querySelectorAll('.ecom-product-single__swatch-item[data-option-index="'+o+'"]').forEach(S=>{var E=S.dataset.value;E&&n.indexOf(E)!==-1?S.classList.remove("ecom-variant-disable"):S.classList.add("ecom-variant-disable")}),n.indexOf(l)!==-1&&(s.value=l),s.dispatchEvent(new Event("change"))}}},EComposer.linkOptionSelectors=function(o){for(var i=0;i<o.variants.length;i++){var s=o.variants[i];if(h?s.available:!0){if(EComposer.optionsMap.root=EComposer.optionsMap.root||[],EComposer.optionsMap.root.push(s.option1),EComposer.optionsMap.root=EComposer.uniq(EComposer.optionsMap.root),o.options.length>1){var l=s.option1;EComposer.optionsMap[l]=EComposer.optionsMap[l]||[],EComposer.optionsMap[l].push(s.option2),EComposer.optionsMap[l]=EComposer.uniq(EComposer.optionsMap[l])}if(o.options.length===3){var l=s.option1+" / "+s.option2;EComposer.optionsMap[l]=EComposer.optionsMap[l]||[],EComposer.optionsMap[l].push(s.option3),EComposer.optionsMap[l]=EComposer.uniq(EComposer.optionsMap[l])}}}EComposer.updateOptionsInSelector(0),o.options.length>1&&EComposer.updateOptionsInSelector(1),o.options.length===3&&EComposer.updateOptionsInSelector(2);var n=m.querySelectorAll(".single-option-selector")[0];n&&n.addEventListener("change",function(r){return o.options.length>1&&EComposer.updateOptionsInSelector(1),o.options.length===3&&EComposer.updateOptionsInSelector(2),!0});var p=m.querySelectorAll(".single-option-selector")[1];p&&p.addEventListener("change",function(r){return o.options.length===3&&EComposer.updateOptionsInSelector(2),!0})},window.MutationObserver&&c&&this.settings.hasOwnProperty("hide_unavaiable_variant")&&(this.settings.hide_unavaiable_variant||this.settings.hide_soldout_variant)){typeof w=="object"&&typeof w.disconnect=="function"&&w.disconnect();var B={childList:!0,subtree:!0},w=new MutationObserver(function(){EComposer.linkOptionSelectors(x),w.disconnect()});w.observe(c,B)}}if(!this.settings.hasOwnProperty("show_option_selected")&&!this.settings.show_option_selected){const e=a.querySelectorAll('.selector-wrapper label[for*="ecom-variant-selector"');e.length>0&&e.forEach(t=>{const o=t.textContent;t.childNodes.length&&t.childNodes[0].remove();const i=document.createElement("span");i.className="ecom-product-variant--option-label-text",i.innerText=`${o}:`,t.prepend(i)})}c.querySelectorAll(".ecom-product-single__swatch-item[data-option-index]").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=c.querySelectorAll(".ecom-product-single__media--featured");let i=null;if(!o)return;o.length>1?o.forEach(function(n,p){i||(d?(window.screen.width>1024&&!n.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!n.closest(".hide-on-tablet")||window.screen.width<=767&&!n.closest(".hide-on-mobile"))&&(i=n):(window.innerWidth>1024&&!n.closest(".hide-on-desktop")||window.innerWidth>767&&window.innerWidth<=1024&&!n.closest(".hide-on-tablet")||window.innerWidth<=767&&!n.closest(".hide-on-mobile"))&&(i=n))}):i=o[0],i&&i.removeAttribute("data-priority");const s=this;if(this.classList.contains("ecom-button-active")&&this.classList.contains("ecom-image-button"))return;this.parentNode.childNodes.forEach(function(n){n.classList&&(n.classList.remove("ecom-button-active"),n.classList.remove("ecom-image-button"))}),this.classList.add("ecom-button-active"),this.classList.add("ecom-image-button");const l=this.dataset.optionIndex;c.classList.remove("ecom_auto_variant_disable"),c.querySelectorAll("select#"+u.id+"-option-"+l).forEach(function(n){n.value=s.dataset.value,n.dispatchEvent(new Event("change"))})})}),c.querySelectorAll(".ecom-product-single__swatch-select").length?c.querySelectorAll(".ecom-product-single__swatch-select").forEach(function(e){e.addEventListener("change",function(t){const o=c.querySelectorAll(".ecom-product-single__media--featured");let i=null;if(!o)return;o.length>1?o.forEach(function(n,p){i||(window.screen.width>1024&&!n.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!n.closest(".hide-on-tablet")||window.screen.width<=767&&!n.closest(".hide-on-mobile"))&&(i=n)}):i=o[0],i&&i.removeAttribute("data-priority");let s=t.target.getAttribute("data-option-index"),l=t.target.value;c.classList.remove("ecom_auto_variant_disable"),c.querySelectorAll("select#"+u.id+"-option-"+s).forEach(function(n){n.value=l,n.dispatchEvent(new Event("change"))})})}):setTimeout(function(){const e=c.querySelectorAll(".ecom-product-single__media--featured");let t=null;!e||(e.length>1?e.forEach(function(o,i){t||(window.screen.width>1024&&!o.closest(".hide-on-desktop")||window.screen.width>767&&window.screen.width<=1024&&!o.closest(".hide-on-tablet")||window.screen.width<=767&&!o.closest(".hide-on-mobile"))&&(t=o)}):t=e[0],t&&t.removeAttribute("data-priority"))},d?500:2500)

                    });
                    
                        document.querySelectorAll('.ecom-57g0fji0j1e').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-57g0fji0j1e', settings: {"show_option_selected":true},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}