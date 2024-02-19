import Button from "./Button"

const InputFrom = (props) => {
   const {children} = props;
   return (
      <div className="">
         {children}
      </div>
   )
}

const LabelInput = (props) => {
   const {label,type,name,placeholder} =props;
   return (
      <div className="my-3 flex flex-col">
         <label htmlFor={name} className="font-medium">{label}</label>
         <input  className="px-3 py-2 border border-slate-500 rounded outline-blue-400 "
         type={type} id={name} name={name} placeholder={placeholder} 
         />
      </div>
   )
}

const Textarea =() => {
   return (
      <div className="my-3 flex flex-col mb-6">
         <label htmlFor="textarea" className="font-medium">Textarea Suggestion</label>
         <textarea 
         className="px-3 py-2 border border-slate-500 rounded outline-blue-400"
         name="Textarea" id="textarea" cols="40" rows="5">
         </textarea>
      </div>
   )
}

InputFrom.LabelInput = LabelInput;
InputFrom.Textarea = Textarea;

export default InputFrom