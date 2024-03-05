
const InputFrom = (props) => {
   const {children} = props;
   return (
         <div>
            {children}
         </div>
   )
}

const Label = (props) => {
   const {htmlFor, children} = props;
   return (
      <div className="my-3 flex flex-col">
         <label htmlFor={htmlFor} className="font-medium">{children}</label>
      </div>
)
}
const Input = (props) => {
   const {type, name,placeholder}= props
   return (
      <input  className="px-3 py-2 border border-slate-500 rounded outline-blue-400 "
      type={type} id={name} name={name} placeholder={placeholder} 
      />
   )
}
const Textarea =(props) => {
   const {name} = props;
   return (
      <div className="my-3 flex flex-col mb-6">
         <textarea 
            className="px-3 py-2 border border-slate-500 rounded outline-blue-400"
            name={name} id="textarea" cols="40" rows="5">
         </textarea>
      </div>
   )
}

InputFrom.Label =  Label;
InputFrom.Input = Input;
InputFrom.Textarea = Textarea;

export default InputFrom