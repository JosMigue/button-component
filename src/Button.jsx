import './button.css'
const Button = ({variant, disableShadow, disabled, startIcon, endIcon, size, color}) => {
    function buttonSpecs(){
        let finalClass = '';
        color = !color ? 'default': color;
        size = !size ? 'sm': size;
        if(!variant){
            finalClass += `${color}-color-button`;
        }else if(variant == 'text'){
            finalClass += ` ${color}-text-button`;
        }
        else if(variant == 'outline'){
            finalClass += ` ${color}-outline-button`;
        }
        if(disabled && !variant){
            finalClass = 'disabled-button'
        }else if(disabled && variant == 'text'){
            finalClass = 'disabled-text-button';
        }else{
            finalClass += ' cursor-pointer';
        }
        if(disableShadow){
            finalClass+=' disable-box-shadow';
        }
        finalClass +=' button-size-'+size;
        disabled = disabled ? true : false;
        return finalClass;
    }

    const RightSideIcon = ({name}) => name ? <span className="material-symbols-outlined">{name}</span> : '';
    const LeftSideIcon = ({name}) => name ? <span className="material-symbols-outlined">{name}</span> : '';

    return (
        <>
        {disabled}
            <button type="button" className={buttonSpecs()} disabled={disabled}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <RightSideIcon name={startIcon}/>
                    Default
                    <LeftSideIcon name={endIcon}/>
                </div>
            </button>
        </>
    )
}

export default Button