function reveseString(s){
    try {
        let rev = s.split("");
        rev = rev.reverse();
        rev = rev.join("");
        console.log(rev);
    }catch (e){
        console.log(e.message);
        console.log(s);
    }
}

exports.reveseString = reveseString;
