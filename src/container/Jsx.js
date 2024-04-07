

let  name='mohan';
function SwitchCase(char){
  switch(char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    return <div>Vowel</div>
    default:
    return <div>Not Vowel</div>
  }
}

let num=4;
let ch ='a'
const users = [
  { name:'mohan', age:24 },
  { name:'sonu', age:19  },
  { name:'priya', age:15  },
]
function Jsx() {
  return (
    <div>
      <h2 >Hello {name} 18</h2>
      <div>
        
        {
          num%2===0? <div>Even number</div>
          : <div> Odd number</div>
        }
        <h3>If statement</h3>
        {
          num%2===0 && <div>Even num</div>
        }
        {
          num%2>0 && <div>Odd num</div>
        }
      </div>
      <h3>SwitchCase</h3>
      {<div>{SwitchCase}</div>}
        </div>);
}


      
      

export default Jsx;

export function Greet(){
  return <h1>Hello World</h1>
}
