import { useForm } from "react-hook-form";
import './ScreenOne.css'

function ScreenOne({formSub}) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        data.status=true
        formSub(data)
        reset()
    } ;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                {...register("website", {
                    required: true,
                    pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
                })}
                placeholder="Enter Website here to be monitored"
            />
            <div style={{color:"red"}}>
            {errors?.website?.type === "required" && <p>This field is required</p>}
            {errors?.website?.type === "pattern" && <p>Enter correct web URL</p>}
            </div>
            
            <div style={{textAlign:"center"}}>
                <button type="submit">Add</button>
            </div>
            
        </form>
    )
}

export default ScreenOne