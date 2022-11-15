
const capitalize = (string)=>{
    const strings = string.split(" ");
    const capitalisedStrings = strings.map((str)=>str.charAt(0).toUpperCase()+str.slice(1));
    return capitalisedStrings.reduce((result, str)=>{return result+" "+str});
};

export {capitalize}

