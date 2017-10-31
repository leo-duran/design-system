
          window.__NEXT_REGISTER_PAGE('/components/text', function() {
            var comp = module.exports=webpackJsonp([19],{1004:function(e,t,n){e.exports=n(1005)},1005:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(l);Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),r=a(s),u=n(1),o=(a(u),n(166)),m=a(o),d=n(19);t.default=(0,d.withServerProps)(function(e){return i.default.createElement(d.Chrome,null,i.default.createElement(d.Content,{title:"Text"},i.default.createElement(d.PageHeading,{packageName:"text"},"Text"),i.default.createElement(d.P,null,"Install the component dependency:"),i.default.createElement(d.Code,{language:"bash"},"npm install @pluralsight/ps-design-system-text"),i.default.createElement(d.P,null,"Include a React component in your project:"),i.default.createElement(d.Code,{language:"javascript"},"import * as Text from '@pluralsight/ps-design-system-text/react'"),i.default.createElement(d.SectionHeading,null,"Heading"),i.default.createElement(d.P,null,"Heading styles compose complimentary typography attributes for simplified implementation. Try to use common heading styles when possible."),i.default.createElement(d.Example.React,{orient:"vertical",includes:{Text:m.default},codes:(0,r.default)(m.default.Heading.sizes).map(function(e){return"\n<Text.Heading size={Text.Heading.sizes."+e+"}>\n  <h2>"+e+"</h2>\n</Text.Heading>\n"})}),i.default.createElement(d.PropTypes,{title:"Text.Heading PropTypes",props:[d.PropTypes.row(["size",d.PropTypes.union(m.default.Heading.sizes),null,i.default.createElement("code",null,"large"),i.default.createElement("span",null,"size and style of heading (from ",i.default.createElement("code",null,"Text.Heading.sizes"),")")])]}),i.default.createElement(d.SectionHeading,null,"Body text"),i.default.createElement(d.P,null,"Try to use common paragraph style when possible."),i.default.createElement(d.Example.React,{includes:{Text:m.default},codes:["\n<Text.P>\n  Paragraph - Lorem ipsum dolor sit amet adipisicing elit, sed do\n  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n  minim veniam, quis nostrud exercitation nisi ut aliquip ex ea commodo\n  consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed\n  do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n</Text.P>\n      "],orient:"vertical"}),i.default.createElement(d.SectionHeading,null,"List"),i.default.createElement(d.P,null,"Nothing fancy, just simple lists. You’ll know when you need them."),i.default.createElement(d.Example.React,{includes:{Text:m.default},codes:["\n<Text.List>\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n",'\n<Text.List type="bulleted">\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n','\n<Text.List type="numbered">\n  <Text.List.Item>apple</Text.List.Item>\n  <Text.List.Item>orange</Text.List.Item>\n  <Text.List.Item>banana</Text.List.Item>\n  <Text.List.Item>strawberry</Text.List.Item>\n  <Text.List.Item>papaya</Text.List.Item>\n</Text.List>\n']}),i.default.createElement(d.PropTypes,{title:"Text.List PropTypes",props:[d.PropTypes.row(["type",d.PropTypes.union(m.default.List.types),null,i.default.createElement("code",null,"default"),i.default.createElement("span",null,"semantics and bullet styles (from ",i.default.createElement("code",null,"Text.list.types"),")")])]})))})}},[1004]);
            return { page: comp.default }
          })
        