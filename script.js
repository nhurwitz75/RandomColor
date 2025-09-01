class Main {
    colorPick() {
        let r = Math.floor(Math.random()*256); 
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256); 

        let color = `rgb(${r}, ${g}, ${b})`; 

        return color; 
    }
}

console.log(Main.colorPick()); 