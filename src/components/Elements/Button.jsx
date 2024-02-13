export default function Button(props){
    const {children, color = "bg-slate-700"} = props;
    return (
        <button 
        className={`${color} px-5 h-10 rounded-lg text-white`}
        onClick={ () =>(alert("anda mengklik tombol ini"))}
        >
            {children}
        </button>
    )
};