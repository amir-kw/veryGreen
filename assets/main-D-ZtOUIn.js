import"./output-0UeiVCco.js";async function e(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).menu?.map(e=>`<li class ="${e.src?`dd-sub1`:``}>
            <a href="${e.href}">${e.src?`<img src="${e.src}"></img> alt = "logo"`:e.title}</a>
        </li>
        `),document.querySelector(`#db-menu>ul`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function t(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).mobileMenu?.map(e=>`
        <a class="menu__item" href="${e.href}">${e.title}</a><br>`),document.querySelector(`.menu__box`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function n(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).stSlider?.map(e=>`
        <div class="swiper-slide"><div class="d-s-box"><img src="${e.src}" alt="" class="img-s"><span class="s-desc">${e.title}</span><span class="s-price">${e.price}</span></div></div>`),document.querySelector(`#swiper-wrapper-one`).insertAdjacentHTML(`beforeend`,e.join(` `)),console.log(e)}async function r(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).midBody?.map(e=>`
        <a href="#"><img src="${e.src}" alt="#" class="img-a"></a>`),document.querySelector(`.d-mid`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function i(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).ndSlider?.map(e=>`
        <div class="swiper-slide"><div class="d-s-box"><img src="${e.src}" alt="${e.alt}" class="img-s"><span class="s-desc">${e.title}</span><span class="s-price line-through text-[10px] text-[#B3B2B3] ">${e.price.old}</span><span class="text-[12px]">${e.price.current}تومان</span></div></div>`),document.querySelector(`#swiper-wrapper-two`).insertAdjacentHTML(`beforeend`,e.join(``))}async function a(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).grades?.map(e=>`
        <a href="${e.href}">${e.title}</a>`),document.querySelector(`.d-links`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function o(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).midImgs?.map(e=>`
        <img src="${e.src}" alt="${e.alt}" class="img-mid">`),document.querySelector(`.d-mid2`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function s(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).rdSlider?.map(e=>`
        <div class="swiper-slide"><div class="d-s-box"><img src="${e.src}" alt="${e.alt}" class="img-s"><span class="s-desc">${e.title}</span><span class="s-price">${e.price} تومان</span></div></div>`),document.querySelector(`#swiper-wrapper-three`).insertAdjacentHTML(`beforeend`,e.join(``))}async function c(){let e=await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json(),t=e.footer.find(e=>e.type===`mainLogo`),n=e.footer.find(e=>e.type===`about`),r=e.footer.find(e=>e.type===`section1`),i=e.footer.find(e=>e.type===`section2`),a=e.footer.find(e=>e.type===`logos`),o=e.footer.find(e=>e.type===`copyright`),s=`

        <img src="${t.src}" alt="${t.alt}" class="px-[50px]">

        <div class="d-footer">

            <div class="d-f1">

                <h3 class="font-semibold px-[40px] mt-[20px]">
                    ${n.title}
                </h3>
                <br>
                <p>
                    ${n.description}
                </p>

                <img src="${n.src}" alt="${n.alt}">

            </div>
            <div class="d-f2">

                <ul>

                    <li class="text-[19px] font-semibold">
                        ${r.title}
                    </li>

                    ${r.links.map(e=>`
                            <li>
                                <a href="${e.href}">
                                    ${e.title}
                                </a>
                            </li>
                        `).join(``)}

                </ul>

                <div style="width: 100%; height: 100px;"></div>

            </div>


            <div class="d-f3">

                <ul>

                    <li class="text-[19px] font-semibold">
                        ${i.title}
                    </li>

                    ${i.links.map(e=>`
                            <li>
                                <a href="${e.href}">
                                    ${e.title}
                                </a>
                            </li>
                        `).join(``)}

                </ul>


                <div style="width: 100%; height: 100px;">

                    <div class="d-logos">

                        ${a.logos.map(e=>`
                                <a href="${e.href}">
                                    <img src="${e.src}" alt="${e.alt}">
                                </a>
                            `).join(``)}

                    </div>

                </div>

            </div>

        </div>


        <div class="d-end">

            <p>
                ${o.text}
            </p>

        </div>
    `;document.querySelector(`footer`).insertAdjacentHTML(`beforeend`,s)}e(),t(),n(),r(),i(),a(),o(),s(),c();