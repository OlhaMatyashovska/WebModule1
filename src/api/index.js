import {Router} from "express";

const apiRouter=new Router();

let foto=[
    {
       id:1,
       author:"Taya Bobyk",
       name:"Beautiful landscape",
       description:"scenery foto",
       likeNumber:31,
       fotoUrl:"data:image/jpeg",
       hashtags:[
         "#verynice",
         "#beayturules",
         "#taya"
       ],
       comments:[
           "Amazing",
           "You are very talented"
       ],
       dateofTaking:"December 17, 2018 03:24:00"
    },
    {
        id:2,
        author:"Vika Kampo",
        name:"Friends",
        description:"portarait foto",
        likeNumber:100,
        fotoUrl:"data:image/we1d",
        hashtags:[
          "#love",
          "#friendshipgoals",
          "#taya"
        ],
        comments:[
            "How lucky you are to have such friends",
            "Miss you"
        ],
        dateofTaking:"December 17, 2015 03:24:00"
    }
    
];
apiRouter.get("/",(req,res)=>{
    res.send(foto);
});

  apiRouter.post("/",(req,res)=>{
    foto.push(req.body);
    res.send(foto);
});
  export default apiRouter;