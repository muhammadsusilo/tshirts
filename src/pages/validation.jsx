
const validation =(values) =>{
   let errors ={}

   if(!values.name){
      errors.name ="Name Required"
   }
   else if(values.name.length < 4){
      errors.name ="Name min 4 char"
   } else {
      errors()
   }

   if(!values.email){
      errors.email ="email Required"
   }
   else if(values.email.length < 4){
      errors.email ="email min 4"
   } 

   if(!values.textarea){
      errors.textarea ="Text Required"
   }
   else if(values.textarea.length < 7){
      errors.textarea ="text min 30 char"
   } 

   return errors;
}

export default validation;