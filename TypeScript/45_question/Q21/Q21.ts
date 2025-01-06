
//QUESTION NO 21 (STORE A VARIOUS RELATED DATA ABOUT A SINGLE ENTITY)

let drama : {title:string; writer:string; Directed: string; Onair: any} = {
    title:"Love Like the Galaxy",
    writer:" Guan Xin Ze Luan.",
    Directed: " Fei Zhenxiang",
    Onair:2022,
 };
 console.log(`Drama Info ${drama.title} writen by ${drama.writer} and Directed by ${drama.Directed}
    ${drama.title}, releasd in ${drama.Onair}`);