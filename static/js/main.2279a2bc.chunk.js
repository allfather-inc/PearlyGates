(this["webpackJsonppearly-gates"]=this["webpackJsonppearly-gates"]||[]).push([[0],{75:function(e,t,r){},86:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r(1),s=r(58),c=r.n(s),i=r(68),u=(r(75),r(15)),o=r(17),l=r(5),f=r(69),d=r(34),j=r(59),h=r(26),v=r(60),m=r(61);Object(o.d)({EffectComposer:f.a,ShaderPass:d.a,SavePass:j.a,RenderPass:m.a});var b={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},tDiffuse3:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\n    }\n  ",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse1;\n    uniform sampler2D tDiffuse2;\n    uniform sampler2D tDiffuse3;\n    \n    void main() {\n      vec4 del0 = texture2D(tDiffuse1, vUv);\n      vec4 del1 = texture2D(tDiffuse2, vUv);\n      vec4 del2 = texture2D(tDiffuse3, vUv);\n      // min alpha hides until all buffers are full\n      float alpha = min(min(del0.a, del1.a), del2.a);\n      gl_FragColor = vec4(del0.r, del1.g, del2.b, alpha);\n    }\n  "};function p(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),s=Object(n.useRef)(!1),c=Object(o.g)(),i=c.scene,u=c.gl,f=c.size,d=c.camera,j=Object(n.useMemo)((function(){return{rtA:new l.WebGLRenderTarget(f.width,f.height),rtB:new l.WebGLRenderTarget(f.width,f.height)}}),[f]),m=j.rtA,p=j.rtB,x=u.getPixelRatio();return Object(n.useEffect)((function(){e.current.setSize(f.width,f.height)}),[f]),Object(o.f)((function(){e.current.render();var a=s.current?p:m,n=s.current?m:p;t.current.renderTarget=n,r.current.uniforms.tDiffuse2.value=a.texture,r.current.uniforms.tDiffuse3.value=n.texture,s.current=!s.current}),1),Object(a.jsxs)("effectComposer",{ref:e,args:[u],children:[Object(a.jsx)("renderPass",{attachArray:"passes",scene:i,camera:d}),Object(a.jsx)("shaderPass",{attachArray:"passes",ref:r,args:[b,"tDiffuse1"],needsSwap:!1}),Object(a.jsx)("savePass",{attachArray:"passes",ref:t,needsSwap:!0}),Object(a.jsx)("shaderPass",{attachArray:"passes",args:[v.a],"uniforms-resolution-value-x":1/(f.width*x),"uniforms-resolution-value-y":1/(f.height*x)}),Object(a.jsx)("shaderPass",{attachArray:"passes",args:[h.a]})]})}var x=r(44),O=function(e,t,r,a){return 2*r/Math.PI*Math.atan(Math.sin(2*Math.PI*e*a)/t)};function g(){var e=Object(n.useRef)(),t=Object(n.useMemo)((function(){var e=new l.Vector3,t=new l.Matrix4,r=Object(u.a)(Array(1e4)).map((function(e,t){var r=new l.Vector3;return r.x=t%100-50,r.y=Math.floor(t/100)-50,r.y+=t%2*.5,r.x+=.3*Math.random(),r.y+=.3*Math.random(),r})),a=new l.Vector3(1,0,0),n=r.map((function(e){return e.length()+.5*Math.cos(8*e.angleTo(a))}));return{vec:e,transform:t,positions:r,distances:n}}),[]),r=t.vec,s=t.transform,c=t.positions,i=t.distances;return Object(o.f)((function(t){for(var a=t.clock,n=0;n<1e4;++n){var u=i[n],o=a.elapsedTime-u/25,l=O(o,.15+.2*u/72,.4,1/3.8);r.copy(c[n]).multiplyScalar(l+1.3),s.setPosition(r),e.current.setMatrixAt(n,s)}e.current.instanceMatrix.needsUpdate=!0})),Object(a.jsxs)("instancedMesh",{ref:e,args:[null,null,1e4],children:[Object(a.jsx)("circleBufferGeometry",{args:[.15]})," ",Object(a.jsx)("meshBasicMaterial",{})," "]})}function y(){return Object(a.jsxs)(o.a,{orthographic:!0,camera:{zoom:20},colorManagement:!1,resize:{polyfill:x.a},children:[Object(a.jsx)("color",{attach:"background",args:["black"]}),Object(a.jsx)(p,{}),Object(a.jsx)(g,{})]})}r(12),r(9),r(22),r(65);function D(){return Object(a.jsxs)(i.a,{basename:"/",children:[Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("h2",{className:"content__title",children:["Indian ",Object(a.jsx)("span",{className:"content__title_inverted",children:"Innovation"})," Company"]})}),Object(a.jsx)("div",{id:"animation",children:Object(a.jsx)(y,{})})]})}c.a.render(Object(a.jsx)(D,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.2279a2bc.chunk.js.map