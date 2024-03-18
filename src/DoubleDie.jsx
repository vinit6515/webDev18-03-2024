export default function DoubleDie({numSides=6}){
    const rollDie=()=>Math.floor(Math.random()*numSides)+1;
    const roll1=rollDie();
    const roll2=rollDie();
    return(
        <div>
        {numSides}-sided Dice-1: {roll1};<br />
        {numSides}-sided Dice-2: {roll2};
        </div>
    );
}
