let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تتجوزني$/i.test(m.text)) { 
     responses = [ 
   '*موافق طبعا 😩❤‍🔥*'    
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
         '*♥🐥وعليكم السلام*'  ,  
     ]; 
   }else if (/^مارو$/i.test(m.text)) { 
     responses = [ 
  '*عيون مارو*'   ,
  '*اي يروحي*'   ,
  '*عاوز اي؟*'   ,
     ]; 
 }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
  '*اسمي مارو يبن الاحبه*'   ,
  '*هو انا هفضل كل شويه اقول اسمي مارو*'   ,
  '*يسطا وربي اسمي مارو افهم بقي*'   ,
     ]; 

   }else if (/^مارو بتحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
  '*اموت فيك 🌚💔*'  ,
  '*اكرهك🙂💔*'  ,
  '*احبك نص حب 🙃💔*'  ,
]; 
   }else if (/^مارو بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
  '*ماعاش من يكرهكك حبي 🙁*'  ,
  '*لا بس لا تتعب نفسك لحبك🫥*'  ,
  '*ااي اكرهك🙄*'  ,
     ]; 
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
         '*هالو🌚♥*'  ,  

     ]; 
}else if (/^بحبك|حبك|حبق|بحبق/i.test(m.text)) { 
     responses = [ 
         '*بحبك اكتر🌚❤*'  ,  
  '*مش اكتر مني*'   ,

     ]; 
   }else if (/^كسم البوت$/i.test(m.text)) { 
     responses = [ 
  '*متشتمش البوت يبن الشرموطه*'   ,
  '*لكسمك عادي يعني*'   ,
     ]; 
   } else if (/^متيجي$/i.test(m.text)) { 
     responses = [ 
  '*عيب*'  
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
         '*الحمدلله وانت*'  ,  

     ];
     }else if (/^بتحبني$/i.test(m.text)) { 
     responses = [ 
        '*🌚♥اكيد*'  ,  

     ];
     }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
         '*ابويا ناك امك*'  , 
  '*لتلاته كسمك*'   ,
  '*ابويا عند امك*   ,

     ];
     }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*تتجوزيني*'  ,  
     ]; 
     }else if (/^مساء|مسا$/i.test(m.text)) { 
     responses = [ 
         '*مساء الخير*'  ,  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
         '*صباح الورد♥*'  ,  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
         '*لا تنسى ال .*'  ,  
     ];
            }else if (/^Maro$/i.test(m.text)) { 
     responses = [ 
         '*تحت امرك حبي*'  ,  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
         '*مرحبا♥*'  ,  
     ];
     }else if (/^مولتوف$/i.test(m.text)) { 
     responses = [ 
          '*عمك وعم عيالك*'   ,  
     ];
     }else if (/^ادخل.$/i.test(m.text)) { 
     responses = [ 
        '*كلم المطور عشان يضيفو ولو ممعكش رقم المطور قول كدا .المطور*'   ,  
     ];
     }else if (/^يغوتي|يغتي|يغوتي|يتي$/i.test(m.text)) { 
     responses = [ 
          '*عليكي😚💕*'   ,  
     ];
     }else if (/^الحمدلله$/i.test(m.text)) { 
     responses = [ 
          '*يدوم الحمد*'   ,  
     ];
     }else if (/^اقلع$/i.test(m.text)) { 
     responses = [ 
        '*اتحايلي شويه انا م رخيص*'   , 
         '*قلعت*'  
     ];
     }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
          '*الشارع الـ وراه*'   ,  
     ];
     }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
          '*اوه شيت*'   ,  
         '*احتين علي احتك وحده ليك و وحده لعمتك*'  
     ];
     }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
          '*بدوب ف امك*'   ,  
     ];
     }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
          '*لا*'   ,
  '*هتدفعي كام*'   ,
  '*هفكر*'   ,
     ];
     }else if (/^بموت|هموت$/i.test(m.text)) { 
     responses = [ 
          '*يارب*'   ,  
     ];
     }else if (/^جوزوني$/i.test(m.text)) { 
     responses = [ 
          '*اتجوزيني*'   ,  
         '*لا*'  
     ];
       }else if (/^جوزني$/i.test(m.text)) { 
     responses = [ 
          '*لا بغير*'   , 
         '*هتجوزك انا ي اما بلاش*'  
     ];
     }else if (/^يووه$/i.test(m.text)) { 
     responses = [ 
          '*متزعليش حقك عليا*'   ,  
     ];
     }else if (/^خخ$/i.test(m.text)) { 
     responses = [ 
          '*متزمرش خف صداع*'   ,  
     ];
     }else if (/^خخخ$/i.test(m.text)) { 
     responses = [ 
          '*حاسب لتشرق*'   ,  
     ];
     }else if (/^مارو اشتمهم$/i.test(m.text)) { 
     responses = [ 
          '*كسمهم عشانك*'   ,  
         '*كلهم تحت رجلك*'  ,
  '*متعملش دماغك بدماغهم هما اطفال*'   ,
  '*هكسمهم عشانك دلوقتي*'   ,
     ];
     }else if (/^مارو حبني$/i.test(m.text)) { 
     responses = [ 
          '*بحبك اصلا*'   ,  
     ];
     }else if (/^بوسني$/i.test(m.text)) { 
     responses = [ 
          '*موااحح ف بوقك😗🤭*'   ,  
         '*اموااحح ف شفايفك👄😚*'  
     ];
     }else if (/^لف$/i.test(m.text)) { 
     responses = [ 
          '*لفيت بعبصتك واختفيت*'   ,  
     ];
     }else if (/^هات بوسه$/i.test(m.text)) { 
     responses = [ 
           '*اموااحح😘🌚*'    ,  
       ];
     }else if (/^رشقت$/i.test(m.text)) { 
     responses = [ 
            '*ف بوقك*'     ,  
       ];
     }else if (/^حمو ايكسوديا$/i.test(m.text)) { 
     responses = [ 
             '*عمك وعم عيالك*'      ,  
       ];
     }else if (/^كسم حمو$/i.test(m.text)) { 
     responses = [ 
             '*متشتمش عمك يعبيط*'      ,  
       ];


   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
