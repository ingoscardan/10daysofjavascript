function vowelsAndConsonants(s){
    for(let i = 0; i < s.length; i++){
        if(['a', 'e', 'i', 'o', 'u'].includes(s[i])){
            console.log(s[i])
        }
    }
    for(let i = 0; i < s.length; i++){
        if(!['a', 'e', 'i', 'o', 'u'].includes(s[i])){
            console.log(s[i])
        }
    }
}

exports.vowelsAndConsonants = vowelsAndConsonants;
