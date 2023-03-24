
const Chemistry = document.querySelector("#chemistry")
const CalculateButton = document.querySelector(".Calculate")



CalculateButton.addEventListener("click", (e)=>{
    e.preventDefault()

    const Chemistry = document.querySelector("#chemistry")
    const english = document.querySelector("#english")
    const maths = document.querySelector("#maths")
    const physics = document.querySelector("#physics")
    const computer = document.querySelector("#computer")

    if(Chemistry.value < 0  || Chemistry.value > 100 ){
        alert("please enter a marks in the range of 100 ")

       
    }
    if(english.value < 0  || english.value > 100 ){
        alert("please enter a marks in the range of 100")

    }
    if(maths.value < 0  || maths.value > 100 ){
        alert("please enter a marks in the range of 100")

    }
    if(physics.value < 0  || physics.value > 100 ){
        alert("please enter a marks in the range of 100")

    }
    if(computer.value < 0  || computer.value > 100 ){
        alert("please enter a marks in the range of 100")
        return

    }
    if(e.target.value == ""){
        e.target.value = 0

        console.log(value)
    }

   

    const total = parseInt(Chemistry.value) + parseInt(computer.value) + parseInt(english.value) +
     parseInt(maths.value) +  parseInt(physics.value) 
   
     document.querySelector("#total").innerText = ` Total Marks :${total}`


       const percentage = (total / 500) * 100
       document.querySelector("#Average").innerText = `Total Average ${percentage}`
      

       if(percentage > 90 || percentage == 90 ){
        document.querySelector("#Grade").innerText =  "You GOT A GRADE"
       }
       if(percentage >= 80 ||percentage < 89){
        document.querySelector("#Grade").innerText =  "You GOT B GRADE"
       }
       if(percentage >= 70 ||percentage < 79){
        document.querySelector("#Grade").innerText =  "You GOT C GRADE"
       }
       if(percentage >= 60 ||percentage < 69){
        document.querySelector("#Grade").innerText =  "You GOT D GRADE"
       }
       if(percentage <60 ){
        document.querySelector("#Grade").innerText =  "You GOT F GRADE"
       }





    

  
    

})