export default function Button(props){
    const {name} = props
    return (
        <button 
        className="bg-slate-800 px-5 h-10 rounded-lg text-white">
            {name}
        </button>
    )
};