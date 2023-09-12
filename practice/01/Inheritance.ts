class animal
{
    move(steps : number)
    {
        console.log(`moved : ${steps}`)
    }
}

class dog extends animal
{
    bark()
    {
        console.log("Woof Woof!");
    }
}

const d = new dog();
d.bark();
d.move(50);
d.bark();