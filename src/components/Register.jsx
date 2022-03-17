// // import React from 'react'
// // import { useForm } from "react-hook-form";

// // const Register = () => {
// //     const {register,
// //         formState: {errors},
// //         handleSubmit} = useForm()

// //         const onSubmit = (data) =>{
// //             alert(JSON.stringify(data));
// //         }

// //   return (
// //     <div className="container">
// //         {/* {document.children.addEventListener(event=>{
// //             event.preventDefault();
// //         })} */}
// //         <form>
// //             <h3  className="form-title">Введите ваше имя</h3>
// //             <input type="text" 
// //              className="form-control" 
// //             onSubmit={handleSubmit(onSubmit)} 
// //             {...register('Введите ваше имя',{required: true})}
// //                 />
// //             <h3 className="form-title">Введите ваше фамилие</h3>
// //             <input type="text" className="form-control" />
// //             <h3 className="form-title">Ваша почта</h3> 
// //             <input type="text"  className="form-control"/>
// //             <h3 className="form-title">Ваш номер телефона</h3>
// //             <input type="text" className="form-control" />
// //             <input type="submit" />
// //         </form>
// //     </div>
// //   )
// // }

// // export default Register

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Register() {
//   const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example"))
//     const onAlert = (data)=>{
//         alert(JSON.stringify(data));
//         reset()
//     }
//   return (

//     <div className ="container">
//         <form action=""onSubmit={handleSubmit(onSubmit)}>
//     <h3>Ваше имя</h3>
//       <input {...register("example")} className = "form-control" />
//       <h3>Ваше фамилие</h3>

//       <input {...register("exampleRequired", { required: true })} className = "form-control"/>
//       <h3>Ваша почта</h3>

//       <input {...register("exampleRequired", { required: true})} className = "form-control"/>

//       <h3>Ваш номер телефона</h3>

//       <input {...register("exampleRequired", { required: false })} className = "form-control"/>



//     <h3>отправить данные</h3>
//       {errors.exampleRequired && <span className = "red">Заполните остальные формы!</span>}
//       <input type="submit" className = "form-control-submit"  />
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useForm } from "react-hook-form";


const Input = ({ label, register, required }) => (
  <>
    <input className = "form-control" {...register(label, {required})} />
  </>
);



const Register = () => {
  //   const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  //   reset()
  // };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="container">

    //   <Input label="First Name" register={register}  />

    //   <h3>Ваше фамилие</h3>
    //   <Input label="First Name" register={register} />

    //   <h3>Ваша почта</h3>
    //   <Input label="First Name" register={register} />


    //   <h3>Отправить данные</h3>
    //   <input type="submit" className="form-control-submit" onSubmit ={()=>onSubmit()} />
    //   {errors.exampleRequired && <span className = "red">Заполните остальные формы!</span>}
    //   </div>
    // </form>
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Ваше имя</h3>

    <input defaultValue="" {...register("example")}  className="form-control-submit" onSubmit ={()=>onSubmit()} />
    <h3>Ваше фамилие</h3>

    <input {...register("exampleRequired", { required: true })}  className="form-control-submit" onSubmit ={()=>onSubmit()}  />

    {errors.exampleRequired && <span style = {{color: "red"}}>This field is required</span>}
    <h3>Отправить данные</h3>
    <input type="submit" className = "form-control-submit"/>
  </form>
  </div>
  );
};
export default Register