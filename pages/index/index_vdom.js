/*v0.7cc_20160919*/
var $gwxc
var $gaic={}
$gwx=function(path,global){
function _(a,b){b&&a.children.push(b);}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'enough, dom limit exceeded, you don\'t do stupid things, do you?'};return {tag:tag.substr(0,3)=='wx-'?tag:'wx-'+tag,attr:{},children:[]}}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wl(tname){console.warn('template `' + tname + '` is being call recursively, will be stop.')}
function _ai(i,p,e,me){var x=_grp(p,e,me);if(x)i.push(x);else{console.warn('path `'+p+'` not found from `'+me+'`')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i])continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(d[e[p].i[x]][c])return d[e[p].i[x]][c]};var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(d[ii[x]][c])return d[ii[x]][c]}}
function _gapi(e,p){if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);if(x){if($ixc[x]){console.warn('`'+p+'` is being included in a loop, will be stop');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{console.warn('included path `'+p+'` not found from `'+me+'`')}}
var e_={}
if(global&&typeof(global.entrys)=='object')e_=global.entrys
var d_={}
if(global&&typeof(global.defines)=='object')d_=global.defines
var p_={}
d_['app_src/pages/index/index.wxml']={}
var m0=function(e,s,r,gg){
var uB=_n('view')
uB.attr.class="container"
var hC=_n('view')
hC.attr.bindtap="bindViewTap"
hC.attr.class="user-text"
var aD=_n('icon')
aD.attr.size="30"
aD.attr.type="success"
_(hC,aD)
var oE=_n('text')
oE.attr.class="user-motto"
var jF="You have hit me for "
var aG=_s(s,e,'count')

jF+=typeof(aG)=='undefined'?'':aG
jF+=" times"
jF=jF.toString()
_(oE,jF)
_(hC,oE)
_(uB,hC)
var cH=_n('button')
cH.attr.bindtap="bindViewTap2"
cH.attr.type="primary"
var kI=" visit detail "
kI=kI.toString()
_(cH,kI)
_(uB,cH)
var yJ=_n('canvas')
yJ.attr.canvasId="firstCanvas"
yJ.attr.style="width: 300px; height: 200px; margin:10px"
_(uB,yJ)
var sK=_n('view')
sK.attr.class="section tc"
var bL=_n('video')
bL.attr.binderror="videoErrorCallback"
bL.attr.src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
_(sK,bL)
_(uB,sK)
var lM=_n('view')
lM.attr.class="section section_gap"
lM.attr.style="text-align: left;"
var cN=_n('audio')
var sO=_s(s,e,'audioAction')

cN.attr.action=typeof(sO)=='undefined'?'':sO
var hQ=_s(s,e,'current')

var bP=hQ?hQ.author:undefined
cN.attr.author=typeof(bP)=='undefined'?'':bP
cN.attr.bindplay="audioPlayed"
cN.attr.bindtimeupdate="audioTimeUpdated"
cN.attr.controls=true
var aS=_s(s,e,'current')

var uR=aS?aS.name:undefined
cN.attr.name=typeof(uR)=='undefined'?'':uR
var eU=_s(s,e,'current')

var hT=eU?eU.poster:undefined
cN.attr.poster=typeof(hT)=='undefined'?'':hT
var eW=_s(s,e,'current')

var rV=eW?eW.src:undefined
cN.attr.src=typeof(rV)=='undefined'?'':rV
_(lM,cN)
_(uB,lM)
_(r,uB)
return r
}
e_["app_src/pages/index/index.wxml"]={f:m0,i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
try{
main(env,{},root,global);
}catch(err){
console.log(err)
}
return root;
}
}
}

