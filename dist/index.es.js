import{isNil,compose,assoc,objOf}from"ramda";var identity=o=>o,createAction=(o,t,e=identity)=>isNil(t)?()=>({type:o}):compose(assoc("type",o),objOf(t),e);export{createAction};
