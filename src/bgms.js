/*----------------------------------------------------------------
cmd({
        pattern: "bgms",
        desc: "deletes specific bgm.",
        category: "general",
        filename: __filename,
    }
    
    */


const _0x2429cd=_0x1afc;(function(_0xcd17fe,_0x4ab39b){const _0x42eddb=_0x1afc,_0x155c65=_0xcd17fe();while(!![]){try{const _0x466f57=-parseInt(_0x42eddb(0x1a5))/0x1+parseInt(_0x42eddb(0x1bd))/0x2*(-parseInt(_0x42eddb(0x1ea))/0x3)+-parseInt(_0x42eddb(0x1ae))/0x4*(-parseInt(_0x42eddb(0x1c3))/0x5)+parseInt(_0x42eddb(0x1cc))/0x6+parseInt(_0x42eddb(0x1ee))/0x7*(parseInt(_0x42eddb(0x1e4))/0x8)+-parseInt(_0x42eddb(0x1be))/0x9+parseInt(_0x42eddb(0x1ac))/0xa;if(_0x466f57===_0x4ab39b)break;else _0x155c65['push'](_0x155c65['shift']());}catch(_0x3ff353){_0x155c65['push'](_0x155c65['shift']());}}}(_0x244d,0xf277d));function _0x1afc(_0xbc7545,_0x4f192e){const _0x150bfb=_0x244d();return _0x1afc=function(_0x158d05,_0x4f0f1e){_0x158d05=_0x158d05-0x1a5;let _0x244d21=_0x150bfb[_0x158d05];return _0x244d21;},_0x1afc(_0xbc7545,_0x4f192e);}const _0x4f0f1e=(function(){let _0x394ee0=!![];return function(_0x20efe6,_0xeb9d4d){const _0x39c2bf=_0x394ee0?function(){const _0x39f496=_0x1afc;if(_0xeb9d4d){const _0x4f780d=_0xeb9d4d[_0x39f496(0x1b6)](_0x20efe6,arguments);return _0xeb9d4d=null,_0x4f780d;}}:function(){};return _0x394ee0=![],_0x39c2bf;};}());(function(){_0x4f0f1e(this,function(){const _0x3c4730=_0x1afc,_0x4dde63=new RegExp(_0x3c4730(0x1b3)),_0xb17af4=new RegExp(_0x3c4730(0x1ad),'i'),_0x3fe805=_0x158d05(_0x3c4730(0x1cb));!_0x4dde63[_0x3c4730(0x1cd)](_0x3fe805+'chain')||!_0xb17af4['test'](_0x3fe805+'input')?_0x3fe805('0'):_0x158d05();})();}());const {TelegraPh}=require(_0x2429cd(0x1f1)),ffmpeg=require(_0x2429cd(0x1c5)),axios=require(_0x2429cd(0x1e3)),{getBuffer,cmd,Config,tlang}=require(_0x2429cd(0x1f1)),fs=require('fs-extra'),util=require('util'),exec=util[_0x2429cd(0x1d4)](require(_0x2429cd(0x1e1))[_0x2429cd(0x1dc)]),mongoose=require(_0x2429cd(0x1c8)),Bgm=new mongoose['Schema']({'id':{'type':String,'unique':!![],'required':!![],'default':'1'},'bgm':{'type':Boolean,'default':![]},'bgmArray':{'type':Map,'of':String,'default':{}}}),bgm=mongoose['model'](_0x2429cd(0x1f4),Bgm);async function convertAudioToBlackScreenVideo(_0x5c6e5e,_0x15ccb8){const _0x5b0076=_0x2429cd;try{try{fs['unlinkSync'](_0x15ccb8);}catch(_0x84f3e9){}const _0x5f37c5=_0x5b0076(0x1c7)+_0x5c6e5e,{stdout:_0x424cc1}=await exec(_0x5f37c5),_0x10a9ef=parseFloat(_0x424cc1);try{fs[_0x5b0076(0x1b9)](_0x5b0076(0x1d8));}catch(_0x5eb256){}const _0x5c0ef8=_0x5b0076(0x1f0)+_0x10a9ef+_0x5b0076(0x1bb);await exec(_0x5c0ef8);const _0xee1310=_0x5b0076(0x1c9)+_0x5c6e5e+_0x5b0076(0x1c1)+_0x15ccb8;return await exec(_0xee1310),console['log'](_0x5b0076(0x1d6)),{'result':!![]};}catch(_0x5bdfe9){return console[_0x5b0076(0x1e0)](_0x5b0076(0x1db),_0x5bdfe9),{'result':![]};}}cmd({'pattern':_0x2429cd(0x1b0),'desc':_0x2429cd(0x1de),'category':_0x2429cd(0x1ef),'filename':__filename},async(_0x5d9b82,_0x2688af,_0x57ec46,{isCreator:_0x3e9406})=>{const _0x4475d9=_0x2429cd;if(!_0x3e9406)return _0x2688af[_0x4475d9(0x1b7)](tlang()['owner']);if(!_0x57ec46)return await _0x2688af[_0x4475d9(0x1b7)](_0x4475d9(0x1a6));let _0x557765=await bgm[_0x4475d9(0x1ed)]({'id':'3'})||await new bgm({'id':'3'})['save']();return _0x557765[_0x4475d9(0x1c6)][_0x4475d9(0x1b4)](_0x57ec46)?(_0x557765[_0x4475d9(0x1c6)][_0x4475d9(0x1eb)](_0x57ec46),await _0x557765[_0x4475d9(0x1da)](),await _0x2688af['reply'](_0x4475d9(0x1e2)+_0x57ec46+'_\x20removed\x20from\x20BGM.*')):await _0x2688af[_0x4475d9(0x1b7)](_0x4475d9(0x1f2)+_0x57ec46+_0x4475d9(0x1ca));}),cmd({'pattern':'allbgm','desc':_0x2429cd(0x1e7),'category':_0x2429cd(0x1ef),'filename':__filename},async(_0x1caad2,_0x726d41,_0xc66699,{isCreator:_0x21c943})=>{const _0xaf5bc2=_0x2429cd;if(!_0x21c943)return _0x726d41[_0xaf5bc2(0x1b7)](tlang()[_0xaf5bc2(0x1df)]);_0xc66699=_0xaf5bc2(0x1d0);const {TelegraPh:_0xce4193}=require(_0xaf5bc2(0x1f1));let _0x2f463f=await bgm[_0xaf5bc2(0x1ed)]({'id':'3'})||await new bgm({'id':'3'})[_0xaf5bc2(0x1da)]();for(const [_0x451161,_0x4b9e7c]of _0x2f463f[_0xaf5bc2(0x1c6)]){_0xc66699+='*'+_0x451161+_0xaf5bc2(0x1a9)+_0x4b9e7c+_0xaf5bc2(0x1e6);}return await _0x726d41[_0xaf5bc2(0x1b7)](_0xc66699);}),cmd({'pattern':_0x2429cd(0x1ce),'desc':_0x2429cd(0x1b2),'category':_0x2429cd(0x1ef),'filename':__filename},async(_0x55e72e,_0x219bac,_0x1928a8,{isCreator:_0x45f702})=>{const _0x51a4a8=_0x2429cd;if(!_0x45f702)return _0x219bac['reply'](tlang()[_0x51a4a8(0x1df)]);if(!_0x219bac[_0x51a4a8(0x1d3)])return await _0x219bac[_0x51a4a8(0x1b7)](_0x51a4a8(0x1d1));if(!_0x1928a8)return await _0x219bac[_0x51a4a8(0x1b7)](_0x51a4a8(0x1bc));let _0x558c09=![],_0x381f0f='';if(_0x219bac['quoted'][_0x51a4a8(0x1b1)]==_0x51a4a8(0x1bf))_0x381f0f=await _0x55e72e[_0x51a4a8(0x1c4)](_0x219bac['quoted']),_0x558c09=!![];else{if(_0x219bac[_0x51a4a8(0x1d3)][_0x51a4a8(0x1b1)]==_0x51a4a8(0x1d9)){_0x558c09=![];let _0x40e695=await _0x55e72e['downloadAndSaveMediaMessage'](_0x219bac[_0x51a4a8(0x1d3)],_0x51a4a8(0x1d2)),_0x3707e0=await convertAudioToBlackScreenVideo(_0x40e695,_0x51a4a8(0x1e5));_0x3707e0[_0x51a4a8(0x1ba)]&&(_0x381f0f=_0x51a4a8(0x1e5));}else return await _0x219bac[_0x51a4a8(0x1b7)]('Uhh\x20Please,\x20Reply\x20to\x20Audio/Video\x20To\x20Add\x20In\x20Bgm');}if(!_0x381f0f)return await _0x219bac[_0x51a4a8(0x1b7)](_0x51a4a8(0x1ab));let _0x3e506e=await TelegraPh(_0x381f0f);console['log'](_0x3e506e);let _0x5e7a53=await bgm['findOne']({'id':'3'})||await new bgm({'id':'3'})[_0x51a4a8(0x1da)]();try{return _0x5e7a53[_0x51a4a8(0x1c6)][_0x51a4a8(0x1c0)](_0x1928a8,_0x3e506e),await _0x5e7a53[_0x51a4a8(0x1da)](),await _0x219bac[_0x51a4a8(0x1b7)](_0x51a4a8(0x1af)+_0x1928a8+'_');}catch(_0x4660c1){return await _0x219bac[_0x51a4a8(0x1b7)](_0x51a4a8(0x1c2)+_0x4660c1);}}),cmd({'on':_0x2429cd(0x1f3)},async(_0x2d5131,_0x40ca2c,_0x2e3c03)=>{const _0x54cc35=_0x2429cd;if(Config[_0x54cc35(0x1b8)]){let _0x5cd093='\x20'+_0x40ca2c[_0x54cc35(0x1f3)]+'\x20',_0x27cfd1=await bgm[_0x54cc35(0x1ed)]({'id':'3'})||await new bgm({'id':'3'})[_0x54cc35(0x1da)]();for(const [_0x595102,_0x250693]of _0x27cfd1[_0x54cc35(0x1c6)]){let _0x30130d=_0x595102+'\x20';if(_0x5cd093[_0x54cc35(0x1dd)]()[_0x54cc35(0x1ec)](_0x30130d))return await _0x2d5131['sendMessage'](_0x40ca2c['chat'],{'audio':{'url':_0x250693},'mimetype':_0x54cc35(0x1d5),'ptt':!![],'waveform':[0x63,0x4b,0x19,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x5,0x19,0x32,0x4b,0x63,0x4b,0x32,0x19,0x0]});}}});function _0x158d05(_0x1ac7d3){function _0x54e7f0(_0x47766f){const _0x4409f8=_0x1afc;if(typeof _0x47766f===_0x4409f8(0x1cf))return function(_0x482ed1){}[_0x4409f8(0x1d7)]('while\x20(true)\x20{}')[_0x4409f8(0x1b6)](_0x4409f8(0x1b5));else(''+_0x47766f/_0x47766f)[_0x4409f8(0x1a7)]!==0x1||_0x47766f%0x14===0x0?function(){return!![];}['constructor'](_0x4409f8(0x1e9)+_0x4409f8(0x1a8))['call'](_0x4409f8(0x1aa)):function(){return![];}[_0x4409f8(0x1d7)](_0x4409f8(0x1e9)+_0x4409f8(0x1a8))['apply'](_0x4409f8(0x1e8));_0x54e7f0(++_0x47766f);}try{if(_0x1ac7d3)return _0x54e7f0;else _0x54e7f0(0x0);}catch(_0x2364bc){}}function _0x244d(){const _0x5eaaa3=['audio/mpeg','Audio\x20converted\x20to\x20black\x20screen\x20video\x20successfully!','constructor','./blackScreen.mp4','audioMessage','save','An\x20error\x20occurred:','exec','toLowerCase','deletes\x20specific\x20bgm.','owner','error','child_process','*Song\x20_','axios','4644448YQpoPw','./convertedVideo.mp4','_\x20\x0a','Sends\x20list\x20of\x20all\x20bgms','stateObject','debu','381vpNxsq','delete','includes','findOne','21wRxGKL','general','ffmpeg\x20-f\x20lavfi\x20-i\x20color=c=black:s=1280x720:d=','../lib/','Name\x20_\x27','text','bgm','996925osgoPe','*Give\x20Me\x20Song\x20Name\x20to\x20Delete\x20From\x20BGM*','length','gger','\x20:*\x20_','action','There\x27s\x20an\x20Error\x20While\x20Adding\x20Bgm\x20Song','374700OKFfbn','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','12760zwqiHD','*New\x20Song\x20Added\x20in\x20BGM\x20with\x20Name\x20:*\x20\x20_','delbgm','mtype','set\x20quoted\x20song\x20as\x20gm\x20at\x20given\x20text','function\x20*\x5c(\x20*\x5c)','has','counter','apply','reply','disablepm','unlinkSync','result','\x20-vf\x20\x22format=yuv420p\x22\x20./blackScreen.mp4','Uhh\x20Please\x20give\x20me\x20title\x20to\x20set\x20bgm\x20on','6282oHLJAU','2706201uvPRgi','videoMessage','set','\x20-c:v\x20copy\x20-c:a\x20aac\x20-map\x200:v:0\x20-map\x201:a:0\x20','Error\x20updating\x20BGM:','465VayWIB','downloadAndSaveMediaMessage','fluent-ffmpeg','bgmArray','ffprobe\x20-v\x20error\x20-show_entries\x20format=duration\x20-of\x20default=noprint_wrappers=1:nokey=1\x20','mongoose','ffmpeg\x20-i\x20./blackScreen.mp4\x20-i\x20','\x27_\x20does\x20not\x20exist\x20in\x20BGM.','init','3683172QDKwmE','test','addbgm','string','\x20*BGM\x20SONG\x20INFORMATION*\x0a','Uhh\x20Please,\x20Reply\x20to\x20Audio/Video\x20To\x20Add\x20In\x20Bgm','audio','quoted','promisify'];_0x244d=function(){return _0x5eaaa3;};return _0x244d();}