import{r as l}from"./pkgroll_create-require-ce5b37cd.js";import o from"repl";import{transform as c}from"@esbuild-kit/core-utils";export*from"@esbuild-kit/esm-loader";import"module";function p(r){const{eval:a}=r,s=async function(t,n,e,i){try{t=(await c(t,e,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}})).code}catch{}return a.call(this,t,n,e,i)};r.eval=s}const{start:f}=o;o.start=function(){const r=Reflect.apply(f,this,arguments);return p(r),r},l("@esbuild-kit/cjs-loader");
