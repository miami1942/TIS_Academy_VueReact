
"use strict";


//컴포넌트 정의
var BlogComponentHeader={  //html연결시 ``로 감싼다.
    //props:['title', 'message'],  //부모가 전달한 속성을 명시적으로 기술한다.
    template:`
    <header id="main-header">
        <hgroup>
            <h1 class="master-title">HTML5 Example Preview</h1>
            <h2 class="master-description">한빛아카데미</h2>
        </hgroup>
    </header>
    `,
    data : function() {
        return {

        };
    },
    methods:{
    },
};
var BlogComponentNavigation={  //html연결시 ``로 감싼다.
    //props:['title', 'message'],  //부모가 전달한 속성을 명시적으로 기술한다.
    template:`
    <nav id="main-navigation">
        <div class="pull-left">
            <ul class="outer-menu">
                <li class="outer-menu-item">
                    <span class="menu-title">HTML5</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                    </ul>
                </li>
                <li class="outer-menu-item">
                    <span class="menu-title">CSS3</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                    </ul>
                </li>
                <li class="outer-menu-item">
                    <span class="menu-title">JavaScript</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="pull-right">
            <div class="search-bar">
                <form>
                    <input type="text" class="input-search" />
                    <input type="submit" class="input-search-submit" value="검색" />
                </form>
            </div>
        </div>
    </nav>
    `,
    data : function() {
        return {

        };
    },
    methods:{
    },
};
var BlogComponentFooter={  //html연결시 ``로 감싼다.
    //props:['title', 'message'],  //부모가 전달한 속성을 명시적으로 기술한다.
    template:`
    <footer id="main-footer">
        <a href="#">Created By Team-HeXagon</a>
    </footer>
    `,
    data : function() {
        return {

        };
    },
    methods:{
    },
};
var BlogComponentContentSection={  //html연결시 ``로 감싼다.
    //props:['title', 'message'],  //부모가 전달한 속성을 명시적으로 기술한다.
    template:`
    `,
    data : function() {
        return {

        };
    },
    methods:{
    },
};
var BlogComponentContentAside={  //html연결시 ``로 감싼다.
    //props:['title', 'message'],  //부모가 전달한 속성을 명시적으로 기술한다.
    template:`
    `,
    data : function() {
        return {

        };
    },
    methods:{
    },
};
//전역 컴포넌트로 등록
// => 컴포넌트 이름은 2단어 이상으로 한다(※필수)
// => 컴포넌트 이름은 케밥 표기법 사용(-으로 연결). 왜냐하면 태그명은 대소문자 구분이 없기 때문.
Vue.component('blog-component-header', BlogComponentHeader);
Vue.component('blog-component-navigation', BlogComponentNavigation);
Vue.component('blog-component-footer', BlogComponentFooter);
Vue.component('blog-component-content-section', BlogComponentContentSection);
Vue.component('blog-component-content-aside', BlogComponentContentAside);