 export default function Button(props){
    const {children, color = "bg-slate-700", onClick, type ="button"} = props;
    return (
        <button 
        className={`${color} px-5 h-10 rounded-lg text-white shadow-lg`}
        type={type}

        onClick={() => onClick()}
        >
            {children}
        </button>
    )
};

// export default function HandleClick({href, children}) {
//     function NextClick() {
//         window.location.href= `/${href}`
//     };
//     return (
//         <Button onClick={NextClick}>
//             {children}
//         </Button>
//     );
// };