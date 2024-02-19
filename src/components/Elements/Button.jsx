 export default function Button(props){
    const {children, color ="bg-slate-500", onClick, type ="button"} = props;
    return (
        <button 
        className={`${color} px-5 h-10 rounded-lg text-white  shadow shadow-slate-600`}
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