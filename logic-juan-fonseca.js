
const fibonacci = (n) => {
    let sequence = [0,1];
    for (let i=2; i<=n; i++) {
        sequence[i] = sequence[i-2]+ sequence[i-1];
    }
    return (n==0 || n==1) ? n : sequence[n];
}

const repeatedWords = (text) => {
    let textLowered = text.toLowerCase();
    let counted = textLowered.split(/\W+/).reduce((acc,cur)=> {
        if(acc[cur] ){
            acc[cur]++;
        } else {
            acc[cur]=1;
        }
        return acc;
    },{});
    return Object.keys(counted).reduce( (acc,idx)=> {
        if(counted[idx]>1){
            acc[idx]= counted[idx];
        }
        return acc;
    },{});
}

const fizzBuzz = () => {
    return Array.from({length: 100}, (prev, pos) =>
        ((pos+1) % 3) == 0
        ? ((pos+1) % 5 == 0 ? "fizz buzz" : "fizz" )
        : ((pos+1) % 5 == 0 ? "buzz" : (pos+1)))
}

module.exports ={fibonacci,repeatedWords,fizzBuzz};
