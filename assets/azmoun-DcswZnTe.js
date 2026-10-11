import"./output-0UeiVCco.js";async function e(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).azMenu?.map(e=>{let t=e.href===`./index.html`?`font-semibold text-green-600 border-b border-green-600`:``;return`
        <li><a href="${e.href}" class=" p-[5px] text-sm ${t}">${e.title}</a></li>`}),document.querySelector(`#az-menu`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function t(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).azBanners?.map(e=>`
        <div class="swiper-slide"><img src="${e.src}" alt="${e.alt}"></div>
        `),document.querySelector(`#azSwiperOne`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function n(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).chandKonkoor?.map(e=>`
        <img src="${e.src}" alt="${e.alt}" class="h-[475px] ml-5 rounded">
        `),document.querySelector(`#chandKonkoor`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function r(){try{let e=await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`);if(!e.ok)throw Error(`دریافت اطلاعات آزمون ناموفق بود`);let t=(await e.json()).azmoonIntro[0],n=document.querySelector(`.azmoon-intro`);if(!n)throw Error(`عنصر .azmoon-intro در HTML پیدا نشد`);if(!t)throw Error(`اطلاعات azmoonIntro در دیتابیس پیدا نشد`);n.innerHTML=`
            <div class="w-[60%] h-full flex justify-center items-center flex-col gap-6">
                <h3 class="font-semibold text-[24px]">
                    ${t.title}
                </h3>

                <p class="w-[60%]">
                    ${t.description}
                    <br><br>

                    <span class="text-xl font-semibold">
                        ${t.onlineExam}
                    </span>
                    <br>

                    <span class="text-xl font-semibold">
                        ${t.inPersonExam}
                    </span>

                    <br><br>

                    ${t.moreText}
                    <br><br><br>

                    <a
                        href="${t.buttonLink}"
                        class="text-white bg-green-600 px-8 py-3 rounded"
                    >
                        ${t.buttonText}
                    </a>
                </p>
            </div>

            <div class="w-[40%] h-full">
                <img
                    src="${t.image}"
                    alt="${t.imageAlt}"
                >
            </div>
        `}catch(e){console.error(`AzmoonIntro API error:`,e)}}async function i(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).azMIdimgs?.map(e=>` 
        <img src="${e.src}" alt="${e.alt}" class="w-[30%] h-[50%]">
        `),document.querySelector(`#azMIdimg`).insertAdjacentHTML(`beforeend`,e.join(` `)),console.log(e)}async function a(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).services?.map(e=>`
            <div class="w-[40%] h-full flex justify-center items-center">
                <div class="w-[90%] h-[50%] rounded border-[2px] border-green-400 flex flex-col">
                    <div class="w-[8px] h-[1px]"></div>

                    <h4 class="font-bold text-base my-2 mr-8 w-auto mt-4">
                        ${e.title}
                    </h4>

                    <span class="mx-8 text-sm">
                        ${e.description}
                        <a href="${e.link}" class="text-sm text-blue-600">
                            ادامه...
                        </a>
                    </span>
                </div>
            </div>
        `),document.querySelector(`#services-container`).insertAdjacentHTML(`beforeend`,e.join(``))}async function o(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).about?.map(e=>`
        <div class="w-[60%] h-full felx justify-center items-center">
            <h1 class="font-bold pr-8 py-1 text-2xl mt-8 items-center">${e.title}</h1>
            <p class="w-[100%] h-[80%] text-sm pr-8 pt-8 leading-7 font-medium">${e.paragraphs}</p>
        </div>
        <div class="w-[40%] h-full ">
            <img src="${e.src}" alt="#">
        </div>`),document.querySelector(`#azAbout`).insertAdjacentHTML(`beforeend`,e.join(``))}async function s(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).azFooterONe?.map(e=>`
        <li><a href="${e.href}">${e.title}</a></li>
        `),document.querySelector(`#azFooterOne`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function c(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).azFooterTwo?.map(e=>`
        <li><a href="${e.href}">${e.title}</a></li>
        `),document.querySelector(`#azFooterTwo`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function l(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).ImgLinks?.map(e=>`
        <span><a href="${e.href}"><img src="${e.src}" alt="#" class="mx-[20px]"></a></span>`),document.querySelector(`#footerImgsLinks`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function u(){let e=``;e=(await(await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`)).json()).onlineExam.map(e=>`
            <div class="w-full flex justify-center flex-row">
                <div class="w-[70%]">

                    <h2 class="text-[#707070] text-base my-3">
                        ${e.title}
                    </h2>

                    <p class="text-[14px] text-[#707070] font-normal leading-7">
                        ${e.paragraph}
                    </p>

                    <details class="p-4">
                        <summary class="cursor-pointer font-normal">
                            بیشتر
                        </summary>

                        ${e.sections.map(e=>`
                                <h2 class="text-[#707070] text-base my-3">
                                    ${e.title}
                                </h2>

                                <p class="text-[14px] text-[#707070] font-normal leading-7">
                                    ${e.paragraph}
                                </p>
                            `).join(``)}

                    </details>

                </div>
            </div>
        `).join(``),document.querySelector(`#onlineExam`).innerHTML=e}async function d(){try{let e=await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`);if(!e.ok)throw Error(`دریافت اطلاعات محصولات ناموفق بود`);let t=(await e.json()).products;if(!Array.isArray(t))throw Error(`آرایه products در db.json پیدا نشد`);let n=document.querySelector(`#products`);if(!n)throw Error(`عنصر #products در HTML پیدا نشد`);n.innerHTML=t.map(e=>`
            <div class="proSwiper-slide">
                <div class="d-s-box relative">

                    <div
                        class="absolute top-0 left-6 bg-contain bg-no-repeat h-[50px] w-[15%] flex justify-center items-center"
                        style="background-image: url('./public/imgs/redmark.svg')"
                    >
                        <span class="text-white text-xs">
                            ${e.year}
                        </span>
                    </div>

                    <img
                        src="${e.image}"
                        alt="${e.title}"
                        class="img-s hover:cursor-pointer"
                    >

                    <div class="flex flex-row">
                        <div class="w-[70%] flex justify-center">
                            <span class="font-bold text-[15px] text-center">
                                ${e.title}
                            </span>
                        </div>

                        <div class="w-[30%] h-full flex justify-center items-center">
                            <span class="text-[10px] text-[#b3b2b3] text-center">
                                ${e.grade}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-row w-full mt-1 justify-end">
                        <span class="pl-4 line-through text-xs text-[#B3B2B3] text-center">
                            ${e.oldPrice}
                        </span>
                    </div>

                    <div class="flex flex-row">
                        <div class="ml-6 h-full w-[50%] flex justify-start items-center pr-3">
                            <img
                                src="./public/imgs/plan-steps.svg"
                                alt=""
                            >

                            <span class="text-xs text-[#b3b2b3]">
                                ${e.steps} مرحله
                            </span>
                        </div>

                        <div class="ml-1 h-full w-[35%] flex justify-end items-center">
                            <span class="font-bold text-[16px]">
                                ${e.price}
                            </span>
                        </div>

                        <div class="h-full w-[15%] flex justify-start items-center">
                            <span class="text-xs text-[#b3b2b3]">
                                ${e.currency}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        `).join(``)}catch(e){console.error(`Products API error:`,e)}}async function f(){try{let e=await fetch(`https://amir-kw.github.io/DB.KheyliSabz/db.json`);if(!e.ok)throw Error(`Failed to fetch productTwo`);let t=await e.json(),n=document.querySelector(`#productTwo`);if(!n)throw Error(`Element #productTwo not found`);n.innerHTML=t.productTwo.map(e=>`
            <div class="proSwiper-slide">
                <div class="d-s-box relative">

                    <div class="absolute top-0 left-6 bg-[url(./public/imgs/redmark.svg)] bg-contain h-[50px] w-[15%] flex justify-center items-center">
                        <span class="text-[#ffff] text-xs">${e.year}</span>
                    </div>

                    <img
                        src="${e.image}"
                        alt="${e.title}"
                        class="img-s hover:cursor-pointer bg-[#E5F3EB]"
                    >

                    <div class="flex flex-row">
                        <div class="w-[70%] flex justify-center">
                            <span class="font-bold text-[15px] text-center">
                                ${e.title}
                            </span>
                        </div>

                        <div class="w-[30%] h-full flex justify-center items-center">
                            <span class="text-[10px] text-[#b3b2b3] text-center">
                                ${e.grade}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-row w-full mt-1 h-full justify-end">
                        <span class="pl-4 line-through text-xs text-[#B3B2B3] text-center">
                            ${e.oldPrice}
                        </span>
                    </div>

                    <div class="flex flex-row">
                        <div class="h-full w-[50%] flex justify-start items-center pr-3 ml-6">
                            <img src="./public/imgs/plan-steps.svg" alt="#">
                            <span class="text-xs text-[#b3b2b3]">
                                ${e.steps}مرحله
                            </span>
                        </div>

                        <div class="h-full w-[35%] flex justify-end items-center ml-1">
                            <span class="font-bold text-[16px]">
                                ${e.price}
                            </span>
                        </div>

                        <div class="h-full w-[15%] flex justify-start items-center">
                            <span class="text-xs text-[#b3b2b3]">
                                ${e.currency}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        `).join(``)}catch(e){console.error(`Error loading productTwo:`,e)}}e(),t(),n(),r(),i(),a(),o(),s(),c(),l(),u(),d(),f();