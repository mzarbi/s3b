<template>
    <div class="title-container">
        <div class="title-icon-container">
            <span class="indicator" :style="{ backgroundColor: statusColor }"></span>
        </div>
        <div class="title-div">
            <h5>
                {{title}}
            </h5>
            <p class="description-p">
          <span style="">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                 y="0px"
                 viewBox="0 0 511.6 511.6" style="enable-background:new 0 0 511.6 511.6;" xml:space="preserve" width="20"
                 height="20">
               <polygon style="fill:#656D78;" points="484.293,498.142 357.112,511.6 304.418,13.45 431.6,0 "/>
               <path style="fill:#F5F7FA;" d="M431.803,407.244c1.249,11.709-7.244,22.201-18.954,23.435c-11.694,1.233-22.201-7.244-23.435-18.954
                  c-1.233-11.709,7.244-22.201,18.954-23.435C420.078,387.041,430.57,395.534,431.803,407.244z"/>
               <rect x="354.516" y="37.739" transform="matrix(-0.9945 0.1052 -0.1052 -0.9945 789.9365 321.555)" style="fill:#48CFAD;"
                     width="63.943" height="287.745"/>
               <rect x="176.52" y="10.679" style="fill:#656D78;" width="127.9" height="500.92"/>
               <path style="fill:#F5F7FA;" d="M261.779,415.675c0,11.772-9.539,21.327-21.312,21.327c-11.771,0-21.327-9.555-21.327-21.327
                  c0-11.771,9.556-21.312,21.327-21.312C252.24,394.363,261.779,403.904,261.779,415.675z"/>
               <rect x="208.49" y="42.647" style="fill:#FFCE54;" width="63.95" height="287.77"/>
               <rect x="27.307" y="10.679" style="fill:#656D78;" width="127.9" height="500.92"/>
               <path style="fill:#F5F7FA;" d="M112.569,415.675c0,11.772-9.54,21.327-21.312,21.327s-21.327-9.555-21.327-21.327
                  c0-11.771,9.555-21.312,21.327-21.312S112.569,403.904,112.569,415.675z"/>
               <rect x="59.28" y="42.647" style="fill:#A0D468;" width="63.95" height="287.77"/>
            </svg>

          </span> {{status}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleContainer",
        props: {
            title:{
                type: String,
                required: true,
            },
            status:{
                type: String,
                required: true,
            },
            statusColor:{
                type: String,
                required: true,
            },
        },
    }
</script>

<style scoped>

    .title-container {
        --clr-el-01db: #141424;
        --shd-el-01dp: 0 1px 2px #0000003d, 0 1px 3px #0000001f;
        --shd-el-03dp: 0 3px 6px #0000001a, 0 10px 20px #00000026;
        --clr-txt-100: #ffffffc7;
        --font-sm: 1rem;
        --br-lg: 0.5rem;
        list-style: none;
        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-size: var(--font-sm);
        font-weight: 350;
        font-feature-settings: "frac", "cv05", "cv11", "calt", "kern";
        box-shadow: var(--shd-el-01dp);
        background: var(--clr-el-01dp);
        color: var(--clr-txt-100);
        display: grid;
        border-radius: var(--br-lg);
        position: relative;
        margin: 1.75rem 0rem 1rem;
        padding: 2rem 1.5rem;
        overflow: hidden;
        grid-template-rows: auto auto;
        grid-template-columns: 64px auto;
        content-visibility: auto;
        contain-intrinsic-size: 144px;
    }

    .title-icon-container {
        --font-sm: 1rem;
        --s-1: 0.25rem;
        --br-round: 1000rem;
        list-style: none;
        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-size: var(--font-sm);
        font-weight: 350;
        font-feature-settings: "frac", "cv05", "cv11", "calt", "kern";
        display: inline-block;
        position: relative;
        margin-top: var(--s-1);
        border-radius: var(--br-round);
        background: #3f4de4;
        color: #fff;
        width: 3.25rem;
        height: 3.25rem;
    }

    .title-icon-container:before {
        position: absolute;
        top: 1rem;
        left: 1rem;
        content: "٭";
        font-size: 36px;
        font-family: icons !important;
        font-style: normal;
        font-weight: 400 !important;
        -webkit-font-feature-settings: normal;
        -moz-font-feature-settings: normal;
        font-feature-settings: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }

    .indicator {
        --br-round: 1000rem;
        --clr-el-01db: #141424;
        list-style: none;
        color: #fff;
        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-weight: 350;
        transition: all .3s ease;
        font-size: 1em;
        font-feature-settings: "frac", "cv05", "cv11", "calt", "kern";
        box-sizing: border-box;
        border-radius: var(--br-round);
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: #ee423f;
        border: 1px solid var(--clr-el-01db);
        top: 0;
        right: 0;
    }

    .title-div {
        --clr-txt-100: #ffffffc7;
        --font-sm: 1rem;
        --s-0: 0;
        --s-2: 0.5rem;
        list-style: none;
        color: var(--clr-txt-100);
        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-size: var(--font-sm);
        font-weight: 350;
        font-feature-settings: "frac", "cv05", "cv11", "calt", "kern";
        margin-top: var(--s-0);
        margin-bottom: var(--s-0);
        margin-left: var(--s-2);
        margin-right: var(--s-2);
    }

    .title-h3 {
        --clr-txt-200: #344767;
        --font-xl: 1.5rem;
        --s-0: 0;
        list-style: none;
        -webkit-text-size-adjust: 100%;
        color: var(--clr-txt-200);
        font-size: var(--font-xl);
        font-family: Raleway, Helvetica, sans-serif;
        letter-spacing: .25px;
        font-feature-settings: "ss02", "lnum", "kern";
        overflow: hidden;
        text-overflow: ellipsis;
        margin: var(--s-0);
        font-weight: 500;
        line-height: 2rem;
    }

    .description-p {
        --clr-txt-050: #344767;
        --font-xs: 0.875rem;
        --s-0: 0;
        list-style: none;
        font-family: Inter, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-weight: 350;
        font-feature-settings: "frac", "cv05", "cv11", "calt", "kern";
        color: var(--clr-txt-050);
        font-size: var(--font-xs);
        display: inline-block;
        margin: var(--s-0);
    }
</style>