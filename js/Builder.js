import{SkillMap as e,System as t,DBMap as s}from"./Util.js";import n from"./GUI.js";import i from"./IO.js";import r from"./Language.js";import o from"./Stats.js";export default class l{constructor(r=!1){this.exp={skills:new e,subtrees:{medic:{tier:1,points:0},controller:{tier:1,points:0},sharpshooter:{tier:1,points:0},shotgunner:{tier:1,points:0},tank:{tier:1,points:0},ammo_specialist:{tier:1,points:0},engineer:{tier:1,points:0},breacher:{tier:1,points:0},oppressor:{tier:1,points:0},shinobi:{tier:1,points:0},artful_dodger:{tier:1,points:0},silent_killer:{tier:1,points:0},gunslinger:{tier:1,points:0},revenant:{tier:1,points:0},brawler:{tier:1,points:0}},armor:null,perkDeck:null,throwable:null,deployable:null,deployableSecondary:null},this.stats=new o(this),this.sys=new t(this),this.io=new i(this),this.gui=new n(this),this.dbs=new s([["skills",null],["perk_decks",null],["perk_cards",null],["deployables",null],["throwables",null],["armors",null]]),this.fetchPromises=this.dbs.fetchAll(),this.mobile=r,this.lang}loadLanguage(e,t){this.lang=new r(e,t),document.documentElement.setAttribute("lang",t),document.querySelectorAll(".arm_icon > div, .th_icon > div, .dp_icon > div").forEach(e=>e.setAttribute("data-equip",this.lang.get("system.equip"))),document.querySelectorAll(".dp_icon > div").forEach(e=>{e.setAttribute("data-primary",this.lang.get("system.primary")),e.setAttribute("data-secondary",this.lang.get("system.secondary"))});for(const[e]of this.dbs.get("perk_decks")){document.querySelector(`#${e} p`).textContent=this.lang.get(`perk_decks.${e}.name`).toLocaleUpperCase();const t=document.querySelector(`#${e}.pk_selected p`);t&&(t.textContent=`${this.lang.get("system.equipped")}: ${this.lang.get(`perk_decks.${e}.name`).toLocaleUpperCase()}`)}for(const[e]of this.dbs.get("skills"))document.getElementById(e).parentElement.nextElementSibling.textContent=this.lang.get(`skills.${e}.name`).toLocaleUpperCase();document.querySelector(".sk_points_remaining > p").innerHTML=this.lang.get("system.skills.remaining")+document.querySelector(".sk_points_remaining p span").outerHTML,this.gui.Tree_ChangeTo(document.querySelector(".sk_tree_button_active").id.replace("button","container")),document.querySelectorAll("[data-lang]").forEach(e=>{const t=this.lang.get(e.dataset.lang);e.innerHTML=r.ref.has(e.dataset.lang)?t(r.ref.get(e.dataset.lang)):t}),n.COLOR_PATTERN=new RegExp(this.lang.get("system.colors"),"g")}}l.TREES=["mastermind","enforcer","technician","ghost","fugitive"];
