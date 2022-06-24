import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {  
  const [dogs, setDogs] = useState(1);
  const [cats, setCats] = useState(1);
  const [dogPercent, setdogPercent] = useState(0);
  const [catPercent, setcatPercent] = useState(0);


  const catColor = document.querySelector('.cats');
  catColor.style.color = 'cornflowerblue';

    const dogColor = document.querySelector('.dogs');
  dogColor.style.color = 'seagreen';
  
    const dogNum = document.querySelector('.dog');
    dogNum.innerHTML = `${dogPercent}%` ;

     const catNum = document.querySelector('.cat');
     catNum.innerHTML = `${catPercent}%`;

     const catbg = document.querySelector('.green-container');
     catbg.style.width = `${dogPercent}%`

   const dogbg = document.querySelector('.blue-container');
     dogbg.style.width = `${catPercent}%`;
   

  
  

  const totalnum = dogs + cats
  console.log(totalnum)
  
  const dogChecker = () => {
    const dog = dogs + 1
    setDogs(dog)
    dogpercentage()
    catpercentage()
  }

   const catChecker = () => {
    const cat = cats + 1
    setCats(cat)
     catpercentage()
     dogpercentage()
  }

  const dogpercentage = () => {
    const dp = dogs/totalnum * 100
    const dprounded = dp.toFixed(1)
    console.log(dprounded)
    setdogPercent(dprounded)
  }

    const catpercentage = () => {
    const cp = cats/totalnum * 100
    const cprounded = cp.toFixed(1)
    console.log(cprounded)
    setcatPercent(cprounded)
  }

 




  return (
    <main>
      <div className='green-container'>
      </div>
      <div className='blue-container'>
      </div>

      <div className='choice-container'>
        
      <div className='dogs' onClick={dogChecker} >
        <h1>Dogs</h1>
        <p className='dog'>0%</p>
      </div>

        <div className='cats'onClick={catChecker}>
          <h1>Cats</h1>
          <p className='cat'>0%</p>
        </div>

      </div>

       <div  className='total-votes'>
          <h2>
              The Total votes:  {totalnum}
          </h2>
        </div>
    </main>
  );
}

export default App;