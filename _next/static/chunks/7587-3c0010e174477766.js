"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7587],{7587:function(n,e,t){t.d(e,{Z:function(){return PostCard_PostCard}});var s=t(5893),a=t(5063),r=t.n(a);t(4155),t(4931);var o=t(2729),l=t(4635);function _templateObject(){let n=(0,o._)(["\n  query AllUsers {\n    users(first: 10000) {\n      edges {\n        node {\n          avatar {\n            height\n            width\n            url\n          }\n          description\n          id\n          name\n          roles {\n            nodes {\n              name\n            }\n          }\n          slug\n        }\n      }\n    }\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,o._)(["\n  query AllUsersSeo {\n    users(first: 10000) {\n      edges {\n        node {\n          id\n          seo {\n            metaDesc\n            metaRobotsNofollow\n            metaRobotsNoindex\n            title\n            social {\n              youTube\n              wikipedia\n              twitter\n              soundCloud\n              pinterest\n              mySpace\n              linkedIn\n              instagram\n              facebook\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject1=function(){return n},n}function posts_templateObject(){let n=(0,o._)(["\n  fragment PostFields on Post {\n    id\n    categories {\n      edges {\n        node {\n          databaseId\n          id\n          name\n          slug\n        }\n      }\n    }\n    databaseId\n    date\n    isSticky\n    postId\n    slug\n    title\n    featuredImage {\n      node {\n        sourceUrl\n      }\n    }\n    tags {\n      edges {\n        node {\n          name\n          slug\n        }\n      }\n    }\n    pageLoader {\n      pageLoader\n    }\n  }\n"]);return posts_templateObject=function(){return n},n}function posts_templateObject1(){let n=(0,o._)(["\n  ","\n  query AllPostsIndex {\n    posts(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n        }\n      }\n    }\n  }\n"]);return posts_templateObject1=function(){return n},n}function _templateObject2(){let n=(0,o._)(["\n  ","\n  query AllPostsArchive {\n    posts(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          author {\n            node {\n              avatar {\n                height\n                url\n                width\n              }\n              id\n              name\n              slug\n            }\n          }\n          excerpt\n        }\n      }\n    }\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,o._)(["\n  ","\n  query AllPosts {\n    posts(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          author {\n            node {\n              avatar {\n                height\n                url\n                width\n              }\n              id\n              name\n              slug\n            }\n          }\n          content\n          excerpt\n          featuredImage {\n            node {\n              altText\n              caption\n              sourceUrl\n              srcSet\n              sizes\n              id\n            }\n          }\n          pageLoader {\n            pageLoader\n          }\n          modified\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){let n=(0,o._)(["\n{\n  posts(where: {onlySticky: true}, first: 1) {\n    edges {\n      node {\n        title\n        content\n        categories {\n          nodes {\n            name\n          }\n        }\n        author {\n          node {\n            name\n            avatar {\n              url\n            }\n          }\n        }\n        date\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n        tags {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]);return _templateObject4=function(){return n},n}function _templateObject5(){let n=(0,o._)(["\n  query PostBySlug($slug: ID!) {\n    post(id: $slug, idType: SLUG) {\n      author {\n        node {\n          avatar {\n            height\n            url\n            width\n          }\n          id\n          name\n          slug\n        }\n      }\n      id\n      categories {\n        edges {\n          node {\n            databaseId\n            id\n            name\n            slug\n          }\n        }\n      }\n      content\n      date\n      excerpt\n      featuredImage {\n        node {\n          altText\n          caption\n          sourceUrl\n          srcSet\n          sizes\n          id\n        }\n      }\n      pageLoader {\n        pageLoader\n      }\n      seo {\n        canonicalUrl\n        description\n        title\n        openGraph {\n          image {\n            url\n          }\n        }\n      }\n      modified\n      databaseId\n      title\n      slug\n      isSticky\n    }\n  }\n"]);return _templateObject5=function(){return n},n}function _templateObject6(){let n=(0,o._)(["\n  ","\n  query PostsByCategoryId($categoryId: Int!) {\n    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n        }\n      }\n    }\n  }\n"]);return _templateObject6=function(){return n},n}function _templateObject7(){let n=(0,o._)(["\n  ","\n  query PostsByCategoryId($categoryId: Int!) {\n    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          author {\n            node {\n              avatar {\n                height\n                url\n                width\n              }\n              id\n              name\n              slug\n            }\n          }\n          excerpt\n        }\n      }\n    }\n  }\n"]);return _templateObject7=function(){return n},n}function _templateObject8(){let n=(0,o._)(["\n  ","\n  query PostsByCategoryId($categoryId: Int!) {\n    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          author {\n            node {\n              avatar {\n                height\n                url\n                width\n              }\n              id\n              name\n              slug\n            }\n          }\n          content\n          excerpt\n          featuredImage {\n            node {\n              altText\n              caption\n              id\n              sizes\n              sourceUrl\n              srcSet\n            }\n          }\n          modified\n        }\n      }\n    }\n  }\n"]);return _templateObject8=function(){return n},n}function _templateObject9(){let n=(0,o._)(["\n  ","\n  query PostByAuthorSlugIndex($slug: String!) {\n    posts(where: { authorName: $slug, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n        }\n      }\n    }\n  }\n"]);return _templateObject9=function(){return n},n}function _templateObject10(){let n=(0,o._)(["\n  ","\n  query PostByAuthorSlugArchive($slug: String!) {\n    posts(where: { authorName: $slug, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          excerpt\n        }\n      }\n    }\n  }\n"]);return _templateObject10=function(){return n},n}function _templateObject11(){let n=(0,o._)(["\n  ","\n  query PostByAuthorSlug($slug: String!) {\n    posts(where: { authorName: $slug, hasPassword: false }) {\n      edges {\n        node {\n          ...PostFields\n          excerpt\n          featuredImage {\n            node {\n              altText\n              caption\n              id\n              sizes\n              sourceUrl\n              srcSet\n            }\n          }\n          modified\n        }\n      }\n    }\n  }\n"]);return _templateObject11=function(){return n},n}function _templateObject12(){let n=(0,o._)(["\n  query PostSEOBySlug($slug: ID!) {\n    post(id: $slug, idType: SLUG) {\n      id\n      seo {\n        canonical\n        metaDesc\n        metaRobotsNofollow\n        metaRobotsNoindex\n        opengraphAuthor\n        opengraphDescription\n        opengraphModifiedTime\n        opengraphPublishedTime\n        opengraphPublisher\n        opengraphTitle\n        opengraphType\n        readingTime\n        title\n        twitterDescription\n        twitterTitle\n        twitterImage {\n          altText\n          sourceUrl\n          mediaDetails {\n            width\n            height\n          }\n        }\n        opengraphImage {\n          altText\n          sourceUrl\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject12=function(){return n},n}function _templateObject13(){let n=(0,o._)(["\n  query PostPerPage {\n    allSettings {\n      readingSettingsPostsPerPage\n    }\n  }\n"]);return _templateObject13=function(){return n},n}function _templateObject14(){let n=(0,o._)(["\n  query PostDetails($slug: ID!) {\n    post(id: $slug, idType: SLUG) {\n      title\n      content\n      date\n      slug\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      categories {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      tags {\n        edges {\n          node {\n            name\n            slug\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject14=function(){return n},n}function _templateObject15(){let n=(0,o._)(["\n  query AllPostSlugs {\n    posts(first: 10000) {\n      edges {\n        node {\n          slug\n        }\n      }\n    }\n  }\n"]);return _templateObject15=function(){return n},n}function _templateObject16(){let n=(0,o._)(["\n  query postsforHomePage {\n    posts(first: 3) {\n      nodes {\n        categories {\n          nodes {\n            name\n            slug\n          }\n        }\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n        slug\n        title\n      }\n    }\n  }\n"]);return _templateObject16=function(){return n},n}function _templateObject17(){let n=(0,o._)(["\n  query postsWithCategoryName($categoryName: String!) {\n    posts(first: 3, where: { categoryName: $categoryName }) {\n      edges {\n        node {\n          title\n          slug\n          content\n          author {\n            node {\n              name\n              avatar {\n                url\n              }\n            }\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          date\n          categories {\n            edges {\n              node {\n                name\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject17=function(){return n},n}(0,l.Ps)(_templateObject()),(0,l.Ps)(_templateObject1()),t(4155);let i=(0,l.Ps)(posts_templateObject());(0,l.Ps)(posts_templateObject1(),i),(0,l.Ps)(_templateObject2(),i),(0,l.Ps)(_templateObject3(),i),(0,l.Ps)(_templateObject4()),(0,l.Ps)(_templateObject5()),(0,l.Ps)(_templateObject6(),i),(0,l.Ps)(_templateObject7(),i),(0,l.Ps)(_templateObject8(),i),(0,l.Ps)(_templateObject9(),i),(0,l.Ps)(_templateObject10(),i),(0,l.Ps)(_templateObject11(),i),(0,l.Ps)(_templateObject12()),(0,l.Ps)(_templateObject13()),(0,l.Ps)(_templateObject14()),(0,l.Ps)(_templateObject15()),(0,l.Ps)(_templateObject16()),(0,l.Ps)(_templateObject17()),t(4155);var u=t(5675),d=t.n(u),c=t(990);let handleHover=n=>{c.ZP.to(n.target,{duration:.5,scale:1.1,ease:"power1.inOut"})},handleHoverExit=n=>{c.ZP.to(n.target,{duration:.5,scale:1,ease:"power1.inOut"})};var PostCard_PostCard=n=>{let{post:e={}}=n,{title:t,featuredImage:a,slug:o,categories:l}=e,i=l[0];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"ul-blog",children:(0,s.jsxs)(r(),{href:"/".concat(o),children:[(0,s.jsxs)("div",{className:"image-box-blog",children:[a&&(0,s.jsx)(d(),{className:"img-blog","data-cursor-size":"120px","data-cursor-text":"Read More","data-cursor-color":"#000",src:a.sourceUrl,alt:"".concat(e.title," featured image"),title:e.title,width:600,height:1e3,priority:!1,onMouseEnter:n=>handleHover(n),onMouseOut:n=>handleHoverExit(n)}),i&&(0,s.jsx)("h5",{className:"blog-list-tag",children:i.name})]}),(0,s.jsx)("h4",{className:"desc-tag",dangerouslySetInnerHTML:{__html:t}})]})})})}}}]);